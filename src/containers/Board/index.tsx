import * as React from 'react';
import { connect, Dispatch  } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as block from 'bem-cn';
import CellsField from 'components/CellsField';
import NumbersLine from 'components/NumbersLine';
import LiteralsLine from 'components/LiteralsLine';
import './style.styl';

interface IStateProps {
    boardSize: number[];
    literals: string[];
}

interface IOwnProps {}
interface IDispatchProps {}

type Props = IStateProps & IOwnProps & IDispatchProps;

function mapStateToProps (state: any): IStateProps {
    const boardSize  = state.chess.boardSize;
    const literals  = state.chess.literals;
    return {
        boardSize,
        literals,
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
        const { boardSize, literals } = this.props;
        return (
            <div className={b()}>
                <NumbersLine boardSize={boardSize} />
                <div className="top-side"></div>
                <CellsField boardSize={boardSize} />
                <LiteralsLine literals={literals} />
                <div className="right-side"></div>
            </div>
        );
    }
}

export { Board };
export default connect(mapStateToProps, mapDispatchToProps)(Board);
