import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, LOAD_ARTICLE_COMMENTS, START, SUCCESS } from '../constants'
import { Record, OrderedMap, Map, List } from 'immutable'
import { recordsFromArray } from './utils'

const Article = Record({
    "id": "",
    "date": "",
    "title": "",
    "text": ""
})

const defaultArticles = recordsFromArray(Article, [])

const defaultState = new Map({
    loading: false,
    loaded: false,
    errors: new List([]),
    entities: defaultArticles
})

export default (state = defaultState, action) => {
    const { type, payload, response, randomId } = action

    switch (type) {
/*
        case DELETE_ARTICLE:
            return articles.delete(payload.id)
*/

        case ADD_COMMENT:
            return state.updateIn(['entities' ,payload.articleId, 'comments'], comments => comments.concat(randomId))

        case LOAD_ALL_ARTICLES + START:
            return state.set('loading', true)

        case LOAD_ALL_ARTICLES + SUCCESS:
        console.log(response);
            return state
                .set('loading', false)
                .set('loaded', true)
                .set('entities', recordsFromArray(Article, response))
            //return state.update('entities', entities => entities.merge(recordsFromArray(Article, response)))
    }
    //articles.set()
    //articles.update()
    //articles.updateIn([id, 'comments'], comments => ...)
    return state
}