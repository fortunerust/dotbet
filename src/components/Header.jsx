import React, { useState, useEffect } from 'react'
import search from '../assets/img/search.svg'

import signIn from '../assets/img/sign-in.svg'
import signUp from '../assets/img/sign-up.svg'
import logo from '../assets/img/logo.svg'
import Login from './Login'
import ResetPassword from './ResetPassword'
import RegisterEmail from './RegisterEmail'
import RegisterPhone from './RegisterPhone'
import GameUpload from './GameUpload'

export const Header = () => {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [rollingNumber, setRollingNumber] = useState(
    50000000 + parseInt(Math.random() * 10000)
  )

  useEffect(() => {
    let i = rollingNumber
    let poolnumber = setInterval(function () {
      i += parseInt(Math.random() * 100)
      setRollingNumber(i)
    }, 1000)
    return () => {
      clearInterval(poolnumber)
    }
  }, [])
  return (
    <>
      <header className='px-6 h-16 flex items-center w-full'>
        <a href='/'>
          <img src={logo} alt='logo' />
        </a>
        <div className='input-wrapper ml-3  hidden sm:flex items-center w-48 h-8'>
          <input
            type='text'
            placeholder='Search...'
            className='flex-1 outline-none border-none'
          />
          <img src={search} alt='search' />
        </div>
        <button
          className='flex rounded-lg justify-center  login-btn deposit-button items-center h-8'
          onClick={() => {
            setOpen(true)
            setTitle('game')
          }}
        >
          <img src={signIn} alt='sign In' className='mr-2' />
          Game
        </button>
        <div className='text-white justify-end w-full ml-6 sm:flex hidden mx-auto'>
          <p className='text-start text-xl py-4 w-full  rounded-xl rolling my-3 font-extrabold'>
            ${' '}
            {rollingNumber.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}{' '}
          </p>
        </div>
        {localStorage.getItem('token') == '' ||
          localStorage.getItem('token') == undefined ||
          localStorage.getItem('token') == null ? (
          <div className='right-header-area items-center flex flex-1 justify-end'>
            <button
              className='flex rounded-lg justify-center  login-btn deposit-button items-center h-8'
              onClick={() => {
                setOpen(true)
                setTitle('login')
              }}
            >
              <img src={signIn} alt='sign In' className='mr-2' />
              Log in
            </button>
            <button
              className='flex rounded-lg ml-3 justify-center deposit-button items-center h-8'
              onClick={() => {
                setOpen(true)
                setTitle('register_email')
              }}
            >
              <img src={signUp} alt='sign Up' className='mr-2' />
              Sign UP
            </button>
          </div>
        ) : (
          <div className='right-header-area items-center flex flex-1 justify-end'>
            <button
              className='flex rounded-lg justify-center  login-btn deposit-button items-center h-8'
              onClick={() => {
                window.localStorage.removeItem('token')
              }}
            >
              <img src={signIn} alt='sign out' className='mr-2' />
              Log out
            </button>
          </div>
        )}
      </header>
      <Login open={open} setOpen={setOpen} title={title} setTitle={setTitle} />
      <ResetPassword
        open={open}
        setOpen={setOpen}
        title={title}
        setTitle={setTitle}
      />
      <RegisterEmail
        open={open}
        setOpen={setOpen}
        title={title}
        setTitle={setTitle}
      />
      <RegisterPhone
        open={open}
        setOpen={setOpen}
        title={title}
        setTitle={setTitle}
      />
      <GameUpload
        open={open}
        setOpen={setOpen}
        title={title}
        setTitle={setTitle}
      />
    </>
  )
}
