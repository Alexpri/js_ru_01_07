import React from 'react'

export default (Component) => class DecoratedComponent extends React.Component {

    state = {
        isOpen: false,
        openArticleId: null
    }

    componentWillUpdate(nextProps, nextState) {
        //console.log('---4', this.state.isOpen, nextState.isOpen)
    }

    openArticle = id => ev => {
        if (ev) ev.preventDefault()

        //console.log('openArticle', this.state.isOpen);
        if (this.state.openArticleId == id) {
            this.toggleOpenArticle();
        } else {
            this.setState({
                openArticleId: id
            })
        }
    }

    updateToggleOpenAricle = (ev) => {
        this.toggleOpenArticle();

    }

    toggleOpenArticle = (ev) => {
        this.setState({
            openArticleId: null,
            isOpen: !this.state.isOpen
        })

        // console.log('toggle', this.state.isOpen);
    }

    render() {
        return <Component {...this.props} isOpen = {this.state.isOpen} toggleOpenArticle = {this.toggleOpenArticle} openArticleId = {this.state.openArticleId} openArticle = {this.openArticle} />
    }
}
