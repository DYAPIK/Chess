import * as React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import * as block from 'bem-cn';

function mapStateToProps () {
    return {};
}

function mapDispatchToProps () {
    return {}
}

class Board extends React.Component<{}, {}> {

    private b = block('board');

    constructor (props: {}) {
        super(props);
    }


    render () {
        const b = this.b;
        return (
            <div>
                TEST CHESS
            </div>
        );
    }
}

export { Board };
export default connect(mapStateToProps, mapDispatchToProps)(Board);
