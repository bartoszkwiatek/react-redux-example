import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Profile extends Component {
    // state = {
    //     email: '',
    //     password: '',
    //     isSubmitted: false,
    //     validEmail: '',
    //     validPassword: ''
    // }

    // handleLogout = () => {
    //     this.setState({})
    // }
    



    render() {
        return (<>
                <section>
                    <div>
                        <label>E-mail: </label>
                        <span type="text">email</span>
                    </div>
                    <div>
                        <label>Password: </label>
                        <span type="password">pass</span>
                    </div>
                        <NavLink exact to="/"><button>Logout</button></NavLink>
                </section>
        </>)
    }
}

export { Profile }