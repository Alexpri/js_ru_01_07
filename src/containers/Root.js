import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import { Link } from 'react-router'

class RootContainer extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Provider store = {store}>
                <div>
                    <ul>
                        <li><Link to="/articles"  activeClassName = "menu-link-active">article list</Link></li>
                        <li><Link to="/articles/new/"  activeClassName = "menu-link-active">new article</Link></li>
                        <li><Link to="/counter"  activeClassName = "menu-link-active">counter</Link></li>
                        <li><Link to="/filters"  activeClassName = "menu-link-active">filters</Link></li>
                        <li><Link to="/comments"  activeClassName = "menu-link-active">comments</Link></li>
                    </ul>
                    {this.props.children}
                </div>
            </Provider>
        )
    }
}

export default RootContainer
