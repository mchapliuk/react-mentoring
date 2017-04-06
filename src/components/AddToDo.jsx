import React from 'react';

export default class AddToDo extends React.Component {
    render() {
        return(
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Add Task"/>
                <span className="input-group-addon">Add</span>
            </div>
        );
    }
};
