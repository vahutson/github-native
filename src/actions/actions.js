import * as types from '../constants/constants'

export function getList (data) {
    return {
        type: types.GET_LIST,
        data: data,
        dataFiltered: data,
        dataReady: true
    }
}

export function getDetails (dataRepo) {
    return {
        type: types.GET_DETAILS,
        dataRepo: dataRepo,
        repoReady: true
    }
}

export function filterList (data, dataFiltered) {
    return {
        type: types.FILTER_LIST,
        data,
        dataFiltered
    }
}