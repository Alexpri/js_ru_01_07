import React, { Component } from 'react'
import Comment from './Comment'

class Article extends Component {
    state = {
        isOpen: false
    }

    render() {
        const article = this.props.article
        const {
            isOpen,
            isOpenComments
        } = this.state
        const body = isOpen ? <section>{ article.text }</section> : null
        const textLink = isOpenComments ? "close comments" : "open comments"
        let listItemsComments;
        //лучше сделать отдельно компонент CommentList и инкапсулировать в нем логику сворачивания/разворачивания/отображения списка и т.д.
        if (article.comments) {
            listItemsComments = article.comments.map((comment) => <li key = {comment.id}><Comment comment = {comment.text}/></li>)
        }

        const listItemsWrapComments = isOpenComments ?  <ul> {listItemsComments} </ul> : null

        return (
            <div>
                <h2 onClick = {this.toggleOpen}>{ article.title }</h2>
                {body}
                <a href="#" onClick = {this.toggleOpenComments}> {textLink} </a>
                {listItemsWrapComments}                
            </div>
        )
    }

    toggleOpenComments = (ev) => {
        ev.preventDefault();
        this.setState({
            isOpenComments: !this.state.isOpenComments
        })
    }

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}




export default Article
