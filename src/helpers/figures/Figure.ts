import { ICell } from 'helpers/namespaces'

class Figure {

    id: string;
    x: number;
    y:number;

    constructor(x: number, y:number, id: string) {
        this.id = id;
        this.x = x;
        this.y = y;
    }

    protected checkEmptyCell(gameData: ICell[][], x: number, y: number): boolean {
        return !gameData[y][x].id
    }

    protected checkLimit(step: number[]): boolean {
        return step[1] >= 0 && step[1] <= 7 && step[0] >= 0 && step[0] <= 7
    }
}

export { Figure }
