import React, { Component } from 'react';
import { regex } from './email-regex';
import { Link } from 'react-router-dom';


class Login extends Component {
    state = {
        email: '',
        password: '',
        isSubmitted: false,
        validEmail: '',
        validPassword: ''
    }

    handleClick = () => {
        if (this.state.validEmail && this.state.validPassword) {
            // console.log( this.state.validEmail, this.state.validPassword);
            this.setState({ isSubmitted: true })
        }
    }

    handleLoginChange = (event) => {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }

    handleLogout = () => {
        this.setState({ email: '', password: '', isSubmitted: false, validEmail: '', validPassword: '' })
    }

    checkLogin = () => {
        // celowo != żeby przy okazji złapać 0 i undefined
        if ( this.state.email != ''  && this.state.email != null && this.checkEmailRegex(this.state.email)) {
            this.setState({validEmail: true})
        } else {
            this.setState({validEmail: false})
        }
    }
    

    checkPassword = () => {
        if ( this.state.password != ''  && this.state.password != null ) {
            this.setState({validPassword: true})
        } else {
            this.setState({validPassword: false})
        }
    }

    checkEmailRegex = (mail) => {
        if (regex.test(String(mail).toLowerCase())) {
            return true
        }

    }

    render() {
        return (<>
                <section>
                    <div>
                        <label>E-mail: </label>
                        <input type="text" onChange={this.handleLoginChange} onBlur={this.checkLogin}/>
                        {this.state.validEmail === false && (<p className="red">Invalid email</p>)}
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="password" onChange={this.handlePasswordChange} onBlur={this.checkPassword} />
                        {this.state.validPassword === false && (<p className="red">Invalid password</p>)}

                    </div>
                    <Link exact to="/chat"><button onClick={this.handleClick}>Login</button></Link>
                </section>
        </>)
    }
}

export { Login }