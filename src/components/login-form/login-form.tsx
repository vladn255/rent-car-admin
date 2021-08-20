import { Formik } from "formik"
import React, { useEffect } from "react"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"

import { ILoginFormValues, ILoginInputProps } from "./types"
import { RootState } from '../../store/store'

import TextInput from "../text-input/text-input"
import Button from "../button/button"
import { authorize } from "../../store/slices/auth-slice/auth-slice"
import { RoutePath } from "../../const"


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
    const authorizationStatus = useSelector((state: RootState) => state.auth.authorized)

    useEffect(() => {
        // do nothing
    }, [loadingErrorStatus, authorizationStatus])

    const initialValues: ILoginFormValues = {
        email: '',
        password: ''
    }

    const submitHandler = () => {
        dispatch(authorize())
    }

    const clickHandler = () => {
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
                <fieldset className="login-form">
                    <legend className="login-form__legend">Вход</legend>
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
                    <div className="login-form__buttons-wrapper">
                        <Button
                            title='Запросить доступ'
                            type="submit"
                            addClasses="login-form__access-button"
                            isDisabled={authorizationStatus}
                            clickHandler={() => submitHandler()}
                        />

                        <Button
                            title='Войти'
                            type='button'
                            addClasses='login-form__submit-button'
                            isDisabled={!isValid || !dirty || !authorizationStatus}
                            clickHandler={() => clickHandler()}
                        />
                    </div>
                    {loadingErrorStatus && <p className="login-form__error">Ошибка авторизации</p>}
                </fieldset>
            )}
        </Formik>
    )
}

export default LoginForm