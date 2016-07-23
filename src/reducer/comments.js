import {  }	from '../constants'
import { normalizedComments } from '../fixtures'
import { Record } from 'immutable'
import { recordFormArray } from './utils'

const Comment = Record({
	"id": null,
    "user": "",
    "text": ""
})

const defaultArticles = recordFormArray(Comment, normalizedComments)

export default (comments = defaultArticles, action) => {
	const { type, payload } = action

	return comments
}