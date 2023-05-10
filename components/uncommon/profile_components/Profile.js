import React from 'react'
import styled from 'styled-components'
import { RiEdit2Line } from 'react-icons/ri'
import { Typography } from '@/components/common/Typography'
import { Button } from '@/components/common/Button'

const BaseInfoFlex = styled.div`
    width: 30%;    
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    border: ${({ border }) => border || ''};
    border-radius: 5%;
`
const BaseInfoEditFlex = styled.div`  
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin: 0 10px;
    width: 100%;
`

const EditIcon = styled(RiEdit2Line)`
    position: absolute;
    right: 20px;
    top: 30px;
    color: white;
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: all .5s ease;
    &:hover{
        scale: 1.2;
    }

`
const ButtonUl = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    list-style: none;
`
const HorizontalLine = styled.hr`
    text-align: center;
    width: 80%;
    color: white;
    transition: all 0.3s ease-in-out;
`

const ButtonLi = styled.li`
    position: relative;
    padding-left: 10px;
    margin: 10px 0px;
    width: 100%;
    &::before {
        font-size: 1.5rem;
        content: '|';
        position: absolute;
        left: 0;
        color: white;
    }
    
`



const Profile = () => {
    return (
        <BaseInfoFlex border='3px white solid'>
            <BaseInfoEditFlex>
                <BaseInfoFlex>
                    <Typography color='white' fontSize='18px' margin='10px 0px'>
                        Alireza Hamedi
                    </Typography>
                    <Typography color='white' fontSize='12px' margin='10px 0px'>
                        alireza19126@gmail.com
                    </Typography>
                </BaseInfoFlex>
                <EditIcon />
            </BaseInfoEditFlex>
            <HorizontalLine className='hr'></HorizontalLine>
            <ButtonUl>
                <ButtonLi>
                    <Button className='bttn' name='Edit profile' size='120px' font="10px" background="#E1BEA5" color="#070707" border="#E1BEA5" hoverb="white" hoverc="#070707" hoverborder="#070707" />
                </ButtonLi>
                <ButtonLi>
                    <Button className='bttn' name='Orders' size='120px' font="10px" background="#E1BEA5" color="#070707" border="#E1BEA5" hoverb="white" hoverc="#070707" hoverborder="#070707" />
                </ButtonLi>
                <ButtonLi>
                    <Button className='bttn' name='Addresses' size='120px' font="10px" background="#E1BEA5" color="#070707" border="#E1BEA5" hoverb="white" hoverc="#070707" hoverborder="#070707" />
                </ButtonLi>
                <ButtonLi>
                    <Button className='bttn' name='Logout' size='120px' font="10px" background="#E1BEA5" color="#070707" border="#E1BEA5" hoverb="white" hoverc="#070707" hoverborder="#070707" />
                </ButtonLi>
            </ButtonUl>
        </BaseInfoFlex>

    )
}

export default Profile