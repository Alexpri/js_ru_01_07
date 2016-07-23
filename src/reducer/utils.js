import { OrderedMap } from 'immutable'

export function recordFormArray(RecordType, array) {
	return array.reduce((acc, el) => {
		return acc.set(el.id, new RecordType(el))
	}, new OrderedMap({}))
}


export function filtersArticle(articles, {from, to, selectedArticles}) {
	return articles.valueSeq()
			.filter((article) => selectedArticles.length ? selectedArticles.includes(article.id) : true)
			.filter((article) => ((!from || Date.parse(article.date)) > from) && (!to || Date.parse(article.date) < to))
}