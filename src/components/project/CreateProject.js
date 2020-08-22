import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'
class CreateProject extends Component {
    constructor(props) {
        super(props)
        this.error = React.createRef()
        this.state = {
            title: null,
            content: null
        }
    }

    handlerInput = (e) => {
        if (e.target.value !== null) {
            this.setState({
                [e.target.id]: e.target.value
            })
        }
    }
    handlerSubmit = (e) => {
        e.preventDefault();
        if (this.state.title !== null && this.state.content !== null) {
            this.props.createP(this.state);
            this.error.current.innerHTML = ''
            e.target.title.value = ''
            e.target.content.value = ''
            this.props.history.push('/');
        }
        else {
            this.error.current.innerHTML = 'Please fill in all inputs'
        }
    }
    render() {
        const { auth } = this.props
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className='container'>
                <form onSubmit={this.handlerSubmit} className='white'>
                    <h5>Create new Project</h5>
                    <div className='input-field'>
                        <label htmlFor='title'>Project Title</label>
                        <input type='text' id='title' onChange={this.handlerInput} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='content'>Project Content</label>
                        <textarea id='content' onChange={this.handlerInput} className='materialize-textarea' />
                    </div>
                    <div ref={this.error} className='red-text'></div>
                    <div className='input-field'>
                        <button className='btn pink lighten-1 z-depth-0'>Create</button>
                    </div>
                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const auth = state.firebase.auth
    return {
        auth: auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createP: (project) => { dispatch(createProject(project)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);