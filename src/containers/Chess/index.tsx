import * as React from 'react';
import { connect } from 'react-redux';
import * as block from 'bem-cn';

class Chess extends React.Component<{}, {}> {

    private b = block('chess');

    constructor (props: {}) {
        super(props);
    }

    render () {
        const b = this.b;
        return (
          <div className={b()}>
              {this.props.children}
          </div>
        );
    }
}

export default Chess;
