import React from 'react'

function PricingCard( {plans} ) {

  return (
    <>
    <div className={plans.isPopular ? 'box highlighted-border' : 'box'}>
        {plans.isPopular && <span className='popular-badge'>Most Popular</span>}
        
        <h2>{plans.Plan_Name}</h2>
        <h1>{plans.Price}</h1>
        <p>{plans.user}</p>
        <p>{plans.Projects}</p>
        <p>{plans.support}</p>

        <button>Choose Plan</button>
    </div>

    </>    
  )
}

export default PricingCard