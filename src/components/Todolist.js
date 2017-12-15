/**
 * @Author: Jonathan Dure <JDure>
 * @Date:   "December 3rd 2017"
 * @Email:  Dure0018@algonquinlive.com
 * @Project: Assignment 2
 * @Filename: Todolist.js
 * @Last modified by:   JDure
 * @Last modified time: "December 14th 2017"
 */

/*eslint no-unused-vars: "off"*/
import React, { Component } from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import {connect} from "react-redux";
import * as todoActions from "../actions";

export class Todolist extends Component {
    render() {
        const todos = this.props.todos.map((item) => {
            return (
                <Todo {...item} />
            );
        });
        return (
            <div>
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        todos:state.todoList
    };
};

export default connect(mapStateToProps)(Todolist);
