import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import React from "react";
import moment from "moment";

import PaperContainer from "../PaperContainer";

export default function(props) {
    const {activePost} = props;

    return (
        <PaperContainer>
            <div>
                <Typography variant="h4" gutterBottom style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Avatar
                        alt={activePost.user.name}
                        src={activePost.user.imageUrl}
                        style={{
                            width: '3rem',
                            height: '3rem',
                            marginRight: '1rem'
                        }}
                    />
                    {activePost.title}
                </Typography>
                <Typography variant="caption" paragraph={true} style={{marginLeft: '4rem'}}>
                    Written by {activePost.user.name} on {moment(
                    activePost.createdDate
                ).format('MMM. DD YYYY h:MM a')}
                </Typography>
                {activePost.body.split('\n\n').map((par, key) => (
                    <Typography key={key} variant="body1" paragraph={true} style={{
                        textIndent: '2rem',
                        textAlign: 'justify'
                    }}>
                        {`${par}`}
                    </Typography>
                ))}
            </div>
        </PaperContainer>
    )
}