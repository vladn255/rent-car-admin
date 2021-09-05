import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SelectInput from '../select-input/select-input';
import Button from '../button/button'
import { submitEvent } from '../button/types';

import { IFormProps } from './types';
import { Form, Fieldset } from './styles'
import { setOrdersFormData } from '../../store/slices/orders/orders-slice';
import { RootState } from '../../store/store';


const SelectForm: React.FC<IFormProps> = ({ selectInputData, submitCallback }) => {
    const dispatch = useDispatch()
    const formDataObjectsArray = useSelector((state: RootState) => state.orders.formData)

    let formDataArraysArray: [string, string][]
    formDataObjectsArray.length > 0
        ? formDataArraysArray = formDataObjectsArray.map((item) => [item.name, item.value])
        : formDataArraysArray = []

    const [formData, setFormData] = useState(new Map(formDataArraysArray))

    const selectChangeHandler = (name: string, value: string) => {
        const formDataMap = new Map(formData)

        value === 'reset'
            ? formDataMap.delete(name)
            : formDataMap.set(name, value)

        setFormData(formDataMap)
        dispatch(setOrdersFormData(Array.from(formDataMap, ([name, value]) => ({ name, value }))))
    }

    const formSubmitHandler = (evt: submitEvent) => {
        evt.preventDefault()
        const newFormData = Array.from(formData, ([name, value]) => ({ name, value }))
        submitCallback(newFormData)
    }

    const getCurrentInputValue = (inputName: string) => {
        if (typeof inputName === 'string') {
            return formData.has(inputName)
                ? formData.get(inputName)
                : ''
        }
    }

    return (
        <Form>
            <Fieldset>
                {selectInputData.map((input, index) => <SelectInput key={index} name={input.name} value={getCurrentInputValue(input.name)} options={input.options} callback={selectChangeHandler} />)}
            </Fieldset>
            < Button title={'Применить'} type={'submit'} clickHandler={formSubmitHandler} />
        </Form>
    );
}

export default SelectForm