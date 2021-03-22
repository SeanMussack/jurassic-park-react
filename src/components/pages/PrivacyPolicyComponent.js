import { Container, Row } from "reactstrap";

function PrivacyPolicy() {
    return (
        <div id="mainContent">
            <Container>
                <Row className="row-content">
                    <h1>Privacy Policy</h1>
                </Row>
                <Row className="row-content">
                    <p>
                        By visiting the Jurassic Park website or any of its pages, you agree to waive InGen, Jurassic Park, John Hammond, and all other parties involved, of any and all responsibility, legal or otherwise, for all time and throughout the universe, for any unforseen injury, death, or any other negative consequence you may or may not believe has occurred on Isla Nublar, or as a result of your experiences therein.
                    </p>
                    <p>
                        Nothing contained within this website, or in any other official Jurassic Park promotional or informational material, should be construed as a guarantee of your safety during your visit to Isla Nublar.
                    </p>
                </Row>
            </Container>
        </div>
    );
}

export default PrivacyPolicy;