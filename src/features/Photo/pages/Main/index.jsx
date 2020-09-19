import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container } from 'reactstrap';
import Images from 'constants/images';
import Banner from 'components/Banner';
import { useSelector, useDispatch } from 'react-redux';
import PhotoList from 'features/Photo/components/PhotoList';
import { removePhoto } from 'features/Photo/photoSlice';

MainPage.propTypes = {};

function MainPage(props) {
  const photos = useSelector(state => state.photos);
  const history = useHistory();
  const dispatch = useDispatch();

  const handlePhotoEditCLick = (photo) => {
    console.log('photo', photo);
    const editPhotoUrl = `/photos/${photo.id}`;
    history.push(editPhotoUrl);
  }

  const handlePhotoRemoveClick = (photo) => {
    const removePhotoId = photo.id;
    const action = removePhoto(removePhotoId);
    console.log("action", action);
    dispatch(action);

  }

  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />
      <Container className="text-center">
        <Link to="/photos/add">Add new photo</Link>
      </Container>
      <PhotoList
        photoList={photos}
        onPhotoEditCLick={handlePhotoEditCLick}
        onPhotoRemoveClick={handlePhotoRemoveClick}
      />
    </div>
  );
}

export default MainPage;