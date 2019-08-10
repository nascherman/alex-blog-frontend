import React from "react";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {NavLink, withRouter} from 'react-router-dom'
import * as UserActions from "../../actions/model/user";

import './TopNav.scss';
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faPaperclip, faPlus, faUser} from "@fortawesome/free-solid-svg-icons";
import IconButton from "@material-ui/core/IconButton";
import withWidth from '@material-ui/core/withWidth';

class TopNav extends React.Component {
    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.token === null && this.props.token && this.props.token.length > 0) {
            this.props.GET_ME();
        }
    }

    hasRole(role) {
        const {user = {user: {}}} = this.props;
        const authorities = user.authorities || [];

        const found = authorities.find(authority => authority.authority === `ROLE_${role}`);

        return found || false;
    }

    goHome() {
        this.props.history.push('/home');
    }

    signIn() {
        this.props.history.push('/sign-in');
    }

    createPost() {
        this.props.history.push('/create-post');
    }

    render() {
        console.log("WIDTH", this.props.width);
        return (
            <header className={'top__container'}>
                <AppBar position="static">
                    <Toolbar>
                        <div style={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            paddingBottom: '1rem'
                        }}>
                            <Typography variant="h4" aria-hidden={true} className={'title-text'}>
                                A
                            </Typography>
                            <Typography variant="h6" aria-hidden={true} className={'title-text'} style={{
                                marginLeft: '.1rem',
                                marginBottom: '-.1rem'
                            }}>
                                lex Gracie
                            </Typography>
                        </div>

                        {this.hasRole('ADMIN') ?
                            (
                                <IconButton onClick={() => this.createPost()}>
                                    <FontAwesomeIcon icon={faPaperclip}
                                                     style={{ color: 'white', marginRight: '1rem'}}/>
                                    {this.props.width !== 'sm' && this.props.width !== 'xs' ? (
                                        <Typography variant={'overline'} style={{color: 'white'}}>
                                            create post
                                        </Typography>
                                    ) : null}
                                </IconButton>
                            ) : null
                        }
                        {this.props.token.length === 0 ? (
                            <IconButton onClick={() => this.signIn()}>
                                <FontAwesomeIcon icon={faUser}
                                    style={{ color: 'white', marginRight: '1rem'}}/>
                                {this.props.width !== 'sm' && this.props.width !== 'xs' ? (
                                    <Typography variant={'overline'} style={{color: 'white'}}>
                                        Sign in
                                    </Typography>
                                ) : null}
                            </IconButton>
                        ) : null}
                        <IconButton onClick={() => this.goHome()}>
                            <FontAwesomeIcon icon={faHome}
                                             style={{ color: 'white', marginRight: '1rem'}}/>
                            {this.props.width !== 'sm' && this.props.width !== 'xs' ? (
                                <Typography variant={'overline'} style={{color: 'white'}}>
                                    Home
                                </Typography>
                            ) : null}
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </header>
        )
    }
}

export default withWidth()(withRouter(connect(
    state => ({...state.user}),
    dispatch => (bindActionCreators({...UserActions}, dispatch))
)(TopNav)));