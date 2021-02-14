import { Component } from 'react';
import { Link } from 'react-router-dom';

class ImageAndText extends Component {
    constructor(props){
        super(props);
        this.props = {
            imageAndTextData: null
        }
    }
    render() {
        return(
            <div className="row row-content align-items-center" id={this.props.imageAndTextData.id} key={this.props.imageAndTextData.key}>
                <div className={"col-12 col-md-4" + (this.props.imageAndTextData.isOnRight ? " order-md-2" : "")}>
                    <img 
                        className={"img-fluid img-shadow" + 
                                    (this.props.imageAndTextData.isOnRight ? "" : " mx-xl-5")}
                        src={this.props.imageAndTextData.src}
                        alt={this.props.imageAndTextData.alt}
                    />
                </div>
                <div className="col-12 col-md-8">
                    <h3 className="pt-2">
                        {(this.props.imageAndTextData.href) ? <Link to={this.props.imageAndTextData.href}>{this.props.imageAndTextData.header}</Link> : this.props.imageAndTextData.header}
                    </h3>
                    <br className="d-none d-md-block"/>
                    <p>{this.props.imageAndTextData.text}</p>
                </div>
            </div>
        );
    }
}

export default ImageAndText;