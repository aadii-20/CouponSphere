import React from 'react'
import './about.css'
function NotFound() {
  return (
    <div>
       <div>
    <div className="container">
      <div className="row">
        <div className="relative px-4 w-full">
          <h1 className=' text-2xl sm:text-3xl'>Sorry, we're doing some work on the site</h1>
        </div>
      </div>
    </div>

    <div id=" text-center">
      <img className='image' src="/images/under_construction.png" alt="Construction work in progress" title="Construction work in progress" />
    </div>
    <div className="container">

      <div className="row">
        <div className="col-xs-12 col-md-8 col-md-offset-2 col-lg-offset-2 col-lg-8">
          <p className="content">Thank you for being patient. We are doing some work on the site and will be back shortly.</p>
        </div>
      </div>

      <div className="row" id="social">
        <div className="col-xs-12 col-md-12 col-lg-12">
          
        </div>
      </div>

    </div>
    </div>
    </div>
  )
}

export default NotFound
