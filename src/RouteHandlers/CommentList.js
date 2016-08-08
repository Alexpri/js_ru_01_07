import React, { Component, PropTypes } from 'react'
import CommentsContainer from '../containers/CommentList'

class CommentsHandler extends Component {
    static propTypes = {

    };

    render() {
        return <CommentsContainer id = {this.props.params.id} />
    }
}

export default CommentsHandler