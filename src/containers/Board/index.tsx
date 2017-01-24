import * as React from 'react';
import { connect, Dispatch  } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as block from 'bem-cn';
import Cell from 'components/Cell';
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
                {boardSize.map((line: number, lineIndex: number) => {
                    return (
                        <div className={b('line')}>
                            {boardSize.map((cell: number, columnIndex: number) => {
                                return <Cell row={lineIndex} column={columnIndex} />
                            })}
                        </div>
                    )
                })}
            </div>
        );
    }
}

export { Board };
export default connect(mapStateToProps, mapDispatchToProps)(Board);
