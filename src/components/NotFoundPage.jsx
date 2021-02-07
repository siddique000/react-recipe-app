import React from 'react'
import notFound from '../assets/not-found.png' 

const NotFoundPage = () => {
   return (
      <div className='text-center' style={{height:'100vh'}}>
         <h2 className='text-warning display-4'>Search item to get recipes</h2>
         <img className='img-fluid img-thumbnail' src={notFound} alt=""/>
      </div>
   )
}

export default NotFoundPage
