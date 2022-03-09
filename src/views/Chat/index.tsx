import React from 'react'

import { MessageCard } from './components'

import { ChatContainerStyle, MessagesListStyle } from './styles'

import avatar from 'assets/avatars/image-amyrobson.png'
import { NewMessageForm } from './components/MessageCard/components/NewMessageForm'

const messages = [
  {
    id: 1,
    profile: {
      image: avatar,
      name: 'amyrobson',
      postedAt: '1 month ago',
    },
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae ab eum explicabo deleniti magnam nostrum ipsa, debitis iste necessitatibus nobis accusantium? Beatae quisquam consequatur eligendi, architecto alias itaque vel tempore.',
  },
  {
    id: 2,
    profile: {
      image: avatar,
      name: 'amyrobson',
      postedAt: '1 month ago',
    },
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae ab eum explicabo deleniti magnam nostrum ipsa, debitis iste necessitatibus nobis accusantium? Beatae quisquam consequatur eligendi, architecto alias itaque vel tempore.',
  },
  {
    id: 3,
    profile: {
      image: avatar,
      name: 'amyrobson',
      postedAt: '1 month ago',
    },
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae ab eum explicabo deleniti magnam nostrum ipsa, debitis iste necessitatibus nobis accusantium? Beatae quisquam consequatur eligendi, architecto alias itaque vel tempore.',
  }
]

export const Chat: React.FC = function () {
  return (
    <ChatContainerStyle>
      <MessagesListStyle>
        {messages.map((message) => (
          <li key={message.id}>
            <MessageCard message={message} />
          </li>
        ))}
      </MessagesListStyle>
      <NewMessageForm />
    </ChatContainerStyle>
  )
}
