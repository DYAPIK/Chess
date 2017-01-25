import * as React from 'react';
import * as block from 'bem-cn';
import './style.styl';

interface IOwnProps {
    boardSize: number[];
}

class NumbersLine extends React.Component<IOwnProps, {}> {

    private b = block('left-side');

    render () {
        const b = this.b;
        const { boardSize } = this.props;
        return (
            <div className={b()}>
                {boardSize.reverse().map((item) => {
                    return (
                        <div className={b('number')}>
                            <div className={b('number-value')}>{item + 1}</div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default NumbersLine;
