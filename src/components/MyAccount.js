import React from 'react';
import { Component } from 'react';
import {Table, Button} from 'react-bootstrap';
import './MyAccount.css';
import HowTo from './HowTo';




class MyAccount extends Component{
  constructor(props){
    super(props)
    this.state = {
      users: [],
      user: {},
      name: '',
      favorite_team: '',
      pick_points: '',
      current_points: '',
      image: ''
      }
  }
  
  componentDidMount(){
    this.getUsers();
    
  }
  getUsers = () => {
    fetch('https://epl-app-api.herokuapp.com/users')
    .then(response => response.json())
    .then(json => this.setState({users: json}))
    .catch(error => console.log(error));
    
  }
  deleteUser = (id, index) => {
    fetch('https://epl-app-api.herokuapp.com/users/' + id, {
      method: 'DELETE'
    })
    .then(() => {
      this.setState({
        users: [...this.state.users.slice(0, index), ...this.state.users.slice(index + 1)]
      });
    });
  }
   handleUpdate = (event) => {
        event.preventDefault();
        const id = event.target.id.value;
        fetch(`http://localhost:3000/users/${id}`, {
            body: JSON.stringify(this.state.formInputs),
            method: "PUT",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        .then(updatedUser => updatedUser.json())
        .then(jUser => {
                fetch("https://epl-app-api.herokuapp.com/users/")
                    .then(updatedUser => updatedUser.json())
                    .then(JupdatedMark => {
                        this.setState({
                            id: "",
                            
                            sites: JupdatedMark,
                            formInputs: {
                                name:"",
                                favorite_team: "",
                                pick_points: "",
                                current_points: "",
                                image: ""
                            }
                        });
                    })
        })
        .catch(err => console.log(err));
    }
    showUser = (id) => {
      fetch('https://epl-app-api.herokuapp.com/users/' + id) 
      .then(res => res.json())
      .then(json => console.log(json))
      .then(json => this.setState({user : json})
      
      )
      
      this.props.history.push('/HowTo');
    }
  
  render(){
    
  return(
  <div className='table'>
    <Table striped bordered hover >
    
          <thead>
            <tr>
              <th>User</th>
              <th>Club</th>
              <th>Delete</th>
              <th>Profile</th>
            </tr>
          </thead>
          <tbody>
      {this.state.users.map((user, index) => {
        return(
            <React.Fragment>
            <tr>
              <td onClick={() => this.showUser(user.id, index)}>{user.name}</td>
              <td>{user['favorite_team']}</td>
              <td><Button type='submit' onClick={() => this.deleteUser(user.id, index)}>Delete</Button></td>
              <td><Button type='submit' onClick={() => this.showUser(user.id, index)}>User Profile</Button></td>
            </tr>
            </React.Fragment>
        )
      })}
      </tbody>
      </Table>
     
  </div>
    
  )
}
}
export default MyAccount;