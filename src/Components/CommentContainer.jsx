import React from 'react'
import { UserIcon } from '../utils/constant'
import { comment } from 'postcss'

const CommentContainer = () => {

    const CommentData = [
        {
            name: "Subrat Anand",
            text: "I created and anyOne can reply anyone wether that reply posative or negative",
            replies:[
                {
                    name: "Subrat Anand",
                    text: "I created and anyOne can reply anyone wether that reply posative or negative",
                    replies:[
                        {
                            name: "Subrat Anand",
                            text: "I created and anyOne can reply anyone wether that reply posative or negative",
                            replies:[
                                {
                                    name: "Subrat Anand",
                                    text: "I created and anyOne can reply anyone wether that reply posative or negative",
                                    replies:[
                                    ] 
                                },
                            ] 
                        },
                    ] 
                },
            ] 
        },
        {
            name: "Subrat Anand",
            text: "I created and anyOne can reply anyone wether that reply posative or negative",
            replies:[
                {
                    name: "Subrat Anand",
                    text: "I created and anyOne can reply anyone wether that reply posative or negative",
                    replies:[
                        {
                            name: "Subrat Anand",
                            text: "I created and anyOne can reply anyone wether that reply posative or negative",
                            replies:[
                                {
                                    name: "Subrat Anand",
                                    text: "I created and anyOne can reply anyone wether that reply posative or negative",
                                    replies:[
                                    ] 
                                },
                            ] 
                        },
                    ] 
                },
            ] 
        },
        {
            name: "Subrat Anand",
            text: "I created and anyOne can reply anyone wether that reply posative or negative",
            replies:[
            ] 
        },
        {
            name: "Subrat Anand",
            text: "I created and anyOne can reply anyone wether that reply posative or negative",
            replies:[
            ] 
        },
        {
            name: "Subrat Anand",
            text: "I created and anyOne can reply anyone wether that reply posative or negative",
            replies:[
                {
                    name: "Subrat Anand",
                    text: "I created and anyOne can reply anyone wether that reply posative or negative",
                    replies:[
                        {
                            name: "Subrat Anand",
                            text: "I created and anyOne can reply anyone wether that reply posative or negative",
                            replies:[
                                {
                                    name: "Subrat Anand",
                                    text: "I created and anyOne can reply anyone wether that reply posative or negative",
                                    replies:[
                                        {
                                            name: "Subrat Anand",
                                            text: "I created and anyOne can reply anyone wether that reply posative or negative",
                                            replies:[
                                            ] 
                                        },
                                    ] 
                                },
                            ] 
                        },
                    ] 
                },
            ] 
        },
        {
            name: "Subrat Anand",
            text: "I created and anyOne can reply anyone wether that reply posative or negative",
            replies:[
            ] 
        },
        {
            name: "Subrat Anand",
            text: "I created and anyOne can reply anyone wether that reply posative or negative",
            replies:[
            ] 
        },
        {
            name: "Subrat Anand",
            text: "I created and anyOne can reply anyone wether that reply posative or negative",
            replies:[
                {
                    name: "Subrat Anand",
                    text: "I created and anyOne can reply anyone wether that reply posative or negative",
                    replies:[
                        {
                            name: "Subrat Anand",
                            text: "I created and anyOne can reply anyone wether that reply posative or negative",
                            replies:[
                                {
                                    name: "Subrat Anand",
                                    text: "I created and anyOne can reply anyone wether that reply posative or negative",
                                    replies:[
                                        {
                                            name: "Subrat Anand",
                                            text: "I created and anyOne can reply anyone wether that reply posative or negative",
                                            replies:[
                                            ] 
                                        },
                                    ] 
                                },
                            ] 
                        },
                    ] 
                },
            ] 
        },
        {
            name: "Subrat Anand",
            text: "I created and anyOne can reply anyone wether that reply posative or negative",
            replies:[
            ] 
        },
        {
            name: "Subrat Anand",
            text: "I created and anyOne can reply anyone wether that reply posative or negative",
            replies:[
                {
                    name: "Subrat Anand",
                    text: "I created and anyOne can reply anyone wether that reply posative or negative",
                    replies:[
                        {
                            name: "Subrat Anand",
                            text: "I created and anyOne can reply anyone wether that reply posative or negative",
                            replies:[
                                {
                                    name: "Subrat Anand",
                                    text: "I created and anyOne can reply anyone wether that reply posative or negative",
                                    replies:[
                                        {
                                            name: "Subrat Anand",
                                            text: "I created and anyOne can reply anyone wether that reply posative or negative",
                                            replies:[
                                            ] 
                                        },
                                    ] 
                                },
                            ] 
                        },
                    ] 
                },
            ] 
        },
        {
            name: "Subrat Anand",
            text: "I created and anyOne can reply anyone wether that reply posative or negative",
            replies:[
            ] 
        },
    ]

    const Comment = ({data})=>{
        const {name, text, replies} = data
        return(
            <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
                <img src={UserIcon} className='w-10 h-10'/>
                <div className='px-3'>
                    <p className='font-bold'>{name}</p>
                    <p>{text}</p>
                </div>
            </div>
        )
    }

    const CommentsList = ({ comments }) => {
        return (
          comments.map((comment, index) => (
            <div key={index}>
                <Comment data={comment} />
                <div className='pl-5 border border-l-black ml-5'>
                    <CommentsList comments={comment.replies}/>
                </div>
            </div>
          ))
        );
      }
      

  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments:</h1>
        <CommentsList comments={CommentData}/>
    </div>
  )
}

export default CommentContainer