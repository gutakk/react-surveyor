import React from 'react'

type FormButtonProps = {
  label: string
}

const FormButton = ({ label }: FormButtonProps): JSX.Element => {
  return <button type="submit">{label}</button>
}

export default FormButton
