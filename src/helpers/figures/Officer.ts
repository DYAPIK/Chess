import { ICell } from 'helpers/namespaces'
import { Figure } from './Figure'

class Officer extends Figure {

    getPossibleSteps(gameData: ICell[][]): number[][] {
        const { x, y } = this;
        const topRightSteps    = this.generateTopRightSteps(x, y, gameData);
        const bottomRightSteps = this.generateBottomRightSteps(x, y, gameData);
        const bottomLeftSteps  = this.generateBottomLeftSteps(x, y, gameData);
        const topLeftSteps     = this.generateTopLeftSteps(x, y, gameData);
        const topSteps         = this.generateTopSideSteps(x, y, gameData);
        const bottomSteps      = this.generateBottomSideSteps(x, y, gameData);
        const leftSteps        = this.generateLeftSideSteps(x, y, gameData);
        const rightSteps       = this.generateRightSideSteps(x, y, gameData);
        const allPossibleSteps = [
            ...topLeftSteps,
            ...topRightSteps,
            ...bottomLeftSteps,
            ...bottomRightSteps,
            ...topSteps,
            ...bottomSteps,
            ...leftSteps,
            ...rightSteps,
        ];
        let possibleSteps: number[][] = [];
        allPossibleSteps.forEach((step) => {
            if (this.checkLimit(step) && this.checkEmptyCell(gameData, step[1], step[0])) {
                possibleSteps.push(step)
            }
        });
        return possibleSteps;
    }

    private generateLeftSideSteps(x: number, y: number, gameData: ICell[][]) {
        let possibleSteps = [];
        while (x > 0) {
            x--;
            if (this.checkLimit([y, x]) && this.checkEmptyCell(gameData, x, y)) {
                possibleSteps.push([y, x]);
            } else {
                break
            }
        }
        return possibleSteps;
    }

    private generateRightSideSteps(x: number, y: number, gameData: ICell[][]) {
        let possibleSteps = [];
        while (x < 7) {
            x++;
            if (this.checkLimit([y, x]) && this.checkEmptyCell(gameData, x, y)) {
                possibleSteps.push([y, x]);
            } else {
                break
            }
        }
        return possibleSteps;
    }

    private generateTopSideSteps(x: number, y: number, gameData: ICell[][]) {
        let possibleSteps = [];
        while (y > 0) {
            y--;
            if (this.checkLimit([y, x]) && this.checkEmptyCell(gameData, x, y)) {
                possibleSteps.push([y, x]);
            } else {
                break
            }
        }
        return possibleSteps;
    }

    private generateBottomSideSteps(x: number, y: number, gameData: ICell[][]) {
        let possibleSteps = [];
        while (y < 7) {
            y++;
            if (this.checkLimit([y, x]) && this.checkEmptyCell(gameData, x, y)) {
                possibleSteps.push([y, x]);
            } else {
                break
            }
        }
        return possibleSteps;
    }

    private generateTopRightSteps(x: number, y: number, gameData: ICell[][]): number[][] {
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
    Officer
}