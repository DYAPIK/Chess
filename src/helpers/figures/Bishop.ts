import { ICell } from 'types/app'
import { LongDistanceFigures } from './LongDistanceFigures'

class Bishop extends LongDistanceFigures {

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
        return this.filterSteps(allPossibleSteps, gameData)
    }
}

export {
    Bishop
}