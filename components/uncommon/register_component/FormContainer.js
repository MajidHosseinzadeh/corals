import { Button } from '@/components/common/Button'
import Input, { InputContainer, InputField, InputLabel } from '@/components/common/Input'
import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineGoogle } from 'react-icons/ai'
import { useFormik } from 'formik'
import { schema } from '@/schemas'
import { devices } from '@/components/constants/devices'

const LeftContainer = styled.div`
    width: 50vw;
    height: 50rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: black
    @media ${devices.lg} {
        position: absolute; 
        z-index: 999;
    }
`

const TitleFlex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`

const Welcome = styled.h1`
    font-size: 40px;
    color: #E1BEA5;
    @media ${devices.lg} {
        z-index: 999;
    }

`
const Create = styled.h3`
    font-size: 12px;
    color: white;
    @media ${devices.lg} {
        z-index: 999;
    }
`

export const InputFlex = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 2rem;
`

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Google = styled(AiOutlineGoogle)`
    width: 1.5rem;
    height: 1.5rem;
`

const Labl = styled.label`
    position: absolute;
    pointer-events: none;
    top: 5px;
    left: 10px;

`
const Cont = styled.div`
  position: relative;
  &{
    margin: 25px 0;
  }
`;

export const Error = styled.p`
  color: #fecf6d;
  font-size: 10px;
`


const onSubmit = async (actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
};

const FormContainer = () => {

    const [labelVisibility1, setLabelVisibility1] = useState(false);
    const [labelVisibility2, setLabelVisibility2] = useState(false);
    const [labelVisibility3, setLabelVisibility3] = useState(false);
    const [labelVisibility4, setLabelVisibility4] = useState(false);

    const handleInput1 = () => {
        setLabelVisibility1(true);
    };
    const handleInput2 = () => {
        setLabelVisibility2(true);
    };

    const handleInput3 = () => {
        setLabelVisibility3(true);
    };

    const handleInput4 = () => {
        setLabelVisibility4(true);
    };



    const { handleBlur, handleChange, values, handleSubmit, errors, touched, isSubmitting } = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: schema,
        onSubmit,
    })




    return (
        <LeftContainer>
            <TitleFlex>
                <Welcome >
                    Welcome
                </Welcome>
                <Create >
                    Create your account and start changing your life.
                </Create>
            </TitleFlex>
            <Form autoComplete='off' onSubmit={handleSubmit}>
                <InputFlex>
                    <InputContainer>
                        <InputField
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            id="username"
                            onInput={handleInput1}
                            className={errors.username && touched.username ? "input-error" : ""}
                        />
                        {errors.username && touched.username && <Error>{errors.username}</Error>}
                        <InputLabel htmlFor="username" isVisible={labelVisibility1}>Username</InputLabel>
                    </InputContainer>
                    <InputContainer>
                        <InputField
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="email"
                            id="email"
                            onInput={handleInput2}
                            className={errors.email && touched.email ? "input-error" : ""}
                        />
                        {errors.email && touched.email && <Error>{errors.email}</Error>}
                        <InputLabel htmlFor="email" isVisible={labelVisibility2}>Email</InputLabel>
                    </InputContainer>
                    <InputContainer>
                        <InputField
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="password"
                            onInput={handleInput3}
                            className={errors.password && touched.password ? "input-error" : ""}
                            id="password"
                        />
                        {errors.password && touched.password && <Error>{errors.password}</Error>}
                        <InputLabel htmlFor="password" isVisible={labelVisibility3}>Password</InputLabel>
                    </InputContainer>
                    <InputContainer>
                        <InputField
                            value={values.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="password"
                            onInput={handleInput4}
                            className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}
                            id="confirmPassword"
                        />
                        {errors.confirmPassword && touched.confirmPassword && <Error>{errors.confirmPassword}</Error>}
                        <InputLabel htmlFor="confirmPassword" isVisible={labelVisibility4}>Confirm Password</InputLabel>
                    </InputContainer>
                </InputFlex>
                <Button disabled={isSubmitting} type="submit" name='CREATE ACCOUNT' size='14rem' font="12px" background="#E1BEA5" color="#070707" border="#E1BEA5" hoverb="white" hoverc="#070707" hoverborder="#070707" />
                <Cont>
                    <Button disabled={isSubmitting} id="buttn" name='CREATE ACCOUNT' size='14rem' font="12px" background="#4091d7" color="#070707" border="#4091d7" hoverb="white" hoverc="#070707" hoverborder="#070707" />
                    <Labl htmlFor='buttn'>
                        <Google />
                    </Labl>
                </Cont>
            </Form>
        </LeftContainer>
    )
}

export default FormContainer