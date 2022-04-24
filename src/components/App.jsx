import React from 'react'
import Logo from '../assets/logo.svg'

export default function App() {
  return (
    <div className='app'>
      <img src={Logo} alt='react-javascript-boilerplate-logo' style={{ height: 300, width: 250 }} />
      <div className='side'>
        <h1>Boilerplate on action</h1>
        <div className='content'>
          <div className='flex margin-bottom'>
            <label htmlFor='description_id' className='label'>Description:</label>
            <p className='article'>My own custom react boilerplate bundling with Webpack.</p>
          </div>
          <div className='flex margin-bottom'>
            <label htmlFor='author_id' className='label'>Author:</label>
            <p>Musashi (Kha Tran)</p>
          </div>
          <div className='flex'>
            <label htmlFor='github_id' className='label'>Github:</label>
            <p className='article'>https://github.com/shelldog/react-javascript-boilerplate</p>
          </div>
        </div>
      </div>
    </div>
  )
}
