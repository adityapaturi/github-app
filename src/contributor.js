import React, {Component} from "react";
import PropTypes from "prop-types";
import "./contributor.css";

class Contributor extends Component {

    render() {
        const {collabData, rank} = this.props;
        return <div className="collaborator">
            <a href={collabData.html_url}>
                <img src={collabData.avatar_url} alt={collabData.login} width={50} height={50}/>
            </a>
            <div className="collabDetail">
                <a href={collabData.html_url}>
                    <div className="collabId">{collabData.login}</div>
                </a>
                <div className="collabContrib">{collabData.contributions} commits</div>
            </div>
            <div className="collabRank">#{rank + 1}</div>
        </div>;
    }
}

Contributor.propTypes = {
    collabData: PropTypes.object,
    rank: PropTypes.number
};

export default Contributor;
