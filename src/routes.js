import Main from "./pages/Main";
import Post from "./pages/Post";
import SignIn from "./pages/SignIn";
import CreatePost from "./pages/CreatePost";
import React from "react";
import {Redirect, Route} from "react-router-dom";

export default [
    {
        path: '/',
        exact: true,
        main: () => <Route exact path="/" render={(props) => {
            return <Redirect to={
                {
                    pathname: '/home',
                    search: props.location.search
                }
            }/>
        }
        }/>
    },
    {
        path: '/home',
        main: () => <Route path="/home" component={Main}/>
    },
    {
        path: '/post',
        main: () => <Route path="/post" component={Post}/>
    },
    {
        path: '/sign-in',
        main: () => <Route path="/sign-in" component={SignIn}/>
    },
    {
        path: '/create-post',
        main: () => <Route path="/create-post" component={CreatePost}/>
    }
];