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
    }
}

export function filterList (data, dataFiltered) {
    return {
        type: types.FILTER_LIST,
        data: data,
        dataFiltered: dataFiltered
    }
}

export function getPulls (data) {
    return {
        type: types.GET_PULLS,
        pullsData: data,
    }
}

export function refreshPulls () {
    return {
        type: types.REFRESH_PULLS,
    }
}