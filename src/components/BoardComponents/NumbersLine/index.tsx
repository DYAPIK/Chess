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
                {boardSize.map((item, index) => {
                    return (
                        <div key={index} className={b('number')}>
                            <div className={b('number-value')}>{boardSize.length - index}</div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default NumbersLine;
