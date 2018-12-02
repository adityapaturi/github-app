import React, {Component} from "react";
import PropTypes from "prop-types";
import "./count-widget.css";

class CountWidget extends Component {
    render() {
        return <div className="countWidgetContainer">
            <span className="widgetParam">{this.props.param}</span>
            <span className="widgetCount">{this.props.count}</span>
        </div>;
    }
}

CountWidget.propTypes = {
    param: PropTypes.string,
    count: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default CountWidget;
