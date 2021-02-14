import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './pages/HomeComponent';
import Calendar from "./pages/CalendarComponent";
import GettingHere from './pages/GettingHereComponent';
import Cafe from "./pages/CafeComponent";
import Dinosaurs from './pages/DinosaursComponent';
import VisitorCenter from "./pages/VisitorCenterComponent";
import BigPicPage from "./pages/BigPicPageComponent";
import Tickets from './pages/TicketsComponent';
import SeasonPasses from './pages/SeasonPassesComponent';
import Groups from "./pages/GroupsComponent";
import BirthdayParties from "./pages/BirthdayPartiesComponent";
import { DINOSAURS } from '../shared/dinosaurs';
import { BIGPICPAGEDATA } from "../shared/bigPicPageData";
import { CAFEMENU } from "../shared/cafeMenu";

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
                    <Route path='/home' component={Home} />
                    <Route path='/calendar-and-hours' render={() => <Calendar/>} />
                    <Route path='/getting-here' render={() => <GettingHere/>} />
                    <Route path='/cafe' render={() => <Cafe cafeMenu={CAFEMENU} />} />
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