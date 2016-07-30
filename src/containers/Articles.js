import React, { Component, PropTypes } from 'react'
import ArticleList from '../components/ArticleList'
import { filterArticles } from './utils'
import { connect } from 'react-redux'
import { loadAllArticles } from '../AC/articles'

class Articles extends Component {
    static propTypes = {

    };

    componentDidMount() {
    	this.props.loadAllArticles()
    }

    render() {
        const { articles } = this.props
        return <ArticleList articles = {articles} />
    }
}

export default connect(({ articles, filters, comments }) => {
    return {
        articles: filterArticles(articles, filters)
    }
}, { loadAllArticles })(Articles)