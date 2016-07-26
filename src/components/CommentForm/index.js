import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import './style.css'

class CommentForm extends Component {
   static propTypes = {
        addComment: PropTypes.func.isRequired,
        articleId: PropTypes.string.isRequired
    }

    state = {
        user: '',
        text: ''
    }

    render() {
        const { text, user } = this.state

        return (
            <form id="form-add-comment" onSubmit={this.handleSubmit}>
                <h2>Add new comment</h2>
                <div>
                    <label htmlFor="comment-author">Author Name</label>
                    <input type="text" id="comment-author" value={user} name="comment-author" placeholder="Author name" onChange={this.handleChange('user')} />
                </div>
                <div>
                    <label htmlFor="comment-body">Comment</label>
                    <textarea name="comment-body"  id="comment-body" value={text} placeholder="Comment" onChange={this.handleChange('text')}></textarea>
                </div>
                <button type='submit'>Add comment</button>
            </form>
        )
    }

    handleChange = element => ev => {
        this.setState({
            [element]: ev.target.value
        })
    }

    handleSubmit = ev => {
        const { addComment, articleId } = this.props
        ev.preventDefault()
        addComment(this.state, articleId)

        this.setState({
            user: '',
            text: ''
        })
    }
}

export default CommentForm