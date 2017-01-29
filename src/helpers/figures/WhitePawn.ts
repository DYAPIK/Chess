import { ICell } from 'helpers/namespaces'
import { Figure } from './Figure'

class WhitePawn extends Figure {

    public getPossibleSteps(gameData: ICell[][]): number[][] {
        let possibleSteps = [];
        const { x, y } = this;
        const newY = y - 1;
        if (this.checkEmptyCell(gameData, x, newY)) {
            possibleSteps.push([newY, x])
        }
        if (y === 6) {
            const newY = y - 2;
            if (this.checkEmptyCell(gameData, x, newY)) {
                possibleSteps.push([newY, x])
            }
        }
        return possibleSteps;
    }
}

export {
    WhitePawn
}