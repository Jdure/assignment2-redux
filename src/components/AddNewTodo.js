/**
 * @Author: Jonathan Dure <JDure>
 * @Date:   "December 3rd 2017"
 * @Email:  Dure0018@algonquinlive.com
 * @Project: Assignment 2
 * @Filename: AddNewTodo.js
 * @Last modified by:   JDure
 * @Last modified time: "December 14th 2017"
 */

/* eslint no-unused-vars: "off" */
import React, {Component} from "react";
import {connect} from "react-redux";
import * as todoActions from "../actions";

export class AddNewTodo extends Component {
    render() {
        return (<div>
            <input type="text" value={this.props.addTodoValue} onChange={this.props.addTodoChanged} placeholder="Add New Todo"/>
            <button className="add" onClick={this.props.saveNewTodo}>➕</button>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {addTodoValue: state.addTodoValue};
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveNewTodo: (e) => {
            let todo = {};
            dispatch(todoActions.saveNewTodo());
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(AddNewTodo);
