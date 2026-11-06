import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
      <div className="container mt-5 flex-grow-1 d-flex flex-column justify-content-center">
        <div className="p-5 text-center bg-light-dark rounded text-light info-content">
          
          <h1>Stock Prediction Portal</h1>
          
          <p className="lead">
            Welcome to the ultimate platform for forecasting market trends using Machine Learning. Predict the future of your stocks with accuracy and confidence.
          </p>
          
          <Button text="Login" class="btn-info" url="/login"/>
          
        </div>
      </div>
    </>
  )
}

export default Main