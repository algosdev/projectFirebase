import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: null,
            password: null,
            firstName: null,
            lastName: null
        }
    }

    handlerInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handlerSubmit = (e) => {
        e.preventDefault();
        if (this.state.email !== null &&
            this.state.password !== null &&
            this.state.firstName !== null &&
            this.state.lastName !== null) {
            this.props.signUp(this.state)
        }
    }
    render() {
        const { auth, error } = this.props
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className='container'>
                <form onSubmit={this.handlerSubmit} className='white'>
                    <h5>Sign Up</h5>
                    <div className='input-field'>
                        <label htmlFor='firstName'>First Name</label>
                        <input type='text' id='firstName' onChange={this.handlerInput} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input type='text' id='lastName' onChange={this.handlerInput} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' onChange={this.handlerInput} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' onChange={this.handlerInput} />
                    </div>
                    <div className='red-text'>
                        {error ? error : null}
                    </div>
                    <div className='input-field'>
                        <button className='btn pink lighten-1 z-depth-0'>SIGNUP</button>
                    </div>
                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        error: state.auth.authError
    }
}
const dispatcher = (dispatch) => {
    return {
        signUp: (newUser) => { dispatch(signUp(newUser)) }
    }
}

export default connect(mapStateToProps, dispatcher)(SignUp)