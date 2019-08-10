import React from "react";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {parse} from 'uri-js';

import {Route, withRouter} from "react-router-dom";

import TopNav from "./components/TopNav/TopNav";
import * as UserActions from "./actions/model/user";
import SignInSnackbar from "./components/SignInSnackbar";
import CommentModal from "./components/CommentModal";

import routes from './routes';

import {createMuiTheme} from '@material-ui/core/styles';
import {purple, pink, grey} from '@material-ui/core/colors';
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {main: purple[500]}, // Purple and green play nicely together.
        secondary: {main: pink[500]}, // This is just green.A700 as hex.,
        background: {default: grey[100]},
    },
    // overrides: {
    //     MuiPaper: {
    //         root: {
    //             backgroundColor: grey[100]
    //         }
    //     }
    // }
});

class RouteContainer extends React.Component {
    state = {
        initializedUser: false
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {location = {href: ''}} = this.props;

        const tokenQuery = parse(location.search).query;

        if (tokenQuery && tokenQuery.indexOf('token') !== -1 && !this.state.initializedUser) {
            this.setState({
                initializedUser: true
            }, () => {
                this.props.SET_TOKEN(tokenQuery.split('=')[1]);
                this.props.GET_ME();
            });
        }
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <TopNav/>
                    <div className={'app'}>
                        {routes.map((route) => (
                            <Route
                                key={route.path}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                        ))}
                    </div>
                    <SignInSnackbar/>
                    <CommentModal/>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default withRouter(connect(
    state => ({...state.user, ...state.post}),
    dispatch => (bindActionCreators({...UserActions}, dispatch))
)(RouteContainer));

