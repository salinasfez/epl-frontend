import React from 'react';
import { Component } from 'react';
import {Table} from 'react-bootstrap';
import './AllMatches.css'

class AllMatches extends Component{
  state = {
    matchResults: []
  }
  componentDidMount(){
    this.getData();
  }
  getData = () => {
        fetch('https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague?matchday=4', {
          'method': 'GET',
          'headers' : {
            'x-rapidapi-host' : 'heisenbug-premier-league-live-scores-v1.p.rapidapi.com',
            'x-rapidapi-key' : '7be03f9be6mshe9f1f5a6336e3bbp1e2545jsn655686571983'
          }
        })
        .then(res => res.json())
        // .then(json => this.setState({
        //    playerName: json[0]
        // }))
        .then(json => this.setState({
          matchResults : json.matches
        })
       )
        .catch(error => console.log(error));
  }
  // console.log(json.scorers[0].playerName)
  
  render(){
    const nameStyle = {
      color: 'yellow'
    };
    const tieStyle = {
      color: 'blue'
    };
    return(
     <div className='all-matches-table'>
       <h1 className='all-matches-header'>Match Day || 1</h1>
       <Table striped bordered hover variant="dark">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Home</th>
                        <th>Goals</th>
                        <th>Away</th>
                        <th>Goals</th>
                        <th>Total Matchday Points</th>
                      </tr>
                    </thead>
                    <tbody>
                    
                    {this.state.matchResults.map(match => {
                        return(
                          <tr>
                              <td>{match.when}</td>
                              <td>{match.team1.teamName}{match.team1.teamName === 'Chelsea' ? <img className='team-logo' src={"https://seeklogo.net/wp-content/uploads/2011/08/chelsea-logo-vector-400x400.png"} alt={''}/> : '' }</td>
                              <td>{match.team1.teamScore}</td>
                              <td>{match.team2.teamName}{match.team2.teamName === 'Liverpool' ? <img className='team-logo' src={"https://seeklogo.net/wp-content/uploads/2011/08/liverpool-logo-vector-400x400.png"} alt={''}/> : ''}</td>
                              <td>{match.team2.teamScore}</td>
                              {match.team1.teamScore > match.team2.teamScore ? <td style={nameStyle}>{match.team1.teamName}</td> : match.team1.teamScore < match.team2.teamScore ? <td style={nameStyle}>{match.team2.teamName}</td> : match.team1.teamScore === match.team2.teamScore ? <td style={tieStyle}>Draw</td> : ''}
                          </tr>
                        )
                        })}
                    </tbody>
              </Table>



       {/* {this.state.matchResults.map(match => {
         return(
           <div>
            
           </div>
         )
        })} */}
        
     </div>
      
    )
  }
}
export default AllMatches;