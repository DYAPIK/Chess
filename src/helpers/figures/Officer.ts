import { ICell } from 'types/app'
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
}

export {
    Officer
}