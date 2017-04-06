import React from 'react';

export default class SearchBox extends React.Component {
    render() {
        return(
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search..."/>
                <span className="input-group-addon">X</span>
            </div>
        );
    }
};
