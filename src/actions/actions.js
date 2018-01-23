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

export function getRepo (data) {
    return {
        type: types.GET_REPO,
        dataRepo: data,
        repoReady: true
    }
}

export function repoToggleReady (bool) {
    return {
        type: types.REPO_READY,
        repoReady: bool
    }
}

export function filterList (data, dataFiltered) {
    return {
        type: types.FILTER_LIST,
        data: data,
        dataFiltered: dataFiltered
    }
}