import React, { Component } from 'react';

import {withRouter} from 'react-router-dom';
import { Route,Switch,Redirect} from 'react-router-dom';
import {CSSTransition,TransitionGroup} from 'react-transition-group'


import Home from '@/home/Home.jsx'
import {Detail} from '@/detail/index.js';

import './style.css';
import 'animate.css';

@withRouter
class App extends Component {
    state = {  }
    render() {
        // console.log(this.props);
        return (
            <> 
            <TransitionGroup>
                <CSSTransition
                    timeout={600} 
                    key={this.props.location.pathname}
                    classNames={'my-node'}
                    // classNames={{
                    //     enter: 'animate__animated',
                    //     enterActive: 'animate__backOutDown',
                    //     exit: 'animate__animated',
                    //     exitActive: 'animate__backOutDown'
                    //   }}
                        >
                    <Switch location={this.props.location}>
                        <Redirect from='/' to='/home' exact></Redirect>
                        <Route path='/home'>
                            <Home></Home>
                        </Route>
                        <Route path='/detail/:id'>
                                <Detail></Detail>
                        </Route>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
            </>
        );
    }
}

export default App;