import { Component } from "react";
import { Card } from "reactstrap";

function RenderInfoAccordionCard (cardData) {
    return (
        <Card className="bg-light">

        </Card>
    );
}

class InfoAccordion extends Component {
    constructor(props) {
        super(props);
        this.props = {
            data: null
        }
    }
    render() {
        return (
            <div className="infoAccordion">

            </div>
        );
    }
}

export default InfoAccordion;