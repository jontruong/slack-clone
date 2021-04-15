import React from 'react'
import styled from 'styled-components';

function ChatMessage() {
    return (
        <Container>
            <UserAvatar>
                <img src="https://randomuser.me/api/portraits/women/65.jpg" />
            </UserAvatar>
            <MessageContent>
                <Name>
                    Jon
                    <span> 4/14/2021 9:18 PM</span>
                </Name>
                <Text>
                    This is test
                </Text>
            </MessageContent>
            
        </Container>
    )
}

export default ChatMessage;

const Container = styled.div`
padding: 8px 20px;
display: flex;`

const UserAvatar = styled.div`
width:36px;
height: 36px;
border-radius: 2px;
overflow: hidden;
margin-right:8px;

img {
    width:100%;
}`

const MessageContent = styled.div`
display:flex;
flex-direction: column;`

const Name = styled.span`
font-weight: 900`

const Text = styled.span``