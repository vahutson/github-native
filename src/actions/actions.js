import * as types from '../constants/constants'

export function getList (data) {
    return {
        type: types.GET_LIST,
        data: data,
        dataFiltered: data,
    }
}

export function listReady () {
    return {
        type: types.LIST_READY,
        dataReady: true
    }
}

export function filterList (data, dataFiltered) {
    return {
        type: types.FILTER_LIST,
        data: data,
        dataFiltered: dataFiltered
    }
}