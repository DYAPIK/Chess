import { Figure } from './Figure';
import { ICell } from 'helpers/namespaces'

class LongDistanceFigures extends Figure {

    protected generateLeftSideSteps(x: number, y: number, gameData: ICell[][]) {
        let possibleSteps = [];
        while (x > 0) {
            x--;
            if (this.checkLimit([y,x]) && (this.checkEnemyFigure(gameData, x, y) || this.checkEmptyCell(gameData, x, y))) {
                possibleSteps.push([y, x]);
            } else {
                break
            }
        }
        return possibleSteps;
    }

    protected generateRightSideSteps(x: number, y: number, gameData: ICell[][]) {
        let possibleSteps = [];
        while (x < 7) {
            x++;
            if (this.checkLimit([y,x]) && (this.checkEnemyFigure(gameData, x, y) || this.checkEmptyCell(gameData, x, y))) {
                possibleSteps.push([y, x]);
            } else {
                break
            }
        }
        return possibleSteps;
    }

    protected generateTopSideSteps(x: number, y: number, gameData: ICell[][]) {
        let possibleSteps = [];
        while (y > 0) {
            y--;
            if (this.checkLimit([y,x]) && (this.checkEnemyFigure(gameData, x, y) || this.checkEmptyCell(gameData, x, y))) {
                possibleSteps.push([y, x]);
            } else {
                break
            }
        }
        return possibleSteps;
    }

    protected generateBottomSideSteps(x: number, y: number, gameData: ICell[][]) {
        let possibleSteps = [];
        while (y < 7) {
            y++;
            if (this.checkLimit([y,x]) && (this.checkEnemyFigure(gameData, x, y) || this.checkEmptyCell(gameData, x, y))) {
                possibleSteps.push([y, x]);
            } else {
                break
            }
        }
        return possibleSteps;
    }

    protected generateTopRightSteps(x: number, y: number, gameData: ICell[][]): number[][] {
        let possibleSteps = [];
        while (x < 7) {
            y--;
            x++;
            if (this.checkLimit([y,x]) && (this.checkEnemyFigure(gameData, x, y) || this.checkEmptyCell(gameData, x, y))) {
                possibleSteps.push([y, x]);
            } else {
                break
            }
        }
        return possibleSteps;
    }

    protected generateBottomRightSteps(x: number, y: number, gameData: ICell[][]): number[][] {
        let possibleSteps = [];
        while (x < 7) {
            y++;
            x++;
            if (this.checkLimit([y,x]) && (this.checkEnemyFigure(gameData, x, y) || this.checkEmptyCell(gameData, x, y))) {
                possibleSteps.push([y, x]);
            } else {
                break
            }
        }
        return possibleSteps;
    }

    protected generateBottomLeftSteps(x: number, y: number, gameData: ICell[][]): number[][] {
        let possibleSteps = [];
        while (x > 0) {
            y++;
            x--;
            if (this.checkLimit([y,x]) && (this.checkEnemyFigure(gameData, x, y) || this.checkEmptyCell(gameData, x, y))) {
                possibleSteps.push([y, x]);
            } else {
                break
            }
        }
        return possibleSteps;
    }

    protected generateTopLeftSteps(x: number, y: number, gameData: ICell[][]): number[][] {
        let possibleSteps = [];
        while (x > 0) {
            y--;
            x--;
            if (this.checkLimit([y,x]) && (this.checkEnemyFigure(gameData, x, y) || this.checkEmptyCell(gameData, x, y))) {
                possibleSteps.push([y, x]);
            } else {
                break
            }
        }
        return possibleSteps;
    }

}

export { LongDistanceFigures };
