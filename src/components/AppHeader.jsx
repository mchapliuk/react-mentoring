import React from 'react';

// Components
import ShowDone from './ShowDone';
import SearchBox from './SearchBox';

export default class AppHeader extends React.Component {
    render() {
        return (
            <div className="header container">
                <div className="row">
                    <div className="col-xs-6 col-md-8">
                        <h3 className="text-muted">ToDo List</h3>
                    </div>
                    <div className="col-xs-3 col-md-2">
                        <ShowDone/>
                    </div>
                    <div className="col-xs-3 col-md-2">
                        <SearchBox/>
                    </div>
                </div>
            </div>
        );
    }
}
