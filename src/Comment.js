import React, { Component } from 'react'

class Comments extends Component {
	state = {
        isOpen: false
    }

    render() {
        const comment = this.props.comment
        const { isOpen } = this.state
        const body = isOpen ? <span>{ comment }</span> : null
        const textLink = isOpen ? "close" : "open"

        return (
            <div>
                <h3><a href="#" onClick = {this.toggleOpen}>{textLink}</a></h3>
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