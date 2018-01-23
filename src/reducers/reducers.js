import * as types from '../constants/constants'

const initialState =
    {
        data: [],
        dataFiltered: [],
        dataReady: false,
        pullsData: [],
        pullsReady: false
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
                dataReady: true
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

        case types.GET_PULLS:
            return {
                ...state,
                pullsData: action.pullsData,
                pullsReady: true
            }
        default:
            return state;
    }
};