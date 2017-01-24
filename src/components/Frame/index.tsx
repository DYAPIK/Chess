import * as React from 'react';
import * as block from 'bem-cn';
import './styles.styl';

interface IOwnProps {

}

class Cell extends React.Component<IOwnProps, {}> {

    private b = block('frame');

    constructor (props: {}) {
        super(props);

    }



    render () {
        const b = this.b;
        const { children } = this.props;
        return (
            <div className={''}></div>
        );
    }
}

export default Cell;
