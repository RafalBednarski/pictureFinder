import React from 'react';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {spans: 0};//state with default value

        this.imageRef = React.createRef();//REF system - making reference thanks to with we can 
    }                                           //refer later refer to it from any instance of component
                                                //something like document.querySelector('img)
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans); //if img is allready loaded => setSpans
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight; //img height
        const spans = Math.ceil(height / 10);  //score rounded

        this.setState({spans: spans});       //set STATE for actual score of Math.ceil(height / 10);
    }

    render() {
        const {description, urls} = this.props.image;   //get the props with image object and
        return (                                       //extract descr. and urls from image object
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>                                          
                <img
                    alt={description}              //this is extracted earlier value
                    src={urls.regular}
                    ref={this.imageRef}           //REF from line nr 10
                />                               
            </div>
        )
    }
}

export default ImageCard;