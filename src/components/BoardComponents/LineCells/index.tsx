import * as React from 'react';
import * as block from 'bem-cn';
import Cell from 'components/BoardComponents/Cell';
import { ICell } from 'helpers/namespaces';
import { IColorTypes, IQueue } from 'types/app';
import actions from 'localRedux/actions';
import './style.styl';

interface IOwnProps {
    lineCells: ICell[];
    typesFigures: IColorTypes;
    chooseCell: typeof actions.chooseCell;
    queueGame: IQueue;
}

class LineCell extends React.Component<IOwnProps, {}> {

    private b = block('line-cell');

    render () {
        const b = this.b;
        const { lineCells, typesFigures, chooseCell, queueGame } = this.props;
        return (
            <div className={b()}>
                {lineCells.map((cell: ICell, columnIndex: number) => {
                    return (
                        <Cell
                            chooseCell={chooseCell}
                            typesFigures={typesFigures}
                            key={columnIndex}
                            data={cell}
                            queueGame={queueGame}
                        />
                    )
                })}
            </div>
        );
    }
}

export default LineCell;
