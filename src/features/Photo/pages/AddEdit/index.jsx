import React from 'react';

import './styles.scss';
import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { randomNumber } from 'utills/common';

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const {photoId} = useParams();
  // useParames sẽ lấy giá trị từ của biên trên Url 
  // ví dụ {photoId,commentId,...}
  const isAddMode = !photoId;

  const editedPhoto = useSelector (state => state.photos.find(x => x.id === +photoId));
  // +photo.id để chuyển từ chuỗi sang số

  
  const initialValues = isAddMode 
  ? {
    title:'',
    categoryId:null,
    photo:'',
  }
  : editedPhoto;

const handleSubmit = (values) => {
  return new Promise(resolve => {
    console.log('Form submit : ',values);
    
    setTimeout(()=>{
      if (isAddMode){
        const newPhoto = {
          ...values,
          id: randomNumber(10000,99999),
        }
        
        const action = addPhoto(newPhoto);
        dispatch(action);
      } else{
        const action = updatePhoto(values);
        dispatch(action);
      }
      
    
      history.push('/photos');
      resolve(true);
    },2000);
  });
 
  
}

  return (
    <div className="photo-edit">
      <Banner title="hihi😎" />
      <div className="photo-edit__form">
        <PhotoForm 
        isAddMode = {isAddMode}
        initialValues = { initialValues }
        onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default AddEditPage;