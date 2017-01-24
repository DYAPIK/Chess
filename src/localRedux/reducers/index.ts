import { Map, fromJS } from 'immutable';
import initialState from '../initial';
import { IReduxState, IAction } from '../../types/app';

function reducer(state: IReduxState = initialState, action: IAction) {
    const imState: Map<string, any> = fromJS(state);
    switch (action.type) {
    // case ('DYNAMIC_FIELDS:LOAD_FIELDS_COMPLETED'):
    //     return imState
    //         .setIn(['communications', 'fetching', 'isRequesting'], false)
    //         .setIn(['communications', 'fetching', 'error'], '')
    //         .setIn(['data', 'fields'], action.payload)
    //         .toJS();
    default:
        return state;

    }

}

export default reducer;
