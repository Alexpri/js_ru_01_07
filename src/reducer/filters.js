import { CHANGE_FILTERS } from '../constants'


const defaultArticles = {
    selectedArticles: [],
    from: null,
    to: null
}

export default (filters = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case CHANGE_FILTERS:
            return Object.assign({}, filters, payload.change)
    }
    return filters
}