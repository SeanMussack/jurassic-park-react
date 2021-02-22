//import { Component } from 'react';

const emailAddress = "employment@jurassicpark.com";

function EmailLink () {
    return (
        <a href={"mailto:" + emailAddress}>
            {emailAddress}
        </a>
    );
}

export default EmailLink;