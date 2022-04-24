import React from 'react';
import { ChannelList } from './ChannelList';
// import './chat.scss';
import { MessagesPanel } from './MessagesPanel';
import socketClient from "socket.io-client";
import SideBarList from '../Dashboard/SideBarList';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';


const SERVER = "http://127.0.0.1:8081";
export class Chat extends React.Component {

    state = {
        channels: null,
        socket: null,
        channel: null
    }
    socket;
    componentDidMount() {
        this.loadChannels();
        this.configureSocket();
    }

    configureSocket = () => {
        var socket = socketClient(SERVER);
        socket.on('connection', () => {
            if (this.state.channel) {
                this.handleChannelSelect(this.state.channel.id);
            }
        });
        socket.on('channel', channel => {
            
            let channels = this.state.channels;
            channels.forEach(c => {
                if (c.id === channel.id) {
                    c.participants = channel.participants;
                }
            });
            this.setState({ channels });
        });
        socket.on('message', message => {
            console.log('this is the value of message: ', message)
            let channels = this.state.channels
            channels.forEach(c => {
                if (c.id === message.channel_id) {
                    if (!c.messages) {
                        c.messages = [message];
                    } else {
                        c.messages.push(message);
                    }
                }
            });
            this.setState({ channels });
        });
        this.socket = socket;
    }

    loadChannels = async () => {
        fetch('http://localhost:8081/getChannels').then(async response => {
            let data = await response.json();
            this.setState({ channels: data.channels });
        })
    }

    handleChannelSelect = id => {
        let channel = this.state.channels.find(c => {
            return c.id === id;
        });
        this.setState({ channel });
        this.socket.emit('channel-join', id, ack => {
        });
    }


    
    handleSendMessage = (channel_id, text) => {
        const user=JSON.parse(localStorage.getItem('username'));
        
        this.socket.emit('send-message', { channel_id, text, senderName: this.socket.id, user: user.name, img: user.img , id: Date.now() });
    }

    
    render() {

        return (
        <div>
            <SideBarList mode={this.props.mode} setMode={this.props.setMode}/>
            <Grid  container direction={"row"}  ml={3} spacing={2} columns={12}>
                <Grid item xs={6} >
                    <ChannelList channels={this.state.channels} onSelectChannel={this.handleChannelSelect} />
                </Grid>
                <Grid item xs={6} direction={"column"} style={{maxHeight: '80.5vh', overflow: 'hidden'}}>
                    <MessagesPanel onSendMessage={this.handleSendMessage} channel={this.state.channel} />
                </Grid>
            </Grid>
        </div>
        );
    }
}