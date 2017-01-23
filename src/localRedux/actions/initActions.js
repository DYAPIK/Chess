import Immutable from 'immutable';
import {actionTypes as types} from 'redux/actionTypes';

function changeColumnSizeArea (value) {
    return dispatch => {
        dispatch({type: types.CHANGE_SIZE_COLUMNS_CELLS_AREA, payload: value});
        return dispatch(generationCellData());
    }
}

function changeRowSizeArea (value) {
    return dispatch => {
        dispatch({type: types.CHANGE_SIZE_ROWS_CELLS_AREA, payload: value});
        return dispatch(generationCellData());
    }
}
/** Generate field of cells **/

function generationCellData () {
    return (dispatch, getState) => {
        const sizeArea = getState().getIn(['lifeData', 'sizeAreaValues']).toObject();
        let generationData = [];
        for (let indexRow = 0; indexRow < parseInt(sizeArea.rows, 10); indexRow++) {
            generationData.push([]);
            for (let indexColumn = 0; indexColumn < parseInt(sizeArea.columns, 10); indexColumn++) {
                generationData[indexRow].push({
                    column: indexColumn,
                    row: indexRow,
                    active: false
                })
            }
        }
        return dispatch({type: types.CHANGE_AREA_CELLS, payload: Immutable.fromJS(generationData)})
    }
}

/** Change alive state when user click on the cell **/

function changeActiveCell (xPosition, yPosition) {
    return (dispatch, getState) => {
        const cells = getState().getIn(['lifeData', 'cells']);
        let changedCells;
        cells.forEach((rowCells, indexRow) => {
            rowCells.forEach((cell, indexCell) => {
                if (cell.get('column') === xPosition && cell.get('row') === yPosition) {
                    changedCells = cells.setIn(
                        [indexRow.toString(), indexCell.toString(), 'active'],
                        !cell.get('active')
                    );
                }
            });
        });
        return dispatch({type: types.CHANGE_ACTIVE_STATE_CELL, payload: Immutable.fromJS(changedCells)})
    }
}

export default {
    changeColumnSizeArea,
    changeRowSizeArea,
    generationCellData,
    changeActiveCell
}