import * as types from '../constants/constants'

const initialState =
    {
        data: [],
        dataFiltered: [],
        dataReady: false,
        searchText: '',
        searchData: [],
        dataRepo: [],
        repoReady: false
    };

export default function gitReduce (state = initialState, action) {
    switch (action.type) {

        case types.GET_LIST:
            return {
                ...state,
                data: action.data,
                dataFiltered: action.data
            };

        case types.LIST_READY:
            return {
                ...state,
                dataReady: action.dataReady
            };

        case types.GET_REPO:
            return {
                ...state,
                dataRepo: action.dataRepo,
                repoReady: action.repoReady
            };

        case types.REPO_READY:
            return {
                ...state,
                repoReady: action.repoReady
            };

        case types.FILTER_LIST:
            return {
                ...state,
                data: action.data,
            };

            return {
                ...state,
                data: state.dataFiltered.filter(function (item) {
                    return item.name.match(text)
                })
            };
        default:
            return state;
    }
};