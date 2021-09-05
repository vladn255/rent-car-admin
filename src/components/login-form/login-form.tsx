import { Formik } from "formik"
import React from "react"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"

import { ILoginFormValues, ILoginInputProps } from "./types"
import { Fieldset, Legend, ButtonWrapper, AccessButton, ErrorMessage } from "./styles"
import { RootState } from '../../store/store'
import { authorize } from "../../store/slices/auth-slice/auth-slice"
import { RoutePath } from "../../globals/const"

import TextInput from "../text-input/text-input"
import Button from "../button/button"



const EmailProps: ILoginInputProps = {
    name: 'email',
    type: 'email',
    label: 'Почта',
    placeholder: 'Введите свой e-mail',
    errorText: 'Введите e-mail',
    autofocus: true
}

const PasswordProps: ILoginInputProps = {
    name: 'password',
    type: 'password',
    label: 'Пароль',
    placeholder: 'Введите свой пароль',
    errorText: 'Введите пароль'
}

const LoginSchema = yup.object().shape({
    email: yup.string().email().required("Введите e-mail"),
    password: yup.string().required("Введите пароль")
})


const LoginForm: React.FC = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const loadingErrorStatus = useSelector((state: RootState) => state.auth.loadingError)

    const initialValues: ILoginFormValues = {
        email: '',
        password: ''
    }

    const submitHandler = async () => {
        await dispatch(authorize())
        history.push(RoutePath.MAIN)
    }

    return (
        <Formik
            initialValues={initialValues}
            validateOnBlur
            onSubmit={submitHandler}
            validationSchema={LoginSchema}
        >
            {({ values, errors, touched, handleChange, handleBlur, isValid, dirty }) => (
                <Fieldset>
                    <Legend>Вход</Legend>
                    <TextInput
                        name={EmailProps.name}
                        type={EmailProps.type}
                        label={EmailProps.label}
                        placeholder={EmailProps.placeholder}
                        value={values.email}
                        auotofocus={EmailProps.autofocus}
                        isError={touched.email && errors.email}
                        errorText={EmailProps.errorText}
                        changeHandler={handleChange}
                        blurHandler={handleBlur}
                    />
                    <TextInput
                        name={PasswordProps.name}
                        type={PasswordProps.type}
                        label={PasswordProps.label}
                        placeholder={PasswordProps.placeholder}
                        value={values.password}
                        isError={touched.password && errors.password}
                        errorText={PasswordProps.errorText}
                        changeHandler={handleChange}
                        blurHandler={handleBlur}
                    />
                    <ButtonWrapper>
                        <AccessButton type="button">Запросить доступ</AccessButton>

                        <Button
                            title='Войти'
                            type='button'
                            isDisabled={!isValid || !dirty}
                            clickHandler={() => submitHandler()}
                        />
                    </ButtonWrapper>
                    {loadingErrorStatus && <ErrorMessage>Ошибка авторизации</ErrorMessage>}
                </Fieldset>
            )}
        </Formik>
    )
}

export default LoginForm