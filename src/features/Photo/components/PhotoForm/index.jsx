import PropTypes from 'prop-types';
import React from 'react';
import { Button, FormGroup, Spinner } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import { Formik, Form, FastField } from 'formik';
import InputField from 'features/Photo/custom-fields/InputField';
import SelectField from 'features/Photo/custom-fields/SelectField';
import RandomPhotoField from 'features/Photo/custom-fields/RandomPhotoField';
import * as Yup from 'yup';

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
}

function PhotoForm(props) {
  const { initialValues, isAddMode } = props;


  // npm i --save react-select
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('this field is required'),


    categoryId: Yup.number().required('this field is required').nullable(),


    photo: Yup.string().when('categoryId', {
      is: 1,
      then: Yup.string().required('this field is required'),
      otherwise: Yup.string().notRequired(),
    })

    // khi categoryId == 1 thì sẽ hiện 'this field is required'
    // còn không khi khác 1 sẽ không hiện nữa

  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >

      {formikProps => {
        // xu li  1 cai gi do
        const { isSubmitting } = formikProps;
        // khi đang submit thì sõ có thuộc tính là isSubmitting

        // console.log({ values, errors, touched });
        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              //props của fastField
              label="Title"
              placeholder="Eg : Wow nature ...."
            //Props của mình tự tạo
            />
            <FastField
              name="categoryId"
              component={SelectField}
              //props của fastField
              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            //Props của mình tự tạo
            />
            <FastField
              name="photo"
              component={RandomPhotoField}
              label="photo"
            />
            <FormGroup>
              <Button
                type='submit'
                color={isAddMode ? 'primary' : 'success'}>
                {isSubmitting && <Spinner size="sm"></Spinner>}
                {isAddMode ? 'Add to album ' : 'update your photo'}
              </Button>
            </FormGroup>
          </Form>
        )
      }}

    </Formik>
  );
}

export default PhotoForm;