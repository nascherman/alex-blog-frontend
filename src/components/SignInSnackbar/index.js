import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import * as SnackBarActions from '../../actions/ui/snackbar';
import {bindActionCreators} from "redux";

class SignInSnackbar extends React.Component {
    navigateSignIn() {
        this.close();
        this.props.history.push('/sign-in');
    }

    close() {
        this.props.SHOW_HIDE_SNACKBAR(false);
    }

    render() {
        const {show} = this.props;

        return (
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={show}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">Sign in to add a comment.</span>}
                action={[
                    <Button key="undo" color="secondary" size="small" onClick={() => this.navigateSignIn()}>
                        Sign In
                    </Button>,
                    <IconButton
                        key="close"
                        aria-label="close"
                        color="inherit"
                        onClick={() => this.close()}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </IconButton>
                ]}
            />
        )
    }
}

export default withRouter(connect(
    state => ({...state.snackbar}),
    dispatch => (bindActionCreators({...SnackBarActions},dispatch))
)(SignInSnackbar));