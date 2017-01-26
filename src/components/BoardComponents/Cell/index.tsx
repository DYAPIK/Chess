import * as React from 'react';
import * as block from 'bem-cn';
import './styles.styl';

interface IOwnProps {
    row: number;
    column: number;
}

class Cell extends React.Component<IOwnProps, {}> {

    private b = block('cell');

    constructor (props: {}) {
        super(props);
        this.checkBlackCell = this.checkBlackCell.bind(this);
    }

    private checkBlackCell(row: number, column: number) {
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

    render () {
        const b = this.b;
        const { row, column } = this.props;
        return (
            <div className={b({black: this.checkBlackCell(row, column)})}></div>
        );
    }
}

export default Cell;
