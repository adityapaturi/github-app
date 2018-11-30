import React, {Component} from "react";
import CountWidget from "./count-widget";
import Collaborator from "./collaborator";
import "./main-view.css";

class MainView extends Component {
    constructor() {
        super();
        this.state = {
            colloborators: []
        };
    }

    componentDidMount() {

    }

    render() {
        return <div className="mainView">
            <div className="mainProjectTitle">{this.props.projectData.name}</div>
            <div className="countWidgets">
                <CountWidget param={"Fork"} count={this.props.projectData.forks}/>
                <CountWidget param={"Stars"} count={this.props.projectData.stargazers_count}/>
                <CountWidget param={"Issues"} count={this.props.projectData.open_issues}/>
            </div>
            <div className="collabContainer">
                <div className="collabTitle">Collaborators</div>
                <ul>
                    {
                        this.state.colloborators.map((collaborator) => <li key={collaborator.id}><Collaborator/></li>)
                    }
                </ul>

            </div>
        </div>;
    }
}
export default MainView;


const sampleData = {
    "id": 165883,
    "node_id": "MDEwOlJlcG9zaXRvcnkxNjU4ODM=",
    "name": "codemod",
    "full_name": "facebook/codemod",
    "private": false,
    "owner": {
        "login": "facebook",
        "id": 69631,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
        "avatar_url": "https://avatars3.githubusercontent.com/u/69631?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/facebook",
        "html_url": "https://github.com/facebook",
        "followers_url": "https://api.github.com/users/facebook/followers",
        "following_url": "https://api.github.com/users/facebook/following{/other_user}",
        "gists_url": "https://api.github.com/users/facebook/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/facebook/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/facebook/subscriptions",
        "organizations_url": "https://api.github.com/users/facebook/orgs",
        "repos_url": "https://api.github.com/users/facebook/repos",
        "events_url": "https://api.github.com/users/facebook/events{/privacy}",
        "received_events_url": "https://api.github.com/users/facebook/received_events",
        "type": "Organization",
        "site_admin": false
    },
    "html_url": "https://github.com/facebook/codemod",
    "description": "Codemod is a tool/library to assist you with large-scale codebase refactors that can be partially automated but still require human oversight and occasional intervention. Codemod was developed at Facebook and released as open source.",
    "fork": false,
    "url": "https://api.github.com/repos/facebook/codemod",
    "forks_url": "https://api.github.com/repos/facebook/codemod/forks",
    "keys_url": "https://api.github.com/repos/facebook/codemod/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/facebook/codemod/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/facebook/codemod/teams",
    "hooks_url": "https://api.github.com/repos/facebook/codemod/hooks",
    "issue_events_url": "https://api.github.com/repos/facebook/codemod/issues/events{/number}",
    "events_url": "https://api.github.com/repos/facebook/codemod/events",
    "assignees_url": "https://api.github.com/repos/facebook/codemod/assignees{/user}",
    "branches_url": "https://api.github.com/repos/facebook/codemod/branches{/branch}",
    "tags_url": "https://api.github.com/repos/facebook/codemod/tags",
    "blobs_url": "https://api.github.com/repos/facebook/codemod/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/facebook/codemod/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/facebook/codemod/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/facebook/codemod/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/facebook/codemod/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/facebook/codemod/languages",
    "stargazers_url": "https://api.github.com/repos/facebook/codemod/stargazers",
    "contributors_url": "https://api.github.com/repos/facebook/codemod/contributors",
    "subscribers_url": "https://api.github.com/repos/facebook/codemod/subscribers",
    "subscription_url": "https://api.github.com/repos/facebook/codemod/subscription",
    "commits_url": "https://api.github.com/repos/facebook/codemod/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/facebook/codemod/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/facebook/codemod/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/facebook/codemod/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/facebook/codemod/contents/{+path}",
    "compare_url": "https://api.github.com/repos/facebook/codemod/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/facebook/codemod/merges",
    "archive_url": "https://api.github.com/repos/facebook/codemod/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/facebook/codemod/downloads",
    "issues_url": "https://api.github.com/repos/facebook/codemod/issues{/number}",
    "pulls_url": "https://api.github.com/repos/facebook/codemod/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/facebook/codemod/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/facebook/codemod/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/facebook/codemod/labels{/name}",
    "releases_url": "https://api.github.com/repos/facebook/codemod/releases{/id}",
    "deployments_url": "https://api.github.com/repos/facebook/codemod/deployments",
    "created_at": "2009-04-02T04:51:54Z",
    "updated_at": "2018-11-29T09:37:47Z",
    "pushed_at": "2018-10-04T12:06:24Z",
    "git_url": "git://github.com/facebook/codemod.git",
    "ssh_url": "git@github.com:facebook/codemod.git",
    "clone_url": "https://github.com/facebook/codemod.git",
    "svn_url": "https://github.com/facebook/codemod",
    "homepage": "",
    "size": 97,
    "stargazers_count": 2636,
    "watchers_count": 2636,
    "language": "Python",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": false,
    "has_pages": false,
    "forks_count": 137,
    "mirror_url": null,
    "archived": false,
    "open_issues_count": 12,
    "license": {
        "key": "apache-2.0",
        "name": "Apache License 2.0",
        "spdx_id": "Apache-2.0",
        "url": "https://api.github.com/licenses/apache-2.0",
        "node_id": "MDc6TGljZW5zZTI="
    },
    "forks": 137,
    "open_issues": 12,
    "watchers": 2636,
    "default_branch": "master",
    "permissions": {
        "admin": false,
        "push": false,
        "pull": true
    }
}