import * as React from 'react';
import { connect, Dispatch  } from 'react-redux';
import * as Redux from 'redux'
import * as block from 'bem-cn';
import CellsField from 'components/BoardComponents/CellsField';
import Frame from 'components/BoardComponents/Frame';
import { ICell } from 'helpers/namespaces';
import { IColorTypes, IQueue } from 'types/app';
import actions from 'localRedux/actions';
import './style.styl';


interface IStateProps {
    boardData: ICell[][];
    literals: string[];
    boardSize: number[];
    typesFigures: IColorTypes;
    queueGame: IQueue;
}

interface IOwnProps {}
interface IDispatchProps {
    chooseCell: typeof actions.chooseCell;
}

type Props = IStateProps & IOwnProps & IDispatchProps;

function mapStateToProps (state: any): IStateProps {
    const { boardData, boardSize, literals, typesFigures, queueGame }  = state.chess;
    return {
        boardData,
        literals,
        boardSize,
        typesFigures,
        queueGame,
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
            queueGame,
        } = this.props;
        return (
            <div className={b()}>
                <Frame boardSize={boardSize} literals={literals}>
                    <CellsField
                        typesFigures={typesFigures}
                        boardData={boardData}
                        chooseCell={chooseCell}
                        queueGame={queueGame}
                    />
                </Frame>
            </div>
        );
    }
}

export { Board };
export default connect(mapStateToProps, mapDispatchToProps)(Board);
