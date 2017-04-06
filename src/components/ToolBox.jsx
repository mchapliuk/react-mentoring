import React from 'react';

// Components
import AddCategory from './AddCategory';
import AddToDo from './AddToDo';

export default class ToolBox extends React.Component {
    render() {
        return(
            <div className="row">
                <div className="col-xs-6 col-md-4">
                    <AddCategory/>
                </div>
                <div className="col-xs-6 col-md-4 offset-md-4">
                    <AddToDo/>
                </div>
            </div>
        );
    }
};
