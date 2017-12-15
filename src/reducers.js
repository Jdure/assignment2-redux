/**
 * @Author: Jonathan Dure <JDure>
 * @Date:   "December 14th 2017"
 * @Email:  Dure0018@algonquinlive.com
 * @Project: Assignment 2
 * @Filename: reducers.js
 * @Last modified by:   JDure
 * @Last modified time: "December 14th 2017"
 */

 /*eslint indent: "off"*/

import {SAVE_NEWTODO, TOGGLE_STATUS, CHANGE_TODO} from "./actions";

var newTodo;
var list;
var newList;
var newState;

export default function todos(state = [], action) {
    newState = Object.assign({}, state);

    /*eslint no-case-declarations: "off"*/
    switch (action.type) {
    case SAVE_NEWTODO:

        if (newState.addTodoValue == "") {
            return state;
        }

        newTodo = {};
        const todoID = newState.todoList[newState.todoList.length - 1].id;
        newTodo.id = todoID + 1;
        newTodo.key = todoID + 1;
        newTodo.text = newState.addTodoValue;
        newTodo.status = false;

        list = [
            ...newState.todoList,
            newTodo
        ];
        newState.todoList = list;
        newState.addTodoValue = "";
        break;
    case TOGGLE_STATUS : {
        newList = newState.todoList.map((todo) => {
            if (todo.id == action.id) {
                return Object.assign({}, todo, {
                    status: todo.status
                        ? false
                        : true
                });
            } else {
                return Object.assign({}, todo);
            }
        });
        newState.todoList = newList;
    }
        break;
    case CHANGE_TODO: newState.addTodoValue = action.text;

        break;
    default : return state;

    }
    return newState;
}
