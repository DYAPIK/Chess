import { ICell } from 'helpers/namespaces'
import { LongDistanceFigures } from './LongDistanceFigures'

class Rook extends LongDistanceFigures {

    public getPossibleSteps(gameData: ICell[][]): number[][] {
        const { x, y }    = this;
        const topSteps    = this.generateTopSideSteps(x, y, gameData);
        const bottomSteps = this.generateBottomSideSteps(x, y, gameData);
        const leftSteps   = this.generateLeftSideSteps(x, y, gameData);
        const rightSteps  = this.generateRightSideSteps(x, y, gameData);
        const allPossibleSteps = [
            ...topSteps,
            ...bottomSteps,
            ...leftSteps,
            ...rightSteps
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
}

export {
    Rook
}