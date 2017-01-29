import { ICell } from 'helpers/namespaces'
import { Figure } from './Figure'


class Queen extends Figure {

    getPossibleSteps(gameData: ICell[][]) {
        const { x, y } = this;
        let allPossibleSteps = [
            [y - 1, x],
            [y - 1, x + 1],
            [y, x + 1],
            [y + 1, x + 1],
            [y + 1, x],
            [y + 1, x - 1],
            [y, x - 1],
            [y - 1, x -1],
        ];
        let possibleSteps: number[][] = [];
        allPossibleSteps.forEach((step) => {
            if (this.checkLimit(step) && this.checkEmptyCell(gameData, step[1], step[0])) {
                possibleSteps.push(step)
            }
        });
        return possibleSteps;
    }
}

export {
    Queen
}