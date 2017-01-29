import { ICell } from 'helpers/namespaces'
import { Figure } from './Figure'

class Bishop extends Figure {

    public getPossibleSteps(gameData: ICell[][]): number[][] {
        const { x, y }         = this;
        const topRightSteps    = this.generateTopRightSteps(x, y, gameData);
        const bottomRightSteps = this.generateBottomRightSteps(x, y, gameData);
        const bottomLeftSteps  = this.generateBottomLeftSteps(x, y, gameData);
        const topLeftSteps     = this.generateTopLeftSteps(x, y, gameData);
        const allPossibleSteps = [
            ...topLeftSteps,
            ...topRightSteps,
            ...bottomLeftSteps,
            ...bottomRightSteps
        ];
        let possibleSteps: number[][] = [];
        allPossibleSteps.forEach((step) => {
            if (this.checkLimit(step) && this.checkEmptyCell(gameData, step[1], step[0])) {
                possibleSteps.push(step)
            }
        });
        return possibleSteps;
    }

    private generateTopRightSteps(x: number, y: number, gameData: ICell[][]): number[][]     {
        let possibleSteps = [];
        while (x < 7) {
            y--;
            x++;
            if (this.checkLimit([y, x]) && this.checkEmptyCell(gameData, x, y)) {
                possibleSteps.push([y, x]);
            } else {
                break
            }
        }
        return possibleSteps;
    }

    private generateBottomRightSteps(x: number, y: number, gameData: ICell[][]): number[][] {
        let possibleSteps = [];
        while (x < 7) {
            y++;
            x++;
            if (this.checkLimit([y, x]) && this.checkEmptyCell(gameData, x, y)) {
                possibleSteps.push([y, x]);
            } else {
                break
            }
        }
        return possibleSteps;
    }

    private generateBottomLeftSteps(x: number, y: number, gameData: ICell[][]): number[][] {
        let possibleSteps = [];
        while (x > 0) {
            y++;
            x--;
            if (this.checkLimit([y, x]) && this.checkEmptyCell(gameData, x, y)) {
                possibleSteps.push([y, x]);
            } else {
                break
            }
        }
        return possibleSteps;
    }

    private generateTopLeftSteps(x: number, y: number, gameData: ICell[][]): number[][] {
        let possibleSteps = [];
        while (x > 0) {
            y--;
            x--;
            if (this.checkLimit([y, x]) && this.checkEmptyCell(gameData, x, y)) {
                possibleSteps.push([y, x]);
            } else {
                break
            }
        }
        return possibleSteps;
    }

}

export {
    Bishop
}