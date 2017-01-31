import { IColorTypes, IActiveCell, ICell } from 'types/app';
import  {
    Bishop,
    BlackPawn,
    Horse,
    Officer,
    Queen,
    Rook,
    WhitePawn
} from './figures'

function createInitialChessData(): ICell[][] {
    let data = [];
    for (let i = 0; i < 8; i++) {
        let lineCells = [];
        for (let j = 0; j < 8; j++) {
            let cellObj: ICell = {
                x: j,
                y: i,
                id: '',
                active: false,
            };
            if (i === 1) {
                cellObj.id = '21';
            }
            if (i === 6) {
                cellObj.id = '11';
            }
            lineCells.push(cellObj);
        }
        // add id of figures on the first line
        if (i === 0) {
            lineCells[0].id = '24';
            lineCells[1].id = '22';
            lineCells[2].id = '23';
            lineCells[3].id = '25';
            lineCells[4].id = '26';
            lineCells[5].id = '23';
            lineCells[6].id = '22';
            lineCells[7].id = '24';
        }
        // add id of figures on the last line
        if (i === 7) {
            lineCells[0].id = '14';
            lineCells[1].id = '12';
            lineCells[2].id = '13';
            lineCells[3].id = '15';
            lineCells[4].id = '16';
            lineCells[5].id = '13';
            lineCells[6].id = '12';
            lineCells[7].id = '14';
        }
        data.push(lineCells);
    }
    return data;
}

function findActiveCell(data: ICell[][]): { x: number, y:number } | null {
    let x,y;
    data.forEach((line: ICell[], indexLine: number) => {
        line.forEach((cell: ICell, indexCell: number) => {
            if (cell.active) {
                x = indexCell;
                y = indexLine;
            }
        })
    });
    if (x !== undefined && y !== undefined) {
        return { x, y }
    }
    return null
}

function findPossibleSteps(possibleSteps: number[][], searchStep: ICell): boolean {
    let finded = false;
    possibleSteps.forEach((item: number[]) => {
        if (item[0] === searchStep.y && item[1] === searchStep.x) {
            finded = true
        }
    });
    return finded;
}

type Figure = Bishop | BlackPawn | Horse | Officer | Queen | Rook | WhitePawn;

function getFigureInstance (typesFigures: IColorTypes, cell: IActiveCell): Figure | null {
    const { id, x, y } = cell;
    switch (id) {

        case (typesFigures.white.pawn):
            return new WhitePawn(x, y, typesFigures.white.pawn);

        case (typesFigures.black.pawn):
            return new BlackPawn(x, y, typesFigures.white.pawn);

        case (typesFigures.white.horse || typesFigures.black.horse):
            return new Horse(x, y, typesFigures.white.horse);

        case (typesFigures.white.bishop || typesFigures.black.bishop):
            return new Bishop(x, y, typesFigures.white.bishop);

        case (typesFigures.white.rook || typesFigures.black.rook):
            return new Rook(x, y, typesFigures.white.rook);

        case (typesFigures.white.officer || typesFigures.black.officer):
            return new Officer(x, y, typesFigures.white.officer);

        case (typesFigures.white.queen || typesFigures.black.queen):
            return new Queen(x, y, typesFigures.white.queen);

        default:
            return null;
    }
}

export {
    createInitialChessData,
    findActiveCell,
    findPossibleSteps,
    getFigureInstance,
}