import { Button } from '@/components/common/Button';
import { InputContainer, InputField, InputLabel } from '@/components/common/Input'
import { SLink } from '@/components/common/Link';
import { Typography } from '@/components/common/Typography';
import { Error, InputFlex } from '@/components/uncommon/register_component/FormContainer'
import { loginSchema } from '@/schemas';
import { useFormik } from 'formik';
import Image from 'next/image';
import React, { useState } from 'react'
import styled from 'styled-components';

const LoginPage = styled.div`
  width: 50vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  & .img{
    width: 100%;
    height: 100%;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
  }
`

export const LoginForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 40%;
    left: 40%;
    z-index: 999;
`

const onSubmit = async (actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
};

const index = () => {

    const [usernameVisibility, setUsernameVisibility] = useState(false);
    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const handleUsername = () => {
        setUsernameVisibility(true);
    };

    const handlePassword = () => {
        setPasswordVisibility(true);
    };


    const { handleBlur, handleChange, values, handleSubmit, errors, touched, isSubmitting } = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit,
    })



    return (
        <LoginPage>
            <LoginForm autoComplete='off' onSubmit={handleSubmit}>
                <InputFlex>
                    <InputContainer>
                        <InputField
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            id="username"
                            onInput={handleUsername}
                            className={errors.username && touched.username ? "input-error" : ""}
                        />
                        {errors.username && touched.username && <Error>{errors.username}</Error>}
                        <InputLabel htmlFor="username" isVisible={usernameVisibility}>Username</InputLabel>
                    </InputContainer>

                    <InputContainer>
                        <InputField
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="password"
                            onInput={handlePassword}
                            className={errors.password && touched.password ? "input-error" : ""}
                            id="password"
                        />
                        {errors.password && touched.password && <Error>{errors.password}</Error>}
                        <InputLabel htmlFor="password" isVisible={passwordVisibility}>Password</InputLabel>
                    </InputContainer>
                </InputFlex>
                <Button type="submit" disabled={isSubmitting} name='Login' size='14rem' font="12px" background="#E1BEA5" color="#070707" border="#E1BEA5" hoverb="white" hoverc="#070707" hoverborder="#070707" />
                <SLink href="/register" margin="20px 0px 0px 0px">
                        forgot password ?
                </SLink>
            </LoginForm>
            <Image src='/footer.jpg' width={1618} height={1080} className='img' alt='background' />

        </LoginPage>
    )
}

export default index