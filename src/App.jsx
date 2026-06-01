import React from 'react'
import PricingCard from './Components/PricingCard'
import './App.css'
 
import { plans } from './data'

function App(  ) {
  return (
    <>
      <div className="pricing-container">
        {plans.map((plan) => (
          <PricingCard key={plan.id} plans={plan} />
        ))}
      </div>
    </>
  )
}

export default App