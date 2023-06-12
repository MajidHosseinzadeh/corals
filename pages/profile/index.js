import { Typography } from '@/components/common/Typography'
import Navbar from '@/components/rare/navbar/Navbar'
import Orders from '@/components/uncommon/profile_components/Orders'
import Profile from '@/components/uncommon/profile_components/Profile'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
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
            <Navbar />
            <Typography>Profile</Typography>
            <ProfilePage>
                <Profile />
                <Orders />
            </ProfilePage>
        </ProfileContainer>
    )


}

export default index