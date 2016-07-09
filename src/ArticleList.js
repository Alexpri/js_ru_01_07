import React, { Component }  from 'react'
import Article from './Article'
import toggleOpenArticle from './decorators/toggleOpenArticle'

class ArticleList extends Component {


    componentWillMount() {
        //console.log('---', this.props)
    }
    componentDidMount() {
        //console.log('---', 'mounted', this.refs.toggler)
    }

    componentWillReceiveProps(nextProps) {
        //console.log('---ArticleList Props', this.props.isOpen, nextProps.isOpen)
    }

    componentWillUnmount() {
       // console.log('---', 'unmounting')
    }

    render() {
        const { articles, isOpen, toggleOpenArticle, openArticleId, openArticle  } = this.props
        //console.log(this.props);

        const listItems = articles.map((article) => <li key={article.id}>
            <Article
                article = {article}
                isOpen = {article.id == openArticleId}
                openArticle = {openArticle(article.id)}
                toggleOpenArticle = {toggleOpenArticle}
            />
        </li>)
        return (
            <div>
                <h1>Article list</h1>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default toggleOpenArticle(ArticleList)