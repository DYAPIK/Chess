import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import { Chess, Board }  from './src/containers';
import withProps from './src/helpers/withProps';
import defaults from './defaults';

function createRoutes () {
    return (
        <Route path="/" component={Chess}>
            <IndexRoute component={withProps(Board, defaults)}/>
        </Route>
    );
}

export default createRoutes;
