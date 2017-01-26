import * as React from 'react';
import * as block from 'bem-cn';
import './style.styl';

interface IOwnProps {
    literals: string[];
}

class LiteralsLine extends React.Component<IOwnProps, {}> {

    private b = block('bottom-side');

    render () {
        const b = this.b;
        const { literals } = this.props;
        return (
            <div className={b()}>
                {literals.map((item) => {
                    return (
                        <div className={b('literal')}>
                            <div className={b('literal-value')}>{item}</div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default LiteralsLine;
