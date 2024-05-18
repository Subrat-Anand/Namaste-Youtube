import React, { useRef, useState } from 'react'
import { UserIcon, Youtube_Search_Api, hamburger, youtube } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

export const Head = () => {
  const [suggestion, setSuggestion] = useState([])
  const [hideSuggestion, setHideSuggestion] = useState(false)
  const dispatch = useDispatch()

  const SearchQuery = useRef("")

  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu())
  }

  const delayedAPICall = useRef(null);

  const getSearchSuggestion = async (Query)=>{
    // Make an API call after ever key press
    // but IF the difference between 2 api call < 200ms
    // Decline the API call
    const data = await fetch(Youtube_Search_Api + Query)
    const json = await data.json()
    console.log(json[1])
    setSuggestion(json[1])
  }

  const ChangeHandler = ()=>{
    const CheakInput = SearchQuery.current.value
    // Clear the previous timer
    if (delayedAPICall.current) {
        clearTimeout(delayedAPICall.current);
      }
  
    // Set a new timer for 200ms
    delayedAPICall.current = setTimeout(() => {
      getSearchSuggestion(CheakInput);
    }, 200);
  }


  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg items-center'>
        <div className='flex col-span-1 items-center gap-3'>
            <img alt='hamburger' src={hamburger} className='h-8 cursor-pointer' onClick={toggleMenuHandler}/>
            <img alt='Youtube-logo' src={youtube} className='h-14'/>
        </div> 
        <div>
          <div className='col-span-10 ml-40'>
            <input type='text' className='w-[25rem] border outline-blue-800 p-2 rounded-l-full' placeholder='Search' 
              ref={SearchQuery}
              onChange={ChangeHandler}
              onFocus={()=> setHideSuggestion(true)}
              onBlur={()=> setHideSuggestion(false)}
            />
            <button className='py-2 px-2 rounded-r-full bg-gray-400'>Search</button>
          </div>
          {
            hideSuggestion && (
              <div className='fixed bg-white py-2 px-5 border-gray-100 w-[25rem] ml-40 shadow-lg rounded-lg'>
            <ul>
              {
                suggestion.map((s)=>(
                  <li key={s} className='py-2 shadow-md hover:bg-gray-100'>🔍 {s}</li>
                ))
              }       
            </ul>
              </div>
            )
          }
        </div>
        <div className='col-span-1'>
            <img src={UserIcon} alt='UserIcon' className='h-8'/>
        </div>
    </div>
  )
}
