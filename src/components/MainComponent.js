import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Dinosaurs from './DinosaursComponent';
import BigPicPage from "./BigPicPageComponent";
import { DINOSAURS } from '../shared/dinosaurs';
import { BIGPICPAGEDATA } from "../shared/bigPicPageData";
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
                    <Route path='/waterfalls' render={() => <BigPicPage bigPicData={BIGPICPAGEDATA[0]} />} />
                    <Route path='/park-gate' render={() => <BigPicPage bigPicData={BIGPICPAGEDATA[1]} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;