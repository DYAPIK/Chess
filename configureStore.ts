import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers
} from 'redux';

import chessReducer from './src/localRedux/reducers';

function configureStore () {
    const reducer = combineReducers({
        chess: chessReducer,
    });

    return createStore(
        reducer,
        compose(
          applyMiddleware(),
          ('development' === process.env.NODE_ENV && window.devToolsExtension) ? window.devToolsExtension() : (arg: any) => arg
        ),
    );
}

export default configureStore;
