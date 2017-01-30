import { ICell } from 'helpers/namespaces'
import { Figure } from './Figure'

class Horse extends Figure {

    public getPossibleSteps(gameData: ICell[][]): number[][] {
        const { x, y } = this;
        const allPossibleSteps = [
            [y - 2, x - 1],
            [y - 2, x + 1],
            [y - 1, x + 2],
            [y + 1, x + 2],
            [y + 2, x + 1],
            [y + 2, x - 1],
            [y + 1, x - 2],
            [y - 1, x - 2],
        ];
        return this.filterSteps(allPossibleSteps, gameData);
    }
}

export {
    Horse
}