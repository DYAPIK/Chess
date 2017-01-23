import React, {Component, PropTypes} from 'react';
import block from 'bem-cn';

import './styles.styl';

class Cell extends Component {
    static propTypes = {
        className: PropTypes.func,
        onClick: PropTypes.func,
        xPosition: PropTypes.number,
        yPosition: PropTypes.number,
        active: PropTypes.bool,
    };

    static defaultProps = {
        onClick: () => {},
    };

    constructor (props) {
        super(props);
        this.b = block('cell');
        this.onClick = this.onClick.bind(this);
        this.getStateCell = this.getStateCell.bind(this);
    }

    onClick() {
        const handler = this.props.onClick;
        const {xPosition, yPosition} = this.props;
        if (handler) {
            handler(xPosition, yPosition)
        }
    }

    getStateCell() {
        const {active, className} = this.props;
        if (active) {
            return `${className} ${className}_active`;
        } else {
            return className
        }
    }

    render () {
        const b = this.b;
        const className = this.getStateCell();
        return (
            <div onClick={this.onClick} className={className}></div>
        );
    }
}

export default Cell;
