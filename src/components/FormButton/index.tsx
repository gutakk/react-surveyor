import React from 'react'

type FormButtonProps = {
  label: string
}

const FormButton = ({ label }: FormButtonProps): JSX.Element => {
  return (
    <button className="form-button" type="submit" data-testid="formButton">
      {label}
    </button>
  )
}

export default FormButton
