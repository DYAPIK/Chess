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

    protected checkEnemyFigure (gameData: ICell[][], x: number, y: number): boolean {
        return gameData[y][x].id[0] !== this.id[0]
    }

    protected checkEmptyCell(gameData: ICell[][], x: number, y: number): boolean {
        return !gameData[y][x].id;
    }

    protected checkLimit(step: number[]): boolean {
        return step[1] >= 0 && step[1] <= 7 && step[0] >= 0 && step[0] <= 7
    }

    protected filterSteps(steps: number[][], gameData: ICell[][]): number[][] {
        return steps.filter((step) => {
            return this.checkLimit(step) && (this.checkEnemyFigure(gameData, step[1], step[0]) || this.checkEmptyCell(gameData, step[1], step[0]));
        })
    }
}

export { Figure }
