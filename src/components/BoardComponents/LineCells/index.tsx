import * as React from 'react';
import * as block from 'bem-cn';
import Cell from 'components/BoardComponents/Cell';
import './style.styl';

interface IOwnProps {
    boardSize: number[];
    lineIndex: number;
}

class LineCell extends React.Component<IOwnProps, {}> {

    private b = block('line-cell');

    render () {
        const b = this.b;
        const { boardSize, lineIndex} = this.props;
        return (
            <div className={b()}>
                {boardSize.map((cell: number, columnIndex: number) => {
                    return <Cell key={columnIndex} row={lineIndex} column={columnIndex} />
                })}
            </div>
        );
    }
}

export default LineCell;
