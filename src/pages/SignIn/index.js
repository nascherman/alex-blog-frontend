import React from "react";

import {connect} from "react-redux";
import { withRouter } from 'react-router-dom'

import {faFacebook, faGoogle} from "@fortawesome/free-brands-svg-icons";

import './SignIn.scss';
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Fab from "@material-ui/core/Fab";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class SignIn extends React.Component {
    componentDidMount() {
        // USER doesnt need to sign in
        this.checkToken();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.checkToken();
    }

    checkToken() {
        if (this.props.token.length > 0) {
            this.props.history.push('/home');
        }
    }

    authFacebook() {
        location.href = 'http://localhost:8080/oauth2/authorize/facebook?redirect_uri=http://localhost:3000';
    }

    authGoogle() {
        location.href = 'http://localhost:8080/oauth2/authorize/google?redirect_uri=http://localhost:3000';
    }

    render() {
        return (
            <div className={'sign-in__container'}>
                <Card>
                    <CardActions style={{flexDirection: 'column'}}>
                        <Fab variant="extended"
                             color="secondary"
                             aria-label="add"
                             onClick={() => this.authGoogle()}

                        >
                            <FontAwesomeIcon
                                icon={faGoogle}
                                style={{
                                    color: 'white',
                                    marginRight: '1rem'
                                }} />
                            Sign in with google
                        </Fab>
                        <hr />
                        <Fab variant="extended"
                             color="primary"
                             aria-label="add"
                             onClick={() => this.authFacebook()}
                        >
                            <FontAwesomeIcon
                                icon={faFacebook}
                                style={{color: 'white', marginRight: '1rem'}} />
                            Sign in with Facebook
                        </Fab>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default withRouter(connect(
    state => ({...state.user})
)(SignIn));