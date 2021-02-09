import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Dinosaurs from './DinosaursComponent';
import { DINOSAURS } from '../shared/dinosaurs';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path='/home' render={() => <Home/>} />
                    <Route path='/dinosaurs' render={() => <Dinosaurs dinosaurs={DINOSAURS}/>} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;