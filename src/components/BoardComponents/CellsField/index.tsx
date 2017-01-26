import * as React from 'react';
import * as block from 'bem-cn';
import LineCells from 'components/BoardComponents/LineCells';
import './style.styl';

interface IOwnProps {
    boardSize: number[];
}

class CellsField extends React.Component<IOwnProps, {}> {

    private b = block('cells-field');

    render () {
        const b = this.b;
        const { boardSize } = this.props;
        return (
            <div className={b()}>
                {boardSize.map((line: number, lineIndex: number) => {
                    return <LineCells key={lineIndex} lineIndex={lineIndex} boardSize={boardSize} />
                })}
            </div>
        );
    }
}

export default CellsField;
