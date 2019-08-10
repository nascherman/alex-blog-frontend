import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";

import { withRouter } from 'react-router-dom';
import moment from "moment";

export default class PostSummary extends React.Component {
    render() {
        return (
            <List style={{padding: '0.5rem'}}>
                {this.props.posts.map((post, index) => {
                    const {user, createdDate, title} = post;

                    const RouterButton = withRouter(({history}) => (
                            <Button color={'primary'}
                                    onClick={() => history.push(`/post/${post.id}`)}>
                                Read more
                            </Button>
                        )
                    );

                    const hadDivider = this.props.posts.length > 1 && index !== this.props.posts.length - 1;

                    return (
                        <ListItem alignItems="center" key={index} divider={hadDivider}>
                            {user ? (
                                <ListItemAvatar>
                                    <Avatar alt={user.name} src={user.imageUrl}/>
                                </ListItemAvatar>
                            ) : null}
                            <ListItemText
                                primary={`${title} - ${moment(createdDate).format('MMM. DD YYYY h:MM a')}`}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            color="textPrimary"
                                            style={{marginRight: '0.5rem'}}
                                        >
                                            {`${user.name}`}
                                        </Typography>
                                        {`${post.body.substring(0, 50)}...`}
                                    </React.Fragment>
                                }
                            />
                            {<RouterButton/>}
                        </ListItem>
                    );
                })}
            </List>
        )
    }
}

PostSummary.defaultProps = {
    posts: []
};