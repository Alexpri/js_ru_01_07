import React, { Component, PropTypes } from 'react'
import ArticleList from '../components/ArticleList'
import { filterArticles } from './utils'
import { connect } from 'react-redux'
import { loadAllArticles, loadAllArticlesAlt } from '../AC/articles'

class Articles extends Component {
    static propTypes = {

    };

    componentDidMount() {
    	this.props.loadAllArticles()
    }

    render() {
        const { articles, loading } = this.props
        if (loading) return <h2>Loading...</h2>

        return <ArticleList articles = {articles} />
    }
}

export default connect(({ articles, filters }) => {
    return {
    	loading: articles.get('loading'),
        articles: filterArticles(articles.get('entities'), filters)
    }
}, { loadAllArticles: loadAllArticlesAlt })(Articles)