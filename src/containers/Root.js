import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import Counter from './Counter'
import Articles from './Articles'
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
                        <li><Link to="/articles">article list</Link></li>
                        <li><Link to="/counter">counter</Link></li>
                        <li><Link to="/filters">filters</Link></li>
                    </ul>
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </Provider>
        )
    }
}

export default RootContainer