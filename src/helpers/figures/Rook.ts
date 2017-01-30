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
}

export {
    Rook
}