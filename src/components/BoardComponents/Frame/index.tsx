import * as React from 'react';
import * as block from 'bem-cn';
import NumbersLine from 'components/BoardComponents/NumbersLine';
import LiteralsLine from 'components/BoardComponents/LiteralsLine';
import Side from 'components/BoardComponents/Side';

interface IOwnProps {
    boardSize: number[];
    literals: string[];
}

class Frame extends React.Component<IOwnProps, {}> {

    private b = block('frame');

    constructor (props: {}) {
        super(props);

    }

    render () {
        const b = this.b;
        const { children, boardSize, literals } = this.props;
        return (
            <div className={b()}>
                <NumbersLine boardSize={boardSize} />
                <Side side="top" />
                {children}
                <LiteralsLine literals={literals} />
                <Side side="right" />
            </div>
        );
    }
}

export default Frame;
