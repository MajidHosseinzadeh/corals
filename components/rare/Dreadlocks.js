import { Button } from '@/components/common/Button'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { devices } from '../constants/devices'

const Sec = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #070707;
  width: 100%;
  height: auto;
  margin-top: 10%;
  & .img{
    width: 40%;
    height: auto;
  }
  @media ${devices.lg} {
    margin-top: 20%;
  }
  @media ${devices.md} {
    margin-top: 25%;
  }

  @media ${devices.sm} {
    flex-direction: column;
    margin-top: 40%;
    & .img{
        width: 60%;
        height: auto;
      }
  }
`
const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 45%;
    @media ${devices.sm} {
        width: 60%;
        justify-content: center;
        align-items: center;
      }
    
`

const Head = styled.h1`
    color: #E1BEA5;
    font-size: 4rem;
    @media ${devices.lg} {
        font-size: 3.5rem;
    }
    @media ${devices.md} {
        font-size: 3rem;
    }
    @media ${devices.sm} {
        font-size: 2rem;
        text-align: center;

    }
`

const Paragraph = styled.p`
    color: white;
    font-size: 1.4rem;
    @media ${devices.lg} {
        font-size: 1.1rem;
    }
    @media ${devices.md} {
        font-size: 0.9rem;
    }
    @media ${devices.sm} {
        text-align: center;
    }
`
const Article = styled.article`
    
`

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    flex-decoration: column;

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
                    <Button className='butt' name='Services' font="18px" lgfont="15px" mdfont="12px" smfont="11px" size="8rem" lgsize="7rem" mdsize="6rem"  background='#070707' color="white" border="white" hoverb="white" hoverc="#070707" hoverborder="#070707" />
                    <Button className='butt' name='Book Now' font="18px" lgfont="15px" mdfont="12px" smfont="11px" size="8rem" lgsize="7rem" mdsize="6rem"  background="#E1BEA5" color="#070707" border="#E1BEA5" hoverb="white" hoverc="#070707" hoverborder="#070707" />
                </ButtonContainer>
            </Right>
            <Image alt='s' className='img' src='/cosmetic.jpg' width={820} height={1080} />
        </Sec>
    )
}

export default Dreadlocks