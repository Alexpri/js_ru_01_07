import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'
import { Record } from 'immutable'
import { recordsFromArray } from './utils'

const Comment = Record({
    "id": null,
    "user": "",
    "text": ""
})

const defaultComments = recordsFromArray(Comment, normalizedComments)

export default (comments = defaultComments, action) => {
    const { type, payload } = action
    console.log('reducer', payload, comments);

    switch (type) {
    	case ADD_COMMENT:
            return comments.set(payload.change.id, new Comment(payload.change))

    }

    return comments
}

