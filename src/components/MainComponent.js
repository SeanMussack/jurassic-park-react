import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Dinosaurs from './DinosaursComponent';
import BigPicPage from "./BigPicPageComponent";
import GettingHere from './GettingHereComponent';
import VisitorCenter from "./VisitorCenterComponent";
import Calendar from "./CalendarComponent";
import Tickets from './TicketsComponent';
import SeasonPasses from './SeasonPassesComponent';
import Groups from "./GroupsComponent";
import BirthdayParties from "./BirthdayPartiesComponent";
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
                    <Route path='/calendar-and-hours' render={() => <Calendar/>} />
                    <Route path='/getting-here' render={() => <GettingHere/>} />
                    <Route path='/dinosaurs' render={() => <Dinosaurs dinosaurs={DINOSAURS}/>} />
                    <Route path='/visitor-center' render={() => <VisitorCenter/>} />
                    <Route path='/park-gate' render={() => <BigPicPage bigPicData={BIGPICPAGEDATA[1]} />} />
                    <Route path='/waterfalls' render={() => <BigPicPage bigPicData={BIGPICPAGEDATA[0]} />} />
                    <Route path='/tickets' render={() => <Tickets />} />
                    <Route path='/season-passes' render={() => <SeasonPasses />} />
                    <Route path='/groups' render={() => <Groups />} />
                    <Route path='/birthday-parties' render={() => <BirthdayParties />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;