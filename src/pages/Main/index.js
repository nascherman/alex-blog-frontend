import React from "react";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as PostActions from '../../actions/model/post';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import PostSummary from "../../components/PostSummary/PostSummary";
import PaperContainer from "../../components/PaperContainer";

class Home extends React.Component {
    render() {
        return (
            <Container maxWidth="sm" style={{marginTop: '2rem'}}>
                <PaperContainer>
                    <div style={{
                        display: 'flex',
                        alignItems: 'flex-end'
                    }}>
                        <Typography variant={'h1'} component={'h2'} color={'primary'}>
                            W
                        </Typography>
                        <Typography  variant="h3" component="h2" style={{
                            paddingBottom: '0.4rem',
                            marginLeft: '-.4rem'
                        }}>
                            elcome
                        </Typography>
                    </div>
                    <Typography variant="h6" component="p" gutterBottom>
                        Some filler text to talk about my blog. Some filler text to talk about my blog
                        Some filler text to talk about my blog. Some filler text to talk about my blog.
                        Some filler text to talk about my blog. Some filler text to talk about my blog.
                        Some filler text to talk about my blog. Some filler text to talk about my blog
                    </Typography>
                </PaperContainer>
                <Divider />
                <PaperContainer>
                    {this.props.posts.length > 0 ? (
                        <div>
                            <Typography variant="h3" component="h2" color={'primary'}>
                                Blog posts
                            </Typography>
                            <PostSummary posts={this.props.posts} />
                        </div>

                    ) : (
                        <Typography variant="h5" component="h2">
                            No posts yet
                        </Typography>
                    )}
                </PaperContainer>
            </Container>
        )
    }
}

export default connect(
    state => ({...state.user, ...state.post}),
    dispatch => (bindActionCreators({...PostActions}, dispatch))
)(Home);