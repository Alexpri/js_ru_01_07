import React, { Component, PropTypes } from 'react'
import Comment from './../components/Comment'
import CommentForm from './../components/CommentForm'
import toggleOpen from '../decorators/toggleOpen'
import { connect } from 'react-redux'
import { addComment, loadAllComments } from '../AC/comments'

class CommentList extends Component {

    componentDidMount() {
        this.props.loadAllComments(this.props.article.id)
    }

    render() {
        const { commentObjects, isOpen, toggleOpen } = this.props

        if (!commentObjects || !commentObjects.length) return <h3>no comments yet</h3>

        const linkText = isOpen ? 'close comments' : 'show comments'
        return (
            <div>
                <a href="#" onClick = {toggleOpen} ref="toggler">{linkText}</a>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { isOpen, article, commentObjects, addComment, loading } = this.props
        if (!isOpen) return null
        console.log('commentObjects', commentObjects);
        //loadAllComments(this.props.article.id)
        if (loading) return <h2>Loading...</h2>
        const commentItems = commentObjects.map(comment => <li key = {comment.id}><Comment comment = {comment}/></li>)
        return (
            <div>
                <ul>{commentItems}</ul>
                <CommentForm articleId = {article.id} addComment = {addComment}/>
            </div>
        )
    }
}

export default connect((state, { article }) => {
    return {
        loading: state.comments.get('loading'),
        commentObjects: article.comments.map(id => state.comments.get('entities'))
    }
}, { addComment, loadAllComments })(toggleOpen(CommentList))