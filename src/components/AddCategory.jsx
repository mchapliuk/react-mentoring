import React from 'react';

export default class AddCategory extends React.Component {
    render() {
        return(
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Enter Category Title"/>
                <span className="input-group-addon">Add</span>
            </div>
        );
    }
};
