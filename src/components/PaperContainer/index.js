import Paper from "@material-ui/core/Paper";
import React from "react";

export default class PaperContainer extends React.Component {
    render() {
        const {props} = this;

        return (
            <Paper style={props.modal ? {
                margin: '2rem auto',
                padding: '0.2rem',
                maxWidth: '30rem'
            } : {
                    margin: '2rem auto',
                    padding: '0.75rem',
                    maxWidth: '40rem'
                }}>
                {props.children}
            </Paper>
        )
    }
}