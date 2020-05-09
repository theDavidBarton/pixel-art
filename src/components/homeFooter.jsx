import React from 'react'

export default function HomeFooter() {
  const currentYear = () => {
    return new Date().getFullYear()
  }

  return (
    <div className='bg-dark'>
      <div className='container text-warning text-center py-2'>
        <div>
          [
          <a href='https://github.com/theDavidBarton/pixel-art' target='_blank' rel='noopener noreferrer' className='text-info'>
            GitHub
          </a>
          ][
          <a href='https://www.linkedin.com/in/thedavidbarton/' target='_blank' rel='noopener noreferrer' className='text-info'>
            LinkedIn
          </a>
          ]
        </div>
        <div>copyright © 2019-{currentYear()} theDavidBarton</div>
      </div>
    </div>
  )
}
