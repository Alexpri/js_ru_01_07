import React, { Component } from 'react'
import Comment from './Comment'

class CommentsList extends Component {
	state = {
        isOpen: false
    }

    render() {
        const comments = this.props.comments
        const { isOpen } = this.state
        const textLink = isOpen ? "close comments" : "open comments"
        let listItemsComments

        if (comments) {
            listItemsComments = comments.map((comment) => <li key = {comment.id}><Comment comment = {comment}/></li>)
        }

        const listItemsWrapComments = isOpen ?  <ul> {listItemsComments} </ul> : null

        if (listItemsComments) {
	        return (
	            <div>
	                <a href="#" onClick = {this.toggleOpenComments}> {textLink} </a>
	                {listItemsWrapComments}                
	            </div>
	        )
        } else {
        	return null
        }
    }

    toggleOpenComments = (ev) => {
        ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}


export default CommentsList