/**
 * @Author: Jonathan Dure <JDure>
 * @Date:   "December 3rd 2017"
 * @Email:  Dure0018@algonquinlive.com
 * @Project: Assignment 2
 * @Filename: Main.js
 * @Last modified by:   JDure
 * @Last modified time: "December 14th 2017"
 */

/*eslint no-unused-vars: "off"*/
import React, {Component} from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Todolist from "./Todolist";
import AddNewTodo from "./AddNewTodo";
import {connect} from "react-redux";
import * as todoActions from "../actions";

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Todolist todos={this.props.todoList} onTodoClick={this.props.toggleStatus}></Todolist>
                <AddNewTodo addTodoChanged={this.props.addTodoChanged} addTodoValue={this.props.addTodoValue} saveNewTodo={this.props.saveNewTodo} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        addTodoValue:state.addTodoValue,
        todoList:state.todoList
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        addTodoChanged: (e)=>  dispatch(todoActions.changeTodo(e.target.value))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Main);
