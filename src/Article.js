import React, { Component } from 'react'
import Comment from './Comment'

class Article extends Component {
    state = {
        isOpen: false
    }

    render() {
        const article = this.props.article
        const { isOpen } = this.state
        const body = isOpen ? <section>{ article.text }</section> : null
        let listItemsComments;
        //Так комменты будут показываться всегда, а надо их сворачивать/разворачивать
        if (article.comments) {
            listItemsComments = article.comments.map((comment) => <li key = {comment.id}><Comment comment = {comment.text}/></li>)
        }

        return (
            <div>
                <h2 onClick = {this.toggleOpen}>{ article.title }</h2>
                {body}
                <ul>
                    {listItemsComments}
                </ul>
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
