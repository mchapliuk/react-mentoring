import React from 'react';

// Components
import ProgressBar from './ProgressBar';
import ToolBox from './ToolBox';

export default class AppContainer extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <ProgressBar/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-12">
                        <ToolBox/>
                    </div>
                </div>
            </div>

        );
    }
}
