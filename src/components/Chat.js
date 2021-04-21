import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from '../components/ChatInput';
import ChatMessage from '../components/ChatMessage';
import db from '../firebase';
import { useParams } from 'react-router-dom';
import firebase from '../firebase';

function Chat({ user }) {

    let { channelId } = useParams();
    const [channel, setChannel] = useState();
    const [messages, setMessages] = useState([]);

    const getMessages = () => {
        db.collection('rooms')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) => {
            let messages = snapshot.docs.map((doc) =>
                doc.data());

                setMessages(messages);
        })
    }

    const sendMessage = (text) => {
        if(channelId){
            let payload = {
                text:text,
                timestamp: firebase.firestore.timestamp.now,
                user:user.name,
                userImage:user.photo,
            }
        }
    }

    const getChannel = () => {
        db.collection('rooms')
        .doc(channelId)
        .onSnapshot((snapshot) => {
            setChannel(snapshot.data())
        })
    }

    useEffect(()=>{
            getChannel();
            getMessages();
    }, 
    [channelId])

    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                    # {channel && channel.name}
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
                {
                    messages.length > 0 && 
                    messages.map((data, index) => (
                        <ChatMessage
                        text={data.text}
                        name={data.user}
                        image={data.userImage}
                        time={data.timestamp}/>
                        ))
                }
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


