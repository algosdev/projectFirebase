import React from 'react';
import { NavLink } from 'react-router-dom';
import { signOut } from '../../store/actions/authActions';
import { connect } from 'react-redux'

const SignedInLinks = (props) => {
    // const { initials } = props;
    // const profileIcon = initials.toUpperCase()
    console.log(props.icon)
    return (
        <ul className='right'>
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><NavLink to='/' onClick={props.signOut}>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>{props.icon}</NavLink></li>
        </ul>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => { dispatch(signOut()) }
    }
}
const mapStateToProps = (state) => {
    const initials = state.firebase.profile.initials
    return {
        icon: initials
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)