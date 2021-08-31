import { useState } from 'react';

import SelectInput from '../select-input/select-input';

import { IFormProps } from './types';
import { Form, Fieldset } from './styles'
import { submitEvent } from '../button/types';
import Button from '../button/button'


const SelectForm: React.FC<IFormProps> = ({ selectInputData, submitCallback }) => {
    const [formData, setFormData] = useState(new Map())

    const selectChangeHandler = (name: string, value: string) => {
        const formDataMap = new Map(formData)

        value === 'reset'
            ? formDataMap.clear()
            : formDataMap.set(name, value)
        console.log('select change', value, formDataMap)
        
        setFormData(formDataMap)
    }

    const formSubmitHandler = (evt: submitEvent) => {
        evt.preventDefault()
        const newFormData = Array.from(formData, ([name, value]) => ({ name, value }))
        submitCallback(newFormData)
    }

    return (
        <Form>
            <Fieldset>
                {selectInputData.map((input, index) => <SelectInput key={index} name={input.name} options={input.options} callback={selectChangeHandler} />)}
            </Fieldset>
            < Button title={'Применить'} type={'submit'} clickHandler={formSubmitHandler} />
        </Form>
    );
}

export default SelectForm