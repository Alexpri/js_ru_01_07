import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE } from '../constants'
import { ADD_COMMENT } from '../constants'
import { Record } from 'immutable'
import { recordsFromArray } from './utils'

const Article = Record({
    "id": "",
    "date": "",
    "title": "",
    "text": "",
    "comments": []
})

const defaultArticles = recordsFromArray(Article, normalizedArticles)

export default (articles = defaultArticles, action) => {
    const { type, payload } = action

    console.log(articles)

    switch (type) {
        case DELETE_ARTICLE:
            return articles.delete(payload.id)
        case ADD_COMMENT:
            //return articles.updateIn([articles.id, 'comments'], comments =>  console.log(articles))
            return articles.updateIn([articles.id, 'comments'], articles => payload.change.id)
            // return articles.updateIn([payload.change.id, 'comments'], articles => articles.id)
    }
    //articles.set()
    //articles.update()
    //articles.updateIn([id, 'comments'], comments => ...)
    return articles
}