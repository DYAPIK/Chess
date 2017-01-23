import Immutable from 'immutable';
import { actionTypes as types } from 'redux/actionTypes';

import initActions from './initActions';
import { getAmountAliveNeighbors } from '../lifeRules';


function ifCellMustDie(cell, amountAliveNeighbors) {
    return (cell.get('active') && (amountAliveNeighbors > 3 || amountAliveNeighbors < 2));
}

function ifCellMustBorn(cell, amountAliveNeighbors) {
    return (!cell.get('active') && (amountAliveNeighbors === 3));
}

/**
 * Action creator which render all cells every iteration of life,
 * count the amount neighbors of cells for define whether
 * living cell in the next iteration or die, also it allows
 * run recursive execution for render every iteration.
 */

function oneCycleOfLife () {
    return (dispatch, getState) => {
        const state = getState();
        const recursive = state.getIn(['lifeData', 'recursive']);
        const maxColumns = state.getIn(['lifeData', 'sizeAreaValues', 'columns']);
        const maxRows = state.getIn(['lifeData', 'sizeAreaValues', 'rows']);
        let oldGenerationCells = state.getIn(['lifeData', 'cells']);
        let newGenerationCells = oldGenerationCells;
        oldGenerationCells.forEach((rowCells, rowIndex) => {
            rowCells.forEach((cell, cellIndex) => {
                const amountAliveNeighbors = getAmountAliveNeighbors(cellIndex, rowIndex, +maxColumns, +maxRows, oldGenerationCells);
                if (ifCellMustDie(cell, amountAliveNeighbors)) {
                    newGenerationCells = newGenerationCells.setIn([rowIndex.toString(), cellIndex.toString(), 'active'], false)
                }
                if (ifCellMustBorn(cell, amountAliveNeighbors)) {
                    newGenerationCells = newGenerationCells.setIn([rowIndex.toString(), cellIndex.toString(), 'active'], true)
                }
            })
        });
        dispatch({type: types.TRIGGER_ONE_CYCLE_LIFE, payload: Immutable.fromJS(newGenerationCells)})
        if (recursive) {
            setTimeout(
                ()=> {
                    dispatch(oneCycleOfLife())
                }, 250)
        }
    }
}

function startGame () {
    return (dispatch, getState) => {
        dispatch({type: types.START_GAME, payload: true});
        return dispatch(oneCycleOfLife());
    };
}

function stopGame () {
    return {type: types.STOP_GAME, payload: false};
}

function resetGame () {
    return dispatch => {
        dispatch({type: types.STOP_GAME, payload: false});
        return dispatch(initActions.generationCellData());
    };
}

export default {
    oneCycleOfLife,
    startGame,
    stopGame,
    resetGame,
}