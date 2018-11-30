import React, {Component} from "react";
import "./count-widget.css";

class CountWidget extends Component {
    render() {
        return <div className="countWidgetContainer">
            <span className="widgetParam">{this.props.param}</span>
            <span className="widgetCount">{this.props.count}</span>
        </div>;
    }
}

export default CountWidget;
