import { Map, fromJS } from 'immutable';
import initialState from '../initial';
import { IReduxState, IAction } from '../../types/app';
import { IFigure } from 'helpers/namespaces'
import { findActiveCell } from 'helpers/logicHelpers'


function reducer(state: IReduxState = initialState, action: IAction): IReduxState {
    const imState: Map<string, any> = fromJS(state);
    switch (action.type) {
    case ('CHESS:CHOOSE_CELL'): {
        interface IData { x: number, y: number; figure: IFigure }
        const payload = action.payload as IData;
        const activeCell = findActiveCell(imState.get('boardData').toJS());
        if (activeCell) {
            return imState
                .setIn(['boardData', payload.y, payload.x, 'active'], true)
                .setIn(['boardData', activeCell.y, activeCell.x, 'active'], false)
                .set('activeCell', {x: payload.x, y: payload.y, figure: payload.figure})
                .toJS();
        }
        return imState
            .setIn(['boardData', payload.y, payload.x, 'active'], true)
            .set('activeCell', {x: payload.x, y: payload.y, figure: payload.figure})
            .toJS();
    }
    case ('CHESS:MAKE_MOVE'): {
        interface IData {
            clickCellPosition: { x: number, y: number };
            figure: IFigure;
            activeCell: { x: number, y: number, figure: IFigure }
        }
        const {  clickCellPosition, figure, activeCell  }  = action.payload as IData;
        figure.x = clickCellPosition.x;
        figure.y = clickCellPosition.y;
        return imState
            .setIn(['boardData', clickCellPosition.y, clickCellPosition.x, 'id'], figure.id)
            .setIn(['boardData', clickCellPosition.y, clickCellPosition.x, 'figure'], figure)
            .setIn(['boardData', activeCell.y, activeCell.x, 'figure'], null)
            .setIn(['boardData', activeCell.y, activeCell.x, 'id'], '')
            .setIn(['boardData', activeCell.y, activeCell.x, 'active'], false)
            .set('activeCell', {})
            .toJS();
    }
    default:
        return state;
    }

}

export default reducer;
