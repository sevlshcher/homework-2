import React from 'react'
import Message from '../Message'
import './Chat.css'

class Chat extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            messages: [],
            messageInput: ''
        }
        this.changeInputMessage = this.changeInputMessage.bind(this)
        this.sendMessageOnEnter = this.sendMessageOnEnter.bind(this)
    }
    changeInputMessage (e) {
        this.setState ({messageInput: e.target.value})
    }

    sendMessageOnEnter (e) {
        if (e.key === 'Enter'){
            const newMessage = {
                word: this.state.messageInput,
                id: Date.now()
            }
            this.setState (state => ({
                messages: state.messages.concat(newMessage),
                messageInput: ''
            }))
        }
    }

    render () {
        return (
            <div className="chat">
                <div className="message-list">
                    <div className="messages">
                        {this.state.messages.map(message => (
                            <Message key={message.id} text={message.word}/>
                        ))}
                    </div>
                </div>
                <input
                    type="text"
                    className="input-message"
                    value={this.state.messageInput}
                    onChange={this.changeInputMessage}
                    onKeyPress={this.sendMessageOnEnter}
                    />
            </div>
        )
    }
}

export default Chat