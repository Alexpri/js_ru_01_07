export function filterArticles(articles, { from, to, selectedArticles }) {
    return articles.valueSeq()
        .filter((article) => selectedArticles.length ? selectedArticles.includes(article.id) : true)
        .filter(article => (!from || Date.parse(article.date) > from) && (!to || Date.parse(article.date) < to))
}
