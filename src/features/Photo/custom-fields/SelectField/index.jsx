import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, FormFeedback } from 'reactstrap';
import Select from 'react-select';
import { ErrorMessage } from 'formik';

SelectField.propTypes = {
    field : PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    lable:PropTypes.string,
    placeholder:PropTypes.string,
    disable: PropTypes.bool,
    option:PropTypes.array
};

SelectField.defaultProps = {
    type: 'text',
    lable: '',
    placeholder: '',
    disabled: false,
    option: []
}

function SelectField(props) {
    const {
        field,form,options, label, placeholder, disabled,} = props;
    const {name , value } = field;

    const { errors , touched } = form;
    const showError = errors[name] && touched[name]

    const selectedOption = options.find(option => option.value === value)
    const handleSelectedOptionChange = (selectedOption) => {
        const selectedValues = selectedOption ? selectedOption.value : selectedOption;

        const changeEvent = {
            target: {
                name : name,
                value: selectedValues
            }
        }
        field.onChange(changeEvent);
    }
    return (
        <FormGroup>
       {label && <Label for={name}>{label}</Label>}
        <Select
          id={name}
          {...field}
          value={selectedOption}
          onChange={handleSelectedOptionChange}


          placeholder={placeholder}
          options={options}
          disabled={disabled}

          className={showError ? 'is-invalid ': ''}
        />
          <ErrorMessage name = {name} component={FormFeedback} />
      </FormGroup>
    );
}

export default SelectField;