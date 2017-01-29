import * as React from 'react';
import * as block from 'bem-cn';
import './styles.styl';
import { IColorTypes, IQueue, IActiveCell } from 'types/app'
import { ICell } from 'helpers/namespaces'
import actions from 'localRedux/actions';
import {makeMove} from "../../../localRedux/actions/chessActions";


interface IOwnProps {
    boardData: ICell[][];
    data: ICell
    typesFigures: IColorTypes;
    chooseCell: typeof actions.chooseCell;
    makeMove: typeof actions.makeMove;
    queueGame: IQueue;
    activeCell: IActiveCell;
}

class Cell extends React.Component<IOwnProps, {}> {

    private b = block('cell');

    constructor (props: {}) {
        super(props);
        this.checkBlackCell = this.checkBlackCell.bind(this);
        this.getClassNameFigure = this.getClassNameFigure.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    private checkBlackCell(row: number, column: number): boolean {
        let isBlack = false;
        if (row % 2 === 0) {
            if (column % 2 !== 0) {
                isBlack = true
            }
        } else {
            if (column % 2 === 0) {
                isBlack = true
            }
        }
        return isBlack
    }

    private getClassNameFigure(): string {
        const { typesFigures } = this.props;
        const { id } = this.props.data;
        switch (id) {
        case (typesFigures.black.bishop):
            return 'black-bishop';
        case (typesFigures.black.pawn):
            return 'black-pawn';
        case (typesFigures.black.officer):
            return 'black-officer';
        case (typesFigures.black.rook):
            return 'black-rook';
        case (typesFigures.black.queen):
            return 'black-queen';
        case (typesFigures.black.horse):
            return 'black-horse';

        case (typesFigures.white.bishop):
            return 'white-bishop';
        case (typesFigures.white.pawn):
            return 'white-pawn';
        case (typesFigures.white.officer):
            return 'white-officer';
        case (typesFigures.white.rook):
            return 'white-rook';
        case (typesFigures.white.queen):
            return 'white-queen';
        case (typesFigures.white.horse):
            return 'white-horse';

        default:
            return '';
        }
    }

    private onClick(): void {
        const { data: {x, y, id, figure}, chooseCell, queueGame, activeCell, makeMove, boardData } = this.props;
        if (id) {
            const args = { x, y, id, figure, queueGame };
            chooseCell(args);
        } else {
            if (activeCell) {
                const args = { activeCell, boardData, clickCellPosition: { x, y } };
                makeMove(args);
            }
        }
    }

    render () {
        const b = this.b;
        const { x, y, active } = this.props.data;
        return (
            <div onClick={this.onClick}
                 className={b({black: this.checkBlackCell(y, x), active: active})
                .mix(['figure', `figure_${this.getClassNameFigure()}`])}
            >
            </div>
        );
    }
}

export default Cell;
