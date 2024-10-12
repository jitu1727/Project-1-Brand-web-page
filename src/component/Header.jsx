import React from 'react'

export default function Header() {
  return (
   
    <main className="header container">
        <div className="header-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>Step into Unmatched Style and Ultimate Comfort – Discover the Perfect Pair for Every Occasion, from Casual Strolls to Grand Celebrations!
                 </p>

<div className="header-btn">
    <button>Shop Now</button>
    <button>Category</button>
</div>

<div className="shopping">
    <p>Also Available on</p>

    <div className="brand-icons">
        <img src="/images/amazon.png" alt="amazon icon"/>
        <img src="/images/flipkart.png" alt="flipkart icon"/>
    </div>
</div>



        </div>



        <div className="header-image">
            <img src="/images/shoe_image.png" />
        </div>
    </main>
    


  )
}
