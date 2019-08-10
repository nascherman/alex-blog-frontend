import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Modal from "@material-ui/core/Modal";

import * as ModalActions from '../../actions/ui/modal'
import * as PostActions from '../../actions/model/post';

import PaperContainer from "../PaperContainer";
import Avatar from "@material-ui/core/Avatar";
import {Typography} from "@material-ui/core";
import CommentForm from "../CommentForm";
import Button from "@material-ui/core/Button";

class CommentModal extends React.Component {
    close() {
        this.props.SHOW_HIDE_MODAL(false);
    }

    addComment() {
        const {postId, parentCommentId} = this.props;
        this.props.CREATE_COMMENT(this.getCommentField(), postId, parentCommentId);
        this.props.SHOW_HIDE_MODAL(false);
    }

    getCommentField() {
        const {comment} = this.props;
        if (comment && comment.values) {
            return comment.values.comment;
        }

        return '';
    }

    render() {
        const {user, comment} = this.props;
        const commentLength = this.getCommentField().length;

        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.props.show}
                onClose={() => this.close()}
            >
                <PaperContainer>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        position: 'relative'
                    }}>
                        <Avatar
                            alt={user.name}
                            src={user.imageUrl}
                            style={{
                                width: '2rem',
                                height: '2rem',
                                marginRight: '1rem'
                            }}
                        />
                        <Typography variant={'heading3'}>
                            Add a comment
                        </Typography>
                    </div>
                    <CommentForm/>
                    <Button
                        color={'primary'}
                        onClick={() => this.addComment()}
                        disabled={commentLength === 0}
                    >
                        Add comment
                    </Button>
                </PaperContainer>
            </Modal>
        )
    }
}

export default connect(
    state => ({...state.user, ...state.modal, ...state.form, ...state.post}),
    dispatch => (bindActionCreators({...ModalActions, ...PostActions}, dispatch))
)(CommentModal)