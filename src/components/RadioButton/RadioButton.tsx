import * as React from "react";
import './RadioButton.scss'
import classNames from 'classnames'

type typeValue = string | number | boolean

interface IOption {
  label: typeValue
  value: typeValue
}

interface IPropsRadioButton {
  options: IOption[]
  value: IOption['value']
  onChange: (option: IOption) => void
}

export default function RadioButton({options, onChange, value}: IPropsRadioButton) {
  const classNameRadioButton = `RadioButton`
  const classNameRadioButtonItem = `${classNameRadioButton}-item`
  const classNameRadioButtonItemSelected = `${classNameRadioButtonItem}-selected`
  return (
    <div className={classNameRadioButton}>
      {options.map(option => (
        <div
          className={classNames(classNameRadioButtonItem, {
            [classNameRadioButtonItemSelected]: value === option.value
          })}
          onClick={() => onChange(option)}
        >
          {option.label}
        </div>
      ))}
    </div>
  )
}
