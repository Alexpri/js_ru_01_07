import React, { Component, PropTypes } from 'react'
import Comment from './../components/Comment'
import CommentForm from './../components/CommentForm'
import toggleOpen from '../decorators/toggleOpen'
import { connect } from 'react-redux'
import { addComment, loadAllComments } from '../AC/comments'

class CommentList extends Component {

    componentDidMount() {
        const { loadAllComments, commentsLoading, commentsLoaded } = this.props
        if (!commentsLoading && !commentsLoaded) loadAllComments()
    }

    render() {
        const { article, comments, addComment, commentsLoading } = this.props
        if (commentsLoading) return <h3>Loading...</h3>
        if (!comments) return <h3>no comments yet</h3>
        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment}/></li>)
        return (
            <div>
                <ul>{commentItems}</ul>
                <CommentForm articleId = {article} addComment = {addComment}/>
            </div>
        )
    }
}

export default connect((state, { comments }) => {
    console.log(state.comments.get('entities'));
    return {
        commentsLoading: state.comments.get('commentsLoading'),
        commentsLoaded: state.comments.get('commentsLoaded'),
        comments: state.comments.get('entities')
    }
}, { addComment, loadAllComments })(CommentList)