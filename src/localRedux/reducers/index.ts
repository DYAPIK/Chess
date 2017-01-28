import { Map, fromJS } from 'immutable';
import initialState from '../initial';
import { IReduxState, IAction } from '../../types/app';
import { findActiveCell } from 'helpers/logicHelpers'



function reducer(state: IReduxState = initialState, action: IAction) {
    const imState: Map<string, any> = fromJS(state);
    switch (action.type) {
    case ('CHESS:CHOOSE_CELL'):
        interface IData { x: number, y: number }
        const payload = action.payload as IData;
        const activeCell = findActiveCell(imState.get('boardData').toJS());
        if (activeCell) {
            return imState
                .setIn(['boardData', payload.y, payload.x, 'active'], true)
                .setIn(['boardData', activeCell.y, activeCell.x, 'active'], false)
                .toJS();
        }
        return imState
            .setIn(['boardData', payload.y, payload.x, 'active'], true)
            .toJS();
        default:
        return state;
    }

}

export default reducer;
