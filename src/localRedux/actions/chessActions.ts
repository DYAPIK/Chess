import { Map, fromJS } from 'immutable';
import { IAction, IReduxState, IQueue } from '../../types/app';
import * as Redux from 'redux'

function chooseCell(x: number, y: number, queueGame: IQueue, id: string): IAction {
    // return (dispatch: Redux.Dispatch<IReduxState>, getState: IReduxState) => {
    if (queueGame.white && id[0] === '1') {
        return { type: 'CHESS:CHOOSE_CELL', payload: { x, y } };
    }
    if (queueGame.black && id[1] === '2') {
        return { type: 'CHESS:CHOOSE_CELL', payload: { x, y } };
    }
    return { type: 'CHESS:EMPTY_STEP' };
    // }
}

export {
    chooseCell,
}