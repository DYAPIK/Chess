import { Map, fromJS } from 'immutable';
import initialState from '../initial';
import { IReduxState, IAction, ICell } from 'types/app';


function reducer(state: IReduxState = initialState, action: IAction): IReduxState {
    const imState: Map<string, any> = fromJS(state);
    switch (action.type) {
    case ('CHESS:CHOOSE_CELL'): {
        interface IData { x: number, y: number; id: string, activeCell: { x: number; y:number; } }
        const payload = action.payload as IData;
        return imState
            .setIn(['boardData', payload.y, payload.x, 'active'], true)
            .set('activeCell', {x: payload.x, y: payload.y, id: payload.id})
            .toJS();
    }
    case ('CHESS:CHANGE_ACTIVE_CELL'): {
        interface IData { x: number, y: number; id: string, activeCell: { x: number; y:number; } }
        const { x, y, activeCell, id } = action.payload as IData;
        return imState
            .setIn(['boardData', y, x, 'active'], true)
            .setIn(['boardData', activeCell.y, activeCell.x, 'active'], false)
            .set('activeCell', { x, y, id })
            .toJS();
    }
    case ('CHESS:MAKE_MOVE'): {
        interface IData {
            clickCellPosition: ICell;
            activeCell: ICell
        }
        const {  clickCellPosition, activeCell  }  = action.payload as IData;
        return imState
            .setIn(['boardData', clickCellPosition.y, clickCellPosition.x, 'id'], activeCell.id)
            .setIn(['boardData', activeCell.y, activeCell.x, 'id'], '')
            .setIn(['boardData', activeCell.y, activeCell.x, 'active'], false)
            .set('activeCell', null)
            .toJS();
    }
    case ('CHESS:CHANGE_QUEUE'): {
        const queueGame = imState.get('queueGame').toJS();
        return imState
            .setIn(['queueGame', 'white'], !queueGame.white)
            .setIn(['queueGame', 'black'], !queueGame.black)
            .toJS()
    }
    default:
        return state;
    }
}

export default reducer;
