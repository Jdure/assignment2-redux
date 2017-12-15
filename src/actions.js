/**
 * @Author: Jonathan Dure <JDure>
 * @Date:   "December 14th 2017"
 * @Email:  Dure0018@algonquinlive.com
 * @Project: Assignment 2
 * @Filename: actions.js
 * @Last modified by:   JDure
 * @Last modified time: "December 14th 2017"
 */

export const SAVE_NEWTODO = "SAVE_NEWTODO";
export const TOGGLE_STATUS = "TOGGLE_STATUS";
export const CHANGE_TODO = "CHANGE_TODO";

/*eslint no-unused-vars: "off"*/
export const saveNewTodo = () => {
    return{
        type: SAVE_NEWTODO
    };
};

export const toggleStatus = (id) => {
    return{
        type: TOGGLE_STATUS,
        id
    };
};

export const changeTodo = (text) => {
    return{
        type: CHANGE_TODO,
        text
    };
};
