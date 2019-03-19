import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {//get the props(score from query to outside API)
    const images = props.images.map((image)=> {//map props
        return <ImageCard key={image.id} image={image} />//return new custom cmp for any element from props table
    });

    return (
        <div className="image-list">{images}</div>
    )
}
export default ImageList;