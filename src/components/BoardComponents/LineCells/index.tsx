import * as React from 'react';
import * as block from 'bem-cn';
import Cell from 'components/BoardComponents/Cell';
import { IColorTypes, IQueue, ICell } from 'types/app';
import actions from 'localRedux/actions';
import './style.styl';

interface IOwnProps {
    boardData: ICell[][];
    lineCells: ICell[];
    typesFigures: IColorTypes;
    chooseCell: typeof actions.chooseCell;
    makeMove: typeof actions.makeMove;
    queueGame: IQueue;
    activeCell: ICell;
}

class LineCell extends React.Component<IOwnProps, {}> {

    private b = block('line-cell');

    render () {
        const b = this.b;
        const { lineCells, typesFigures, chooseCell, queueGame, activeCell, makeMove, boardData } = this.props;
        return (
            <div className={b()}>
                {lineCells.map((cell: ICell, columnIndex: number) => {
                    return (
                        <Cell
                            chooseCell={chooseCell}
                            makeMove={makeMove}
                            typesFigures={typesFigures}
                            key={columnIndex}
                            data={cell}
                            queueGame={queueGame}
                            activeCell={activeCell}
                            boardData={boardData}
                        />
                    )
                })}
            </div>
        );
    }
}

export default LineCell;
