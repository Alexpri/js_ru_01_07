import { ADD_COMMENT } from '../constants'


export function addComment(change) {

	console.log(change);

	return {
		type: ADD_COMMENT,
		payload: { change }
	}
}