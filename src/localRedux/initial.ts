import { IReduxState } from '../types/app';
import { createInitalChessData } from 'helpers/logicHelpers';

const initialState: IReduxState = {
    boardSize: [0, 1, 2, 3, 4, 5, 6, 7],
    literals: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
    boardData: createInitalChessData(),
    typesFigures: {
        white: {
            pawn: '11',
            horse: '12',
            bishop: '13',
            rook: '14',
            officer: '15',
            queen: '16',
        },
        black: {
            pawn: '21',
            horse: '22',
            bishop: '23',
            rook: '24',
            officer: '25',
            queen: '26',
        },
    },
    queueGame: {
        white: true,
        black: false,
    },
    activeCell: null,
};

export default initialState;
