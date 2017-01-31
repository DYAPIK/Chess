import { ICell } from 'types/app'
import { Figure } from './Figure'

class BlackPawn extends Figure {

    public getPossibleSteps(gameData: ICell[][]): number[][] {
        let possibleSteps = [];
        const { x, y } = this;
        const newY = y + 1;
        if (this.checkEmptyCell(gameData, x, newY)) {
            possibleSteps.push([newY, x])
         }
        if (y === 1) {
            const newY = y + 2;
            if (this.checkEmptyCell(gameData, x, newY)) {
                possibleSteps.push([newY, x])
            }
        }
        possibleSteps.push(...this.getAttackPosition(gameData));
        return possibleSteps;
    }

    private getAttackPosition(gameData: ICell[][]): number[][] {
        let possibleSteps = [];
        const { x, y } = this;
        if (this.checkLimit([y + 1, x + 1]) && this.checkEnemyFigure(gameData, x + 1, y + 1)) {
            possibleSteps.push([y + 1, x + 1]);
        }
        if (this.checkLimit([y + 1, x - 1]) && this.checkEnemyFigure(gameData, x - 1, y + 1)) {
            possibleSteps.push([y + 1, x - 1]);
        }
        return possibleSteps;
    }
}

export {
    BlackPawn
}