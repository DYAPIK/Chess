import { ICell } from 'helpers/namespaces'
import { LongDistanceFigures } from './LongDistanceFigures'

class Officer extends LongDistanceFigures {

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
        return this.filterSteps(allPossibleSteps, gameData);
    }

    // private generateLeftSideSteps(x: number, y: number, gameData: ICell[][]) {
    //     let possibleSteps = [];
    //     while (x > 0) {
    //         x--;
    //         if (this.checkLimit([y,x]) && (this.checkEnemyFigure(gameData, x, y) || this.checkEmptyCell(gameData, x, y))) {
    //             possibleSteps.push([y, x]);
    //         } else {
    //             break
    //         }
    //     }
    //     return possibleSteps;
    // }
    //
    // private generateRightSideSteps(x: number, y: number, gameData: ICell[][]) {
    //     let possibleSteps = [];
    //     while (x < 7) {
    //         x++;
    //         if (this.checkLimit([y,x]) && (this.checkEnemyFigure(gameData, x, y) || this.checkEmptyCell(gameData, x, y))) {
    //             possibleSteps.push([y, x]);
    //         } else {
    //             break
    //         }
    //     }
    //     return possibleSteps;
    // }
    //
    // private generateTopSideSteps(x: number, y: number, gameData: ICell[][]) {
    //     let possibleSteps = [];
    //     while (y > 0) {
    //         y--;
    //         if (this.checkLimit([y,x]) && (this.checkEnemyFigure(gameData, x, y) || this.checkEmptyCell(gameData, x, y))) {
    //             possibleSteps.push([y, x]);
    //         } else {
    //             break
    //         }
    //     }
    //     return possibleSteps;
    // }
    //
    // private generateBottomSideSteps(x: number, y: number, gameData: ICell[][]) {
    //     let possibleSteps = [];
    //     while (y < 7) {
    //         y++;
    //         if (this.checkLimit([y,x]) && (this.checkEnemyFigure(gameData, x, y) || this.checkEmptyCell(gameData, x, y))) {
    //             possibleSteps.push([y, x]);
    //         } else {
    //             break
    //         }
    //     }
    //     return possibleSteps;
    // }
    //
    // private generateTopRightSteps(x: number, y: number, gameData: ICell[][]): number[][] {
    //     let possibleSteps = [];
    //     while (x < 7) {
    //         y--;
    //         x++;
    //         if (this.checkLimit([y,x]) && (this.checkEnemyFigure(gameData, x, y) || this.checkEmptyCell(gameData, x, y))) {
    //             possibleSteps.push([y, x]);
    //         } else {
    //             break
    //         }
    //     }
    //     return possibleSteps;
    // }
    //
    // private generateBottomRightSteps(x: number, y: number, gameData: ICell[][]): number[][] {
    //     let possibleSteps = [];
    //     while (x < 7) {
    //         y++;
    //         x++;
    //         if (this.checkLimit([y,x]) && (this.checkEnemyFigure(gameData, x, y) || this.checkEmptyCell(gameData, x, y))) {
    //             possibleSteps.push([y, x]);
    //         } else {
    //             break
    //         }
    //     }
    //     return possibleSteps;
    // }
    //
    // private generateBottomLeftSteps(x: number, y: number, gameData: ICell[][]): number[][] {
    //     let possibleSteps = [];
    //     while (x > 0) {
    //         y++;
    //         x--;
    //         if (this.checkLimit([y,x]) && (this.checkEnemyFigure(gameData, x, y) || this.checkEmptyCell(gameData, x, y))) {
    //             possibleSteps.push([y, x]);
    //         } else {
    //             break
    //         }
    //     }
    //     return possibleSteps;
    // }
    //
    // private generateTopLeftSteps(x: number, y: number, gameData: ICell[][]): number[][] {
    //     let possibleSteps = [];
    //     while (x > 0) {
    //         y--;
    //         x--;
    //         if (this.checkLimit([y,x]) && (this.checkEnemyFigure(gameData, x, y) || this.checkEmptyCell(gameData, x, y))) {
    //             possibleSteps.push([y, x]);
    //         } else {
    //             break
    //         }
    //     }
    //     return possibleSteps;
    // }
}

export {
    Officer
}