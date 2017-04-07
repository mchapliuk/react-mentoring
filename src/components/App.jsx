import React from 'react';

// Components
import AppHeader from './AppHeader';
import AppContainer from './AppContainer';
import AppFooter from './AppFooter';

// Data
import { TASKS } from '../mock/tasks';

export default class App extends React.Component {
    render() {
        return(
            <div className="container">
                <AppHeader/>
                <AppContainer categories={TASKS}/>
                <AppFooter/>
            </div>
        );
    }
}
