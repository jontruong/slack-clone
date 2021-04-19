import React from 'react'
import styled from 'styled-components';

function Login() {
    return (
        <Container>
            <Content>
                <SlackImg src="http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png"/>
                <h1>Sign in Slack</h1>
                <SignInButton>
                    Sign in with Google
                </SignInButton>
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
width:100%;
height: 100vh;
background: #f8f8f8;
display:flex;
justify-content: center;
align-items: center;`


const Content = styled.div `
background: white;
padding:100px;
border-radius: 5px;
box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;



`

const SlackImg = styled.img`
height: 100px;`

const SignInButton = styled.button`
margin-top: 50px;
background-color: #0a8d48;
`

