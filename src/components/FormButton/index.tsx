import React from 'react'

type FormButtonProps = {
  label: string
}

const FormButton = ({ label }: FormButtonProps): JSX.Element => {
  return (
    <button className="form-button" type="submit" data-test-id="formButton">
      {label}
    </button>
  )
}

export default FormButton
