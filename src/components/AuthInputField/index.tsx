import React from 'react'

type AuthInputFieldProps = {
  type: string
  name: string
  label: string
  dataTestID: string
  id?: string
  className?: string
}

const AuthInputField = ({ type, name, id, className, label, dataTestID }: AuthInputFieldProps): JSX.Element => {
  return (
    <div className="form-input-group">
      <label className="form-input-group__label" htmlFor={id}>
        {label}
      </label>
      <input type={type} name={name} id={id} className={className} data-test-id={dataTestID} />
    </div>
  )
}

export default AuthInputField
