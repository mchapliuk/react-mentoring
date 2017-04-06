import React from 'react';

// Components
import AppHeader from './AppHeader';
import AppContainer from './AppContainer';
import AppFooter from './AppFooter';

export default class App extends React.Component {
    render() {
        return(
            <div className="container">
                <AppHeader/>
                <AppContainer/>
                <AppFooter/>
            </div>
        );
    }
}
