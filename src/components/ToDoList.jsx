import React from 'react';

// Components
import NoCategorySelected from './NoCategorySelected';

export default class ToDoList extends React.Component {
    render() {
        let tasksTemplate;

        if (this.props.tasks) {
            tasksTemplate = <ul className="list-group">
                { this.props.tasks.map(task => {
                    <li className="list-group-item">task.title</li>
                })}
            </ul>
        } else {
            tasksTemplate = <NoCategorySelected/>;
        }

        return (
            <div className="container">
                {tasksTemplate}
            </div>
        );
    }
};
