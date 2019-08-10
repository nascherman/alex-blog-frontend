import React from "react";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { withRouter } from 'react-router-dom'

import * as PostActions from '../../actions/model/post';
import PaperContainer from "../../components/PaperContainer";
import {Field, reduxForm} from "redux-form";
import {Input, TextField} from "@material-ui/core";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from "@material-ui/core/Button";

const titleValidator = (value = '') => {
    if (value.length < 5) {
        return 'Must put a title';
    }
};

const bodyValidator = (value = '') => {
    if (value.length === 0) {
        return 'Must enter a body'
    }
};

function Textarea(props) {
    const {input} = props;

    return (
        <TextareaAutosize {...input}
                          autoFocus={true}
                          aria-label="My post..."
                          rows={20}
                          rowsMax={3000}
                          placeholder="My Post..."
                          style={{width: '100%', whiteSpace: 'pre-wrap'}}
        />
    )
}

function FormInput(props) {
    const {input} = props;

    return (
        <TextField
            {...input}
            style={{marginBottom: '1rem'}}
            label={'Title'}
        />
    )
}

class CreatePost extends React.Component {
    createPost(title, body) {
        this.props.CREATE_POST(title, body);
        this.props.history.push('/home');
    }

    render() {
        const {handleSubmit, invalid} = this.props;

        return (
            <PaperContainer>
                <form onSubmit={handleSubmit(({title, body}) => this.createPost(title, body))}>
                    <Field
                        name="title"
                        id="title"
                        component={FormInput}
                        validate={titleValidator}
                    />
                    <Field
                        name="body"
                        id="body"
                        component={Textarea}
                        validate={bodyValidator}
                    />
                    <Button type={'submit'} disabled={invalid}>
                        Create Post
                    </Button>
                </form>
            </PaperContainer>
        )
    }
}

export default reduxForm({
    form: 'post'
})(withRouter(connect(
    state => ({...state.user, ...state.post}),
    dispatch => bindActionCreators({...PostActions}, dispatch)
)(CreatePost)));

