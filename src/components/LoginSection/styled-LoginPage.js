import styled from 'styled-components'
import { Typography, Link } from '@material-ui/core'

export const FormContainer = styled.form `
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin: 0px 16px;
`

export const LogoRappi = styled.img `
   box-sizing: border-box;
   margin: 88px 128px 16px 128px;
`

export const Text = styled(Typography) `
     text-align: center;
    `

export const Container = styled.div `
    box-sizing: border-box;
    max-width: 360px;
    
`
export const LinkCadastro = styled(Link) `
    padding-top: 16px;
    text-align: center;
`