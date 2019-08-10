import React from 'react';
import {Field, reduxForm} from "redux-form";

import TextareaAutosize from '@material-ui/core/TextareaAutosize';

class TextArea extends React.Component {
    render() {
        const { input } = this.props;

        return (
            <TextareaAutosize {...input}
                              autoFocus={true}
                              aria-label="Comment..."
                              rows={4}
                              rowsMax={10}
                              placeholder="Comment..."
                              style={{width: '100%'}}/>
        )
    }
}

class CommentForm extends React.Component {
    render() {
        return (
            <div style={{width: '90%', margin: '2rem auto 0'}}>
                <Field name="comment" id="comment" component={TextArea}/>
            </div>
        )
    }
}

export default reduxForm({
    form: 'comment'
})(CommentForm);