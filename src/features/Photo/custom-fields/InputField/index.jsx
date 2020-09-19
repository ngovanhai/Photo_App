import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input, FormGroup, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';

InputField.propTypes = {
    field : PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    lable:PropTypes.string,
    placeholder:PropTypes.string,
    disable: PropTypes.bool,
};
InputField.defaultProps = {
    type: 'text',
    lable: '',
    placeholder: '',
    disabled: false,
}

function InputField(props) {
    const {
        field,form,
        type, label, placeholder, disabled,
    } = props;
    const {name} = field;
    //trong 1 field phải có đủ 4 cái {name, value ,onChange,OnBlur}
    const { errors , touched } = form;
    const showError = errors[name] && touched[name]
    return (
        <FormGroup>
            <Label for={name}>{label}</Label>
            <Input 
            id={name}
            {...field}

            type={type}
            disabled={disabled}
            placeholder={placeholder}
            
            invalid={showError}
            />
            <ErrorMessage name = {name} component={FormFeedback} />
      </FormGroup>
      
    );
}

export default InputField;