import { ADD_COMMENT, LOAD_ALL_COMMENTS, START, SUCCESS  } from '../constants'
import { Record, Map, List } from 'immutable'
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
    entities: defaultComments
})

export default (state = defaultState, action) => {
    const { type, payload, response, randomId } = action

    console.log(response);

    switch (type) {
    	// case ADD_COMMENT:
     //        return comments.set(randomId, new Comment({
     //            id: randomId,
     //            ...payload
     //        }))

        case LOAD_ALL_COMMENTS + START:
            return state.set('loading', true)
        case LOAD_ALL_COMMENTS + SUCCESS:
            // const comments = response.map(comments => comments)
            return state
                        .set('loading', false)
                        .set('entities', recordsFromArray(Comment, response))

    }

    return state
}

