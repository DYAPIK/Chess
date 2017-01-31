interface IReduxState {
    boardSize: number[];
    literals: string[];
    boardData: ICell[][];
    typesFigures: IColorTypes;
    queueGame: IQueue;
    activeCell: IActiveCell | null;
}

interface IActiveCell {
    x: number;
    y: number;
    id: string;
}

interface ITypesFigures {
    pawn: string,
    horse: string,
    bishop: string,
    rook: string,
    officer: string,
    queen: string,
}

interface IColorTypes {
    white: ITypesFigures;
    black: ITypesFigures;
}

interface IQueue {
    white: boolean;
    black: boolean;
}

interface ICell {
    x: number;
    y: number;
    id: string | '';
    active?: boolean;
}

interface IAction {
    payload?: { [key: string]: any } | number | string | null;
    type: string;
}

export {
    IReduxState,
    IAction,
    ITypesFigures,
    IColorTypes,
    IQueue,
    IActiveCell,
    ICell,
}