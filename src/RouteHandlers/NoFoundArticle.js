import React, { Component, PropTypes } from 'react'

class NoFoundArticle extends Component {
    static propTypes = {

    };

    render() {
        const { articleId } = this.props.location.query
        return (
        	<div>
        		<h3>Article with id: {articleId} not found</h3>
        	</div>
        )
    }
}

export default NoFoundArticle