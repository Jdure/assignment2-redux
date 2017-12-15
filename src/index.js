/**
 * @Author: Jonathan Dure <JDure>
 * @Date:   "December 3rd 2017"
 * @Email:  Dure0018@algonquinlive.com
 * @Project: Assignment 2
 * @Filename: index.js
 * @Last modified by:   JDure
 * @Last modified time: "December 14th 2017"
 */



require("./main.scss");

/*eslint no-unused-vars: "off"*/
import React from "react";
import Main from "./components/Main";
import {render} from "react-dom";
import {createStore} from "redux";
import {Provider,connect} from "react-redux";
import todos from "./reducers";

let store = createStore(todos, {
    todoList: [
        {key: 1, id: 1, text: "Learn React", status: 1},
        {key: 2, id: 2, text: "Learn Redux", status: 1},
        {key: 3, id: 3, text: "Reduxify this app", status: 0},
        {key: 4, id: 4, text: "Learn React Native", status: 0}
    ],addTodoValue:"",
});

let rootElement = document.getElementById("react-app");

render(
    <Provider store={store}>
        <Main />
    </Provider>,
    rootElement
);
