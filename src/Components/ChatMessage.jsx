import React from 'react'
import { UserIcon } from '../utils/constant'

const ChatMessage = ({name, message}) => {

  return (
    <div className='flex p-2 items-center'>
        <img src={UserIcon} alt='UserIcon' className='h-8'/>
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage;