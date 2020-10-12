import React from 'react'
import { useHistory } from 'react-router-dom'
import {SplashContainer, LogoRappi} from './styled-splash'
import LogoRappi4 from './logo-future-eats.svg'

function SplashScreen() {
    const history = useHistory()

    setTimeout(() => {
        history.push("/Login")
    }, 2000)

    return (
        <SplashContainer>
            <LogoRappi src={LogoRappi4} />
        </SplashContainer>
    )
}

export default SplashScreen;