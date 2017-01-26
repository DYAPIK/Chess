import * as React from 'react';
import * as block from 'bem-cn';
import './style.styl';

interface IOwnProps {
    side: string;
}

class Side extends React.Component<IOwnProps, {}> {

    private b = block('side');

    render () {
        const b = this.b;
        const { side } = this.props;
        return (
            <div className={b(side)}></div>
        );
    }
}

export default Side;
