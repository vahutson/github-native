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
                dataFiltered: action.data,
                dataReady: action.dataReady
            };

        case types.GET_DETAILS:
            return {
                ...state,
                dataRepo: action.dataRepo,
                repoReady: action.repoReady
            };

        case types.FILTER_LIST:
            return {
                ...state,
                data: state.dataFiltered,
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