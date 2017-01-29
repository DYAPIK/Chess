import { IAction, IQueue, IActiveCell } from '../../types/app';
import { IFigure, ICell } from '../../helpers/namespaces';
import { findPossibleSteps } from '../../helpers/logicHelpers';
import * as Redux from 'redux'
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
    x: number;
    y: number;
    queueGame: IQueue;
    id: string;
    figure: BlackPawn | Queen | Rook | Officer | Horse | Bishop | WhitePawn | IFigure | null;
}

interface IArgsMakeMoveAction {
    activeCell: IActiveCell;
    boardData: ICell[][];
    clickCellPosition: { x: number, y: number }
}


function chooseCell(data: IArgsChooseCellAction): IAction {
    // return (dispatch: Redux.Dispatch<IReduxState>, getState: IReduxState) => {
    const { x, y, id, queueGame, figure } = data;
    if (queueGame.white && id[0] === '1') {
        return { type: 'CHESS:CHOOSE_CELL', payload: { x, y, figure } };
    }
    if (queueGame.black && id[1] === '2') {
        return { type: 'CHESS:CHOOSE_CELL', payload: { x, y, figure } };
    }
    return { type: 'CHESS:EMPTY_STEP' };
    // }
}

function makeMove(data: IArgsMakeMoveAction): IAction {
    const { activeCell, boardData, clickCellPosition } = data;
    const figure = activeCell.figure;
    const possibleSteps = figure.getPossibleSteps(boardData);
    if (findPossibleSteps(possibleSteps, clickCellPosition)) {
        return { type: 'CHESS:MAKE_MOVE', payload: { clickCellPosition, figure, activeCell} }
    }
    return { type: 'CHESS:EMPTY_STEP' };
}

export {
    chooseCell,
    makeMove,
}