import * as React from 'react';
import * as block from 'bem-cn';
import LineCells from 'components/BoardComponents/LineCells';
import { IColorTypes, IQueue, IActiveCell, ICell } from 'types/app';
import actions from 'localRedux/actions';
import './style.styl';

interface IOwnProps {
    boardData: ICell[][];
    typesFigures: IColorTypes;
    chooseCell: typeof actions.chooseCell;
    makeMove: typeof actions.makeMove;
    queueGame: IQueue;
    activeCell: IActiveCell;
}

class CellsField extends React.Component<IOwnProps, {}> {

    private b = block('cells-field');

    render () {
        const b = this.b;
        const { boardData, typesFigures, chooseCell, queueGame, activeCell, makeMove } = this.props;
        return (
            <div className={b()}>
                {boardData.map((lineCells: ICell[], lineIndex: number) => {
                    return (
                        <LineCells
                            typesFigures={typesFigures}
                            key={lineIndex}
                            lineCells={lineCells}
                            chooseCell={chooseCell}
                            queueGame={queueGame}
                            activeCell={activeCell}
                            makeMove={makeMove}
                            boardData={boardData}
                        />
                    )
                })}
            </div>
        );
    }
}

export default CellsField;
