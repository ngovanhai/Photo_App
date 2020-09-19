import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import PhotoCard from '../PhotoCard';

PhotoList.propTypes = {
    photoList : PropTypes.array,
    onPhotoEditClick : PropTypes.func,
    onPhotoRemoveClick : PropTypes.func,
};



PhotoList.defaultProps = {
photoList : [],
onPhotoEditClick : null,
onPhotoRemoveClick : null,
};

function PhotoList (props) {
    const { photoList , onPhotoRemoveClick , onPhotoEditCLick } = props;
    
    return (
        <div className="container">
             <Row>
      {photoList.map(photo => (
        <Col key={photo.title} xs="12" md="6" lg="3">
          <PhotoCard
            photo={photo}
            onEditClick = { onPhotoEditCLick }
            onRemoveClick = {onPhotoRemoveClick}
          />
        </Col>
      ))}
    </Row>
        </div>
    );
};





export default PhotoList;
