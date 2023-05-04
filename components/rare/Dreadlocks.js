import { Button } from '@/components/common/Button'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const Sec = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #070707;
  width: 100%;
  height: 50rem;
  & .img{
    width: 40%;
    height: auto;
  }
`
const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 45%;
`

const Head = styled.h1`
    color: #E1BEA5;
    font-size: 5rem;
`

const Paragraph = styled.p`
    color: white;
    font-size: 2rem;

`
const Article = styled.article`

`

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    flex-decoration: column;
    & .butt{

    }
`


const Dreadlocks = () => {

    return (
        <Sec>
            <Right>
                <Article>
                    <Head>
                        Dreadlocks &<br /> Weave Spa
                    </Head>
                    <Paragraph>
                        Simple Text. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Curabitur id suscipit ex.
                        Suspendisse rhoncus laoreet purus quis elementum.
                    </Paragraph>
                </Article>
                <ButtonContainer>
                    <Button className='butt' name='Services' font="18px" size="8rem" background='#070707' color="white" border="white" hoverb="white" hoverc="#070707" hoverborder="#070707" />
                    <Button className='butt' name='Book Now' font="18px" size="8rem" background="#E1BEA5" color="#070707" border="#E1BEA5" hoverb="white" hoverc="#070707" hoverborder="#070707" />
                </ButtonContainer>
            </Right>
            <Image alt='s' className='img' src='/cosmetic.jpg' width={820} height={1080} />
        </Sec>
    )
}

export default Dreadlocks