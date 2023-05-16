import { Typography } from '@/components/common/Typography'
import Navbar from '@/components/rare/navbar/Navbar'
import Orders from '@/components/uncommon/profile_components/Orders'
import Profile from '@/components/uncommon/profile_components/Profile'
import React from 'react'
import styled from 'styled-components'

const ProfileContainer = styled.div`
    width: 100%;

`
const ProfilePage = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    left: 0;
    right: 0;
    margin: 100px 0px 0px 0px;
`


const index = () => {
    return (
        <ProfileContainer>
            <Navbar/>
            <Typography>Profile</Typography>
            <ProfilePage>
                <Profile />
                <Orders />
            </ProfilePage>
        </ProfileContainer>
    )
}

export default index