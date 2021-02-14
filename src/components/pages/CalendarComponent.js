import React, { Component } from 'react';
import { Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';

function RenderCalendarColumn(isLarge) {
    if (isLarge) {
        return (
            <Col lg="8" xl="6" className="calendar-column d-none d-md-block ml-md-2 ml-lg-0 ml-xl-5">
                <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23D50000&amp;ctz=America%2FCosta_Rica&amp;src=OThqNTY2bWFlanUzZHVmbHJxOTVtZTZjZm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23AD1457&amp;mode=MONTH&amp;showCalendars=0&amp;showNav=1&amp;showDate=1&amp;showPrint=1" styleHTML="border:solid 1px #777" width="680" height="600" frameborder="0" scrolling="no"></iframe>
            </Col>
        );
    }
    return (
        <Col className="calendar-column d-block d-md-none">
            <iframe src="https://calendar.google.com/calendar/embed?height=400&amp;wkst=1&amp;bgcolor=%23D50000&amp;ctz=America%2FCosta_Rica&amp;src=OThqNTY2bWFlanUzZHVmbHJxOTVtZTZjZm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23AD1457&amp;mode=MONTH&amp;showCalendars=0&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showTitle=1" styleHTML="border:solid 1px #777" width="330" height="400" frameborder="0" scrolling="no"></iframe>
        </Col>
    );
}

function RenderCalendarInfoColumn() {
    return (
        <Col lg={{size: 3, offset: 1}} xl={{size: 4, offset: 1}} className="calendar-info-column">
            <h4>Regular Park Hours</h4>
            <p>8am-8pm daily</p>
            <br/>
            <h4><Link to="/getting-here#boat">Ferry</Link> Schedule Hours</h4>
            <p>Mon-Fri:</p>
            <p>Every hour starting at 9am</p>
            <p>Sat-Sun:</p>
            <p>Every hour starting at 7am</p>
        </Col>
    );
}

class Calendar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="mainContent">
                <Row className="row-content align-items-center ml-0">
                    {RenderCalendarColumn(false)}
                    {RenderCalendarColumn(true)}
                    {RenderCalendarInfoColumn()}
                </Row>
            </div>
        );
    }
}

export default Calendar;