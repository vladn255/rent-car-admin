import { ChangeEvent } from 'react'
import { Select } from './styles'
import { ISelectInput } from './types'


const SelectInput: React.FC<ISelectInput> = ({ name, options, callback }) => {
    const changeHandler = (evt: ChangeEvent<HTMLSelectElement>) => {
        callback(name, evt.target.value)
    }

    return (
        <Select name={name} onChange={changeHandler}>
            {options.map((option, id) => <option key={id} value={option.value} data-name={option.value}>{option.text}</option>)}
        </Select>
    )
}

export default SelectInput