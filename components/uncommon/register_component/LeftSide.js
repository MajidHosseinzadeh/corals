import { Button } from '@/components/common/Button'
import Input, { InputContainer, InputField, InputLabel } from '@/components/common/Input'
import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineGoogle } from 'react-icons/ai'
import { useFormik } from 'formik'
import { schema } from '@/schemas'

const LeftContainer = styled.div`
    width: 24rem;
    max-width: 24rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
`

const TitleFlex = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
`

const Welcome = styled.h1`
    font-size: 40px;
    color: #E1BEA5;

`
const Create = styled.h3`
    font-size: 14px;
    color: #070707;
`

const InputFlex = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 2rem;
`

const Form = styled.form`
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

const Error = styled.p`
  color: red;
  font-size: 14px;
`


const onSubmit = () => {

}


const LeftSide = () => {
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



    const { handleBlur, handleChange, values, handleSubmit, errors, touched } = useFormik({
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
                        {errors.username && touched.username && <Error>{errors.email}</Error>}
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
                        {errors.username && touched.username && <Error>{errors.password}</Error>}
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
                            id="cpassword"
                        />
                        {errors.username && touched.username && <Error>{errors.confirmPassword}</Error>}
                        <InputLabel htmlFor="cpassword" isVisible={labelVisibility4}>Confirm Password</InputLabel>
                    </InputContainer>
                </InputFlex>
                <Button name='CREATE ACCOUNT' size='18rem' font="12px" background="#E1BEA5" color="#070707" border="#E1BEA5" hoverb="white" hoverc="#070707" hoverborder="#070707" />
                <Cont>
                    <Button type='submit' id="buttn" name='CREATE ACCOUNT' size='18rem' font="12px" background="#E1BEA5" color="#070707" border="#E1BEA5" hoverb="white" hoverc="#070707" hoverborder="#070707" />
                    <Labl htmlFor='buttn'>
                        <Google />
                    </Labl>
                </Cont>
            </Form>
        </LeftContainer>
    )
}

export default LeftSide