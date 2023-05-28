import { Typography } from '@/components/common/Typography'
import useAuthentication from '@/components/hooks/useAuthentication'
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
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isLoggedIn = false


    useEffect(() => {
        const fetchAuthStatus = async () => {
            // const isLoggedIn = useAuthentication();
            // setIsLoggedIn(isLoggedIn);
            setIsLoading(false);
        };

        fetchAuthStatus();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isLoggedIn) {
        router.push('/login'); // Redirect to login page if not authenticated
        return null;
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