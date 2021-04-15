import React from 'react'
import styled from 'styled-components';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from '../components/ChatInput';
import ChatMessage from '../components/ChatMessage';

function Chat(props) {
    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                    Channel
                    </ChannelName>
                    <ChannelInfo>
                        Details
                    </ChannelInfo>
                </Channel>
                <ChannelDetails>
                    <div>
                        Details
                    </div>
                    <Info />
                </ChannelDetails>
            </Header>
            <MessageContainer>
                <ChatMessage/>
            </MessageContainer>
            <ChatInput>
                
            </ChatInput>
        </Container>
    )
}

export default Chat

const Container = styled.div`
display: grid;
grid-template-rows: 64px auto min-content;
`
const Header = styled.div`
padding-left:20px;
padding-right: 20px;
display: flex;
align-items: center;
border-bottom: 1px solid rgba(83, 39, 83, .13);
justify-content: space-between;`


const ChannelName = styled.div`
font-weight: 700;
`

const ChannelInfo = styled.div`
font-weight: 400;
color: #606060;
font-size: 13px;
margin-top: 8px;`

const Channel = styled.div``

const ChannelDetails = styled.div`
display:flex;
align-items: center;
color: #606060;

`
const Info = styled(InfoOutlinedIcon)`
margin-left: 10px;
`


const MessageContainer = styled.div`
`


