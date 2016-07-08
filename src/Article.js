import React, { Component } from 'react'
import CommentsList from './CommentsList'

class Article extends Component {
    state = {
        isOpen: false
    }

    render() {
        const article = this.props.article
        const { isOpen } = this.state
        const CommentsListBody = <CommentsList comments = {article.comments}/>
        const body = isOpen ? <section>{ article.text }{CommentsListBody}</section> : null

        return (
            <div>
                <h2 onClick = {this.toggleOpen}>{ article.title }</h2>
                {body}          
            </div>
        )
    }

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}




export default Article
