import { ICell } from 'helpers/namespaces'
import { Figure } from './Figure'


class Queen extends Figure {

    getPossibleSteps(gameData: ICell[][]): number[][] {
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
        return this.filterSteps(allPossibleSteps, gameData);
    }
}

export {
    Queen
}