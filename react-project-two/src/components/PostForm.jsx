import React from 'react'
import { connect } from 'react-redux'
import { createPost, showAlert } from '../redux/actions'
import Alert from './Alert'

class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }

    changeInputHandler = event => {
        this.setState(prev => ({...prev, ...{
            [event.target.name]: event.target.value
        }}))
    }

    submitHandler = event => {
        event.preventDefault()
        const {title} = this.state
        if(!title.trim()){
            return this.props.showAlert('Название поста не может быть пустым')
        }
        const newPost = {
            title, id: Date.now().toString( )
        }
        this.props.createPost(newPost)
        this.setState({title: ''})
    }
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                {this.props.alert && <Alert text={this.props.alert} />}
                <label htmlFor='title' className='form-label'>Заголовок поста</label>
                <input 
                type='text'
                id='title'
                onChange={this.changeInputHandler}
                value={this.state.title} 
                className='form-control'
                name='title'
                />
                <button className='btn btn-success mt-3' type='submit'>Опубликовать</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createPost, showAlert
}

const mapStateToProps = (state) => {
    return {
        alert: state.app.alert
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)