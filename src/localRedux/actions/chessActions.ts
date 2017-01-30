import { IAction, IQueue, IActiveCell, IReduxState } from '../../types/app';
import { IFigure, ICell } from '../../helpers/namespaces';
import { findPossibleSteps, findActiveCell } from '../../helpers/logicHelpers';
import * as Redux from 'redux'
import { ThunkAction } from 'redux-thunk';
import {
    BlackPawn,
    WhitePawn,
    Bishop,
    Horse,
    Officer,
    Rook,
    Queen
} from 'helpers/figures'

interface IArgsChooseCellAction {
    boardData: ICell[][];
    x: number;
    y: number;
    queueGame: IQueue;
    id: string;
    figure: BlackPawn | Queen | Rook | Officer | Horse | Bishop | WhitePawn | IFigure | null;
}

interface IArgsMakeMoveAction {
    activeCell: IActiveCell;
    boardData: ICell[][];
    clickCellPosition: { x: number, y: number };
    attack: boolean;
}


function chooseCell(data: IArgsChooseCellAction): IAction {
    const { x, y, id, queueGame, figure, boardData } = data;
    if (queueGame.white && id[0] === '1' || queueGame.black && id[0] === '2') {
        const activeCell = findActiveCell(boardData);
        const actionName = activeCell ? 'CHESS:CHANGE_ACTIVE_CELL': 'CHESS:CHOOSE_CELL';
        return { type: actionName, payload: { x, y, figure, activeCell } };
    }
    return { type: 'CHESS:EMPTY_STEP' };
}

function makeMove(data: IArgsMakeMoveAction)  {
    return (dispatch: Redux.Dispatch<IReduxState>, getState: IReduxState): IAction => {
        const { activeCell, boardData, clickCellPosition, attack } = data;
        const figure = activeCell.figure;
        const possibleSteps = figure.getPossibleSteps(boardData);
        if (findPossibleSteps(possibleSteps, clickCellPosition)) {
            dispatch({ type: 'CHESS:MAKE_MOVE', payload: { clickCellPosition, figure, activeCell} });
            if (attack) {
                dispatch({ type: 'CHESS:ATTACK_FIGURE', payload: null });
            }
            return dispatch({ type: 'CHESS:CHANGE_QUEUE' })
        }
        return dispatch({ type: 'CHESS:EMPTY_STEP' });
    }
}

export {
    chooseCell,
    makeMove,
}