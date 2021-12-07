import React, { useState } from 'react'
import { Button } from './ButtonElements'
import {
  HeroContainer,
  HeroBg,
  VidoeBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements'
import Video from './videos/video.mp4'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Index = () => {
  const [hover, setHover] = React.useState(false)
  const onHover = () => {
    setHover(!hover)
  }
  function refreshPage() {
    window.location.reload(false)
  }

  return (
    <>
      <HeroContainer id='home'>
        <HeroBg>
          <VidoeBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>Addis Software Test Project </HeroH1>
          <HeroP>
            Addis Software is a software development company that works closely
            with Swedish developers from Sweetopia to fulfill high customer
            satisfaction.
          </HeroP>
          <HeroBtnWrapper>
            <Button
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary='true'
              dark='true'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              onClick={refreshPage}
            >
              <Router>
                <Link to='/employee'>
                  Visite Employee
                  {hover ? <ArrowForward /> : <ArrowRight />}
                </Link>
              </Router>
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  )
}

export default Index
