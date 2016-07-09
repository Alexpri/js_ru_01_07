import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'

class Article extends Component {

    static propTypes = {
        article: PropTypes.object.isRequired
    }

    componentWillReceiveProps(nextProps) {
        //console.log('---Article', this.props.isOpen, nextProps.isOpen)
    }

    render() {
        const { isOpen, openArticle, toggleOpenArticle, article: { title, text, comments } } = this.props
        console.log(isOpen);
        const body = isOpen ? <section>{ text } {<CommentList comments = {comments} />}</section> : null

            return (
                <div>
                    <h1 onClick = {openArticle}>{ title }</h1>
                    {body}
                </div>
            )
    }
}

export default Article