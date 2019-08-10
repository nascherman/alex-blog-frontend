import React from "react";

import PaperContainer from "../PaperContainer";
import {Typography} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import moment from "moment";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import {connect} from "react-redux";

export default class CommentList extends React.Component {
    render() {
        const {id, body, createdDate, childrenComments, user, postId, parentCommentId, elevation} = this.props;

        return (
            <PaperContainer elevation={elevation || 1}>
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
                    <Typography variant={'subtitle1'} style={{width: 'calc(75% - 2rem)'}}>
                        {`${user.name} - ${moment(createdDate).format('MMM. DD YYYY h:MM a')}`}
                    </Typography>
                    <div style={{
                        width: '25%'
                    }}>
                        <Tooltip title="Add comment" aria-label="add comment">
                            <IconButton size={'small'} onClick={() => this.props.addCommentWithCheck(postId, id)}>
                                <Typography variant={'overline'} style={{marginRight: '0.2rem'}}>
                                    Add comment
                                </Typography>
                                <FontAwesomeIcon icon={faPlus}/>
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
                <Typography variant={'body2'} gutterBottom={true} style={{marginLeft: '3rem'}}>
                    {body}
                </Typography>
                {childrenComments.map((comment, index) => {
                    return (
                        <CommentList
                            elevation={index + 1}
                            key={index}
                            {...comment}
                            postId={postId}
                            parentCommentId={id}
                            addCommentWithCheck={this.props.addCommentWithCheck}
                        />
                    )
                })}
            </PaperContainer>
        )
    }
}

CommentList.defaultProps = {
    id: 0,
    body: '',
    createdDate: new Date(),
    childrenComments: [],
    user: {},
    addCommentWithCheck: () => {
    },
};
