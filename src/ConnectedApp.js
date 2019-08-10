import React from "react";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as PostActions from './actions/model/post';

import {BrowserRouter} from "react-router-dom";
import RouteContainer from "./RouteContainer";

class AppView extends React.Component {
    componentDidMount() {
        this.props.GET_POSTS();
    }

    render() {
        return (
            <BrowserRouter>
                <RouteContainer />
            </BrowserRouter>
        )
    }
}

export default connect(
    state => ({...state.user, ...state.post}),
    dispatch => (bindActionCreators({...PostActions}, dispatch))
)(AppView);