import * as React from 'react';
import { connect, Dispatch  } from 'react-redux';
import * as Redux from 'redux'
import * as block from 'bem-cn';
import CellsField from 'components/BoardComponents/CellsField';
import Frame from 'components/BoardComponents/Frame';
import { IColorTypes, IQueue, ICell } from 'types/app';
import actions from 'localRedux/actions';
import './style.styl';


interface IStateProps {
    boardData: ICell[][];
    literals: string[];
    boardSize: number[];
    typesFigures: IColorTypes;
    queueGame: IQueue;
    activeCell: ICell;
}

interface IDispatchProps {
    chooseCell: typeof actions.chooseCell;
    makeMove: typeof actions.makeMove;
}

type Props = IStateProps & IDispatchProps;

function mapStateToProps (state: any): IStateProps {
    const { boardData, boardSize, literals, typesFigures, queueGame, activeCell }  = state.chess;
    return {
        boardData,
        literals,
        boardSize,
        typesFigures,
        queueGame,
        activeCell,
    };
}

function mapDispatchToProps (dispatch: Redux.Dispatch<IDispatchProps>) {
    return Redux.bindActionCreators({
        ...actions,
    }, dispatch)
}

class Board extends React.Component<Props, {}> {

    private b = block('board');

    constructor (props: Props) {
        super(props);
    }


    render () {
        const b = this.b;
        const {
            boardData,
            literals,
            boardSize,
            typesFigures,
            chooseCell,
            makeMove,
            queueGame,
            activeCell,
        } = this.props;
        return (
            <div className={b()}>
                <Frame boardSize={boardSize} literals={literals}>
                    <CellsField
                        typesFigures={typesFigures}
                        boardData={boardData}
                        chooseCell={chooseCell}
                        makeMove={makeMove}
                        queueGame={queueGame}
                        activeCell={activeCell}
                    />
                </Frame>
            </div>
        );
    }
}

export { Board };
export default connect(mapStateToProps, mapDispatchToProps)(Board);
