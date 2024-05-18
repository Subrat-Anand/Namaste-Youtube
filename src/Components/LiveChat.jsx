import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import ChatMessage from './ChatMessage'
import { generate } from '../utils/Helper'

const LiveChat = () => {

    const replying = useRef("")
    const data = replying.current.value
    const dispatch = useDispatch()
    const ChatMessages = useSelector((store)=>store.chat.Message)

    useEffect(() => {
        let i = setInterval(() => {
            dispatch(addMessage({name: generate(), message: "This is namaste react 🚀"}))
        }, 2000);
        return () => clearInterval(i);
    }, []);
    

  return (
    <>
        <div className='p-2 shadow-lg flex flex-col-reverse ml-2 overflow-y-auto border w-full border-black h-[500px] bg-slate-100 rounded-lg'>
        <div>
            {
                ChatMessages.map((e, index)=>(
                    <ChatMessage key={index} name={e.name} message={e.message}/>
                ))
            }
        </div>
        </div>

        <form className='w-full p-2 m-2 border border-black'
            onSubmit={(e)=>{
                e.preventDefault()
                console.log('replying', data)
                dispatch(addMessage({name: "randam people", message: data}))
            }}>
            <input type='text' className='w-96' ref={replying}/>
            <button className='p-2 rounded-lg mx-2 bg-green-100'>reply</button>
        </form>
    </>
  )
}

export default LiveChat