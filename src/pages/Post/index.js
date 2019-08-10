import React from "react";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {withRouter} from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';
import PostDetails from '../../components/PostDetails';

import * as PostActions from '../../actions/model/post';
import * as SnackbarActions from "../../actions/ui/snackbar";
import * as ModalActions from '../../actions/ui/modal';

import Comment from "../../components/CommentList";
import {Typography} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import PaperContainer from "../../components/PaperContainer";

function Loading() {
    return (
        <div style={{
            marginTop: '5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }} size={100}>
            <CircularProgress/>
        </div>
    )
}

class Post extends React.Component {
    state = {
        activePost: null
    };


    addCommentWithCheck(postId, commentId) {
        if (this.props.token.length === 0) {
            this.props.SHOW_HIDE_SNACKBAR(true);
        } else {
            this.props.SHOW_HIDE_MODAL(true);
            this.props.SET_ACTIVE_COMMENT(postId, commentId)
        }
    }


    componentWillMount() {
        if (this.props.posts.length <= 0) {
            this.props.history.push(`/home`);
        }
    }


    componentDidMount() {
        const activePostId = parseInt(this.props.location.pathname.split('/')[2]);
        this.setState({
            activePost: this.props.posts.find(post => (post.id === activePostId))
        }, () => this.props.GET_COMMENTS(this.state.activePost.id));

    }

    render() {
        return this.state.activePost === null ?
            (
                <Loading/>
            ) :
            (
                <div>
                    <PostDetails activePost={this.state.activePost}/>
                    <Divider/>
                    <PaperContainer>
                        <Button color={'primary'}
                                onClick={() => this.addCommentWithCheck(this.state.activePost.id)}>
                            <FontAwesomeIcon
                                icon={faPlus}
                                style={{
                                    color: 'white',
                                    marginRight: '1rem'
                                }}/>
                            Add comment
                        </Button>
                        {this.props.comments.length > 0 ? (
                            this.props.comments.map((comment, id) => {
                                return (
                                    <Comment
                                        key={id}
                                        {...comment}
                                        postId={this.state.activePost.id}
                                        addCommentWithCheck={this.addCommentWithCheck.bind(this)}
                                    />
                                )
                            })
                        ) : (
                            <Typography variant={'subheading2'}>
                                No comments yet
                            </Typography>
                        )}
                    </PaperContainer>
                </div>
            )
    }
}

Post.defaultProps = {
    location: {}
};

export default withRouter(connect(
    state => ({...state.user, ...state.post}),
    dispatch => (bindActionCreators({
        ...PostActions,
        ...SnackbarActions,
        ...ModalActions
    }, dispatch))
)(Post));