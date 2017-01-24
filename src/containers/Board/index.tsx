import * as React from 'react';
import { connect, Dispatch  } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as block from 'bem-cn';
import CellsField from 'components/CellsField';
import './style.styl';

interface IStateProps {
    boardSize: number[]
}

interface IOwnProps {}
interface IDispatchProps {}

type Props = IStateProps & IOwnProps & IDispatchProps;

function mapStateToProps (state: any): IStateProps {
    const boardSize  = state.chess.boardSize;
    return {
        boardSize
    };
}

function mapDispatchToProps () {
    return {}
}

class Board extends React.Component<Props, {}> {

    private b = block('board');

    constructor (props: Props) {
        super(props);
    }


    render () {
        const b = this.b;
        const { boardSize } = this.props;
        return (
            <div className={b()}>
                <CellsField boardSize={boardSize} />
            </div>
        );
    }
}

export { Board };
export default connect(mapStateToProps, mapDispatchToProps)(Board);
