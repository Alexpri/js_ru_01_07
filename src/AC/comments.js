import { ADD_COMMENT } from '../constants'


export function addComment(change) {

	return {
		type: ADD_COMMENT,
		payload: { change }
	}
}