import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../AC/comments'

class CommentForm extends Component {
    static propTypes = {
        //article: PropTypes.object.isRequired
    }

    state = {
        id: null,
        user: '',
        text: '',
        articleId: null
    }

    render() {
        const labelStyle = {
            display: 'block',
        }

        const { articleId } = this.props

        return (
            <form id="form-add-comment" onSubmit={this.commentChange}>
                <h2>Add new comment</h2>
                <div>
                    <label style={labelStyle} htmlFor="comment-author">Author Name</label>
                    <input type="text" id="comment-author" value={this.state.user} name="comment-author" placeholder="Author name" onChange={this.changeAuthor} />
                </div>
                <div>
                    <label style={labelStyle} htmlFor="comment-body">Comment</label>
                    <textarea name="comment-body"  id="comment-body" value={this.state.text} placeholder="Comment" onChange={this.changeText}></textarea>
                </div>
                <button type='submit' onClick={this.changeId}>Add comment</button>
            </form>
        )
    }

    changeAuthor = ev => {
        this.setState({
            user: ev.target.value
        })
    }

    changeText = ev => {
        this.setState({
            text: ev.target.value
        })
    }

    changeId = () => {
        const uid = () => Math.random().toString(16).slice(2)
        this.setState({
            id: uid(),
            articleId: this.props.articleId
        })
    }

    commentChange = ev => {
        ev.preventDefault()
        this.props.addComment(this.state)
    }
}

export default connect((state, { comments, articleId }) => {
    console.log(articleId);
    return {
        comments: comments,
        articleId: articleId
    }
}, { addComment })(CommentForm)