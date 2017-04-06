import React from 'react';

export default class ShowDone extends React.Component {
    render() {
        return(
            <div className="checkbox">
                <label>
                    <input type="checkbox"/>Show Done
                </label>
            </div>
        );
    }
};
