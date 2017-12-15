/**
 * @Author: Jonathan Dure <JDure>
 * @Date:   "December 3rd 2017"
 * @Email:  Dure0018@algonquinlive.com
 * @Project: Assignment 2
 * @Filename: Todo.js
 * @Last modified by:   JDure
 * @Last modified time: "December 14th 2017"
 */


/*eslint no-unused-vars: "off"*/
import React, { Component } from "react";
import {connect} from "react-redux";
import * as todoActions from "../actions";

export class Todo extends Component {
    render() {
        return (
            <li className={this.props.status ? "done" : "open"} id={"todo-" + this.props.id}>
                <button className="todo" onClick={this.props.onClick}>{this.props.status ? "✅" : "❎"}</button>
                {this.props.text}
            </li>
        );
    }
}

const mapStateToProps = (state,ownProps)=>{
    return {
        status:ownProps.status,
        id:ownProps.id,
        text:ownProps.text
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (e)=> {
            let id = e.target.closest("li").id.split("-")[1];
            dispatch(todoActions.toggleStatus(id));
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Todo);
