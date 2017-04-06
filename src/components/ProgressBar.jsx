import React from 'react';

export default class ProgressBar extends React.Component {
    render() {
        const progress = {
            width: '30%'
        };
        return (
            <div className="progress-block">
                <div className="progress">
                    <div
                        className="progress-bar"
                        style={ progress }
                        role="progressbar"
                        aria-valuenow="30"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                </div>
            </div>
        );
    }
};
