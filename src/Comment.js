import React, { Component } from 'react'

class Comments extends Component {
	state = {
        isOpen: false
    }

    render() {
        const comment = this.props.comment
        const { isOpen } = this.state
        const body = isOpen ? <span>{comment.text}</span> : null
        const textLink = isOpen ? "close" : "open"

        return (
            <div>
                <h3><a href="#" onClick = {this.toggleOpen}>{comment.user}</a></h3>
                {body}
            </div>
        )
    }

    toggleOpen = (ev) => {
    	ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}

export default Comments
