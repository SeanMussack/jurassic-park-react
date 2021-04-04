import { Component } from 'react';

class PageComponent extends Component ({children}) {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div id="mainContent">
                {children}
            </div>
        );
    }
}

export default PageComponent;