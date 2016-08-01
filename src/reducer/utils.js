import { OrderedMap } from 'immutable'

export function recordsFromArray(RecordType, array) {
    return array.reduce((acc, el) => {
    	console.log(RecordType);
        return acc.set(el.id, new RecordType(el))
    }, new OrderedMap({}))
}