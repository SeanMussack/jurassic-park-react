import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history, children }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
        const currentURL = window.location.href;
        if (currentURL.includes("#")){
            const sectionID = currentURL.substring(currentURL.indexOf("#") + 1);
            let retries = 0;
            const scrollToSection = () => {
                retries += 1;
                if (retries > 50) return;
                const element = document.getElementById(sectionID);
                if (element) {
                    setTimeout(() => element.scrollIntoView(), 0);
                } else {
                    setTimeout(scrollToSection, 100);
                }
            };
            scrollToSection();
        } else {
            window.scrollTo(0, 0);
        }
    });
    return () => {
      unlisten();
    }
  }, []);

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);