import { ICell } from './namespaces';

function createInitalChessData(): ICell[][] {
    let data = [];
    for (let i = 0; i < 8; i++) {
        let lineCells = [];
        for (let j = 0; j < 8; j++) {
            let cellObj = {
                x: j,
                y: i,
                id: '',
                active: false,
            };
            if (i === 1) {
                cellObj.id = '21';
            }
            if (i === 6) {
                cellObj.id = '11'
            }
            lineCells.push(cellObj);
        }
        // add id of figures on the first line
        if (i === 0) {
            lineCells[0].id = '25';
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
            lineCells[0].id = '15';
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

export {
    createInitalChessData,
    findActiveCell,
}