import React, { Component } from 'react'
import { connect } from 'react-redux'
import signIn from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: null,
            password: null
        }
    }

    handlerInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handlerSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }
    render() {
        const { auth } = this.props
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className='container'>
                <form onSubmit={this.handlerSubmit} className='white'>
                    <h5>Sign In</h5>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' onChange={this.handlerInput} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' onChange={this.handlerInput} />
                    </div>
                    <div className='input-field'>
                        <button className='btn pink lighten-1 z-depth-0'>LOGIN</button>
                    </div>
                </form>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (details) => dispatch(signIn(details))
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)