import React, { PropTypes } from 'react'

function Comment(props) {
    if (!props.comment) return <h3>Something</h3>
    const { comment } = props
    console.log(comment);
    return (
        <div>
            <p>{comment.get('text')}</p>
            <b>by {comment.get('user')}</b>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string
    })
}

export default Comment