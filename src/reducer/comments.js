import { ADD_COMMENT, LOAD_ALL_COMMENTS, START, SUCCESS } from '../constants'
import { Record, List, Map } from 'immutable'
import { recordsFromArray } from './utils'

const Comment = Record({
    "id": null,
    "user": "",
    "text": ""
})

const defaultComments = recordsFromArray(Comment, [])

const defaultState = new Map({
    loading: false,
    loaded: false,
    errors: new List([]),
    commentsLoading: false,
    commentsLoaded: false,
    entities: defaultComments
})

export default (state = defaultState, action) => {
    const { type, payload, response, error, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(['entities', randomId], new Comment({
                id: randomId,
                ...payload
            }))

        case LOAD_ALL_COMMENTS + START:
            console.log('start')
            return state.setIn(['commentsLoading'], true)

        case LOAD_ALL_COMMENTS + SUCCESS:
            return state
                .setIn(['commentsLoading'], false)
                .setIn(['commentsLoaded'], true)
                .update('entities', entities => entities.merge(recordsFromArray(Comment, response.records)))
    }

    return state
}