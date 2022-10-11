import React, { useState} from 'react'
import {Link,Routes,Route, Navigate} from 'react-router-dom'
import Login from './Login'
import Settings from './Settings'
import Signup from './Signup'
import UserFeed from './UserFeed'


export default function Header() {
  let[userAuth,setUserAuth]=useState(false)
  function handleUserauth(){
    setUserAuth(!userAuth)
  }
  return (
    <div>
        <header className='flex flex-wrap' >
            <nav>
                <ul>
                <li><Link to='/home'>Home</Link></li>
            <li><Link to='/user'>User</Link></li>
            {(!userAuth)?(<li onClick={handleUserauth} >Login User</li>):(<li onClick={handleUserauth} >Logout User</li>)}
                </ul>
            </nav>
        </header>
        <Routes>
        {userAuth  &&
        (
          <>
          <Route path='/' element={<UserFeed/>}/>
          <Route path='/settings' element={<Settings/>}/>

          </>
        )
        }
        {!userAuth &&
        (
          <>
          <Route path='/' element={<Login/> }/>
          <Route path='/signup' element={<Signup/>}/>
          </>
        )}
        {/* Navigate is used to redirect dynamicaly to a url we want */}
        <Route path='*' element={<Navigate to={'/'}/> }/>
      </Routes>




    </div>
  )
}
