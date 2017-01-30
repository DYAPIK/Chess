import {
    BlackPawn,
    WhitePawn,
    Bishop,
    Horse,
    Officer,
    Rook,
    Queen
} from './figures'

interface ICell {
    x: number;
    y: number;
    id: string | '';
    active: boolean;
    figure: BlackPawn | Queen | Rook | Officer | Horse | Bishop | WhitePawn | null;
}

interface IFigure {
    id: string;
    x: number;
    y: number;
    getPossibleSteps(gameData: ICell[][]): number[][];
}

export {
    ICell,
    IFigure,
}