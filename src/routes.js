import React from 'react'
import { Router, hashHistory, browserHistory, Route } from 'react-router'
import Root from './containers/Root'
import ArticlePage from './containers/Articles'
import ArticleContainer from './RouteHandlers/Article'
import CounterPage from './containers/Counter'
import FiltersPage from './containers/Filters'
import CommentsPage from './containers/CommentList'
import CommentsContainer from './RouteHandlers/CommentList'

export default (
    <Router history = {browserHistory}>
        <Route path="/" component = {Root}>
            <Route path = "articles" component = {ArticlePage}>
                <Route path = ":id" component = {ArticleContainer} />
            </Route>
            <Route path = "counter" component = {CounterPage} />
            <Route path = "filters" component = {FiltersPage} />
            <Route path = "comments" component = {CommentsPage}>
            	<Route path = ":id" component = {CommentsContainer} />
            </Route>
        </Route>
    </Router>
) 