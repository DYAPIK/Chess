import { ICell } from './namespaces';
import  {
    Bishop,
    BlackPawn,
    Horse,
    Officer,
    Queen,
    Rook,
    WhitePawn
} from './figures'

function createInitalChessData(): ICell[][] {
    let data = [];
    for (let i = 0; i < 8; i++) {
        let lineCells = [];
        for (let j = 0; j < 8; j++) {
            let cellObj: ICell = {
                x: j,
                y: i,
                id: '',
                active: false,
                figure: null,
            };
            if (i === 1) {
                cellObj.id = '21';
                cellObj.figure = new BlackPawn(j, i, '21');
            }
            if (i === 6) {
                cellObj.id = '11';
                cellObj.figure = new WhitePawn(j, i, '11');
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

            lineCells[0].figure = new Rook(0, i, '24');
            lineCells[1].figure = new Horse(1, i, '22');
            lineCells[2].figure = new Bishop(2, i, '23');
            lineCells[3].figure = new Officer(3, i, '25');
            lineCells[4].figure = new Queen(4, i, '26');
            lineCells[5].figure = new Bishop(5, i, '23');
            lineCells[6].figure = new Horse(6, i, '22');
            lineCells[7].figure = new Rook(7, i, '24');
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

            lineCells[0].figure = new Rook(0, i, '14');
            lineCells[1].figure = new Horse(1, i, '12');
            lineCells[2].figure = new Bishop(2, i, '13');
            lineCells[3].figure = new Officer(3, i, '15');
            lineCells[4].figure = new Queen(4, i, '16');
            lineCells[5].figure = new Bishop(5, i, '13');
            lineCells[6].figure = new Horse(6, i, '12');
            lineCells[7].figure = new Rook(7, i, '14');
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

function findPossibleSteps(possibleSteps: number[][], searchStep: {x: number, y: number}): boolean {
    let finded = false;
    possibleSteps.forEach((item: number[]) => {
        if (item[0] === searchStep.y && item[1] === searchStep.x) {
            finded = true
        }
    });
    return finded;
}

export {
    createInitalChessData,
    findActiveCell,
    findPossibleSteps,
}