import { createSelector } from 'reselect';

const getData = function (state) {
    if (state.data) {
        return state.data
    } else if (!Array.isArray(state.data)) {
        return state.data = [];}
};

export const getDataState = createSelector(
    [ getData ],
    (data) => data)
;