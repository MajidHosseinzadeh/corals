import { Typography } from '@/components/common/Typography'
import { devices } from '@/components/constants/devices'
import Orders from '@/components/uncommon/profile_components/Orders'
import Profile from '@/components/uncommon/profile_components/Profile'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const ProfileContainer = styled.div`
    width: 100%;
    margin-top: 20%;
`
const ProfilePage = styled.div`
    display: flex;
    flex-direction: row;
    margin: 100px 0px 0px 0px;
    @media ${devices.lg} {
        flex-direction: column;
        align-items: center;
        margin: 30px 0px 0px 0px;
    }
`


const index = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAuthStatus = async () => {
            const encryptedToken = localStorage.getItem('accessToken');
            if (!encryptedToken) {
                router.push('/login');
            }
            else {
                setIsLoading(false)
            }
        };
        fetchAuthStatus();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <ProfileContainer>
            <Typography>Profile</Typography>
            <ProfilePage>
                <Profile />
                <Orders />
            </ProfilePage>
        </ProfileContainer>
    )


}

export default index