import React, { Component } from 'react';
// import { Component } from 'react';
import './Home.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrease} from '../actions';
// import {getAllUsers} from '../actions/usersActions';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form }from 'react-bootstrap';
import MyAccount from './MyAccount.js';



class Home extends Component {
        state = {
            users: [],
            formInputs: {
                name: '',
                favorite_team: '',
                pick_points: '',
                current_points: '',
                image: ''
            }
        }
        handleChange = (event) => {
            const updateInput = Object.assign( this.state.formInputs, { [event.target.id]: event.target.value })
            this.setState(updateInput)
            // console.log(event.target.value)
          }
        handleSubmit = (event) => {
            event.preventDefault();
            fetch('https://epl-app-api.herokuapp.com/users', {
                body: JSON.stringify(this.state.formInputs),
                method: 'POST',
                headers: {
                    'Accept' : 'application/json, text/plain, */*',
                    'Content-Type' : 'application/json'
                }
            })
            .then(createdUser => {
                return createdUser.json()
            })
            .then(jsonedUser => {
                this.setState({
                    formInputs: {
                        name: '',
                        favorite_team: '',
                        pick_points: '',
                        current_points: '',
                        image: ''
                    },
                    users: [...this.state.users, jsonedUser]
                })
            })
            .catch(error => console.log(error));
            
            this.props.history.push('/MyAccount');
          }
          
          
        render(){
            return(
                <div>
                    <div className='flex-container'>
                        <img id='main-image' src={"https://lh3.googleusercontent.com/lokEzakyo9jnVTT9tPVSuEYOvJKXTBo4Tt4ZI6yxAdz9u1qQhfUuPmWDa_K_n8RX8aHVN5zsOhctLnue4l37dwCdnh8W1oKt4F2PgC_OMuCsfE6XCPDVsL10V3fEYVgSLxLgM5zBca8OiMytU3Uc4CDUtM0AK6YNPvW3oIIbIwQsOlyMFiOCdIV2rADwzZYX8nQaGMtBi8n4drWoOLyYsyhNidsFG6bK71ICQAgksM5a64cuJyxx00u2dj6xPDy5um0FMJoEYeHdQ_kNh6UXUYYGMwCB_gEmwtr9R83QJKb7X-Sgm9_ZZklbVToTdbllJwHWgilcP6FurdR2JN2H8sxNZO5kc_C1LF6IhD6nphMWHAw6hCWf-buICIwYxNksqlVW1yJ7Ll7zwVHwtYWW6Age3higRE_yrkTCq_iSeDeKaAf_jcu1epbDLTXKUvoyu-2-MgIq8LbH8SGCugA3O-jGazuChtuIzaGCg_D3RmirNii0yb29RfwMOmj2SqMrj2nK93S8fRLLvfEB3m0461Rq3w3qV4QfYWAbEV-veHmdSnNLVPCHgX53XBU4850UwPpWnzasssZzW1NuKuQXVAiyW3AAehYH5_G8FjJ15WGpnywe_Q9uCm4k6bAwHcvE5pv-Ne0dKyTZQVWZqEWE_6C1Uj1KVW8qvdkvetyj3UHite4i9WlMxA=w626-h674-no"} alt={''}/>
                
                    <div className='form side-container'>
                    <img id='epl-logo' src={"https://seeklogo.net/wp-content/uploads/2012/12/premier-league-logo-vector-400x400.png"}  alt={'epl'}/>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor='name'>Username</Form.Label>
                            <Form.Control className='input-width' type="text" placeholder="Name" id='name' value={this.state.formInputs.name} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label className='input-width' htmlFor='favorite_team'>Favorite EPL Team</Form.Label>
                            <Form.Control  type="text" placeholder="Team" id='favorite_team' value={this.state.formInputs.favorite_team} onChange={this.handleChange}/>
                        </Form.Group>
                        <Button variant="primary" id='button' type="submit">
                            Submit
                        </Button>
                    </Form>
                    {this.state.formInputs.name} 
                    {this.state.formInputs.favorite_team}
                    </div>
                   </div>
                    {/* <h1>Counter{counter}</h1>
                    <Button variant='danger' onClick={() => dispatch(increment())}>+</Button>
                    <button onClick={() => dispatch(decrease())}>+</button>
                     */}
                 
                   
                </div>
            )
            
        }    
        // const counter = useSelector(state => state.counter);
        // const dispatch = useDispatch();
    }

export default Home;