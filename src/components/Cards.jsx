import React, { useState, useEffect } from 'react'
import Card from './Card';
import './Cards.css'

const Cards = ({ items }) => {
  const slicedDate = items.slice(1,5)

  return (
    <>
      <div className="cards-container">
        {
          slicedDate.map((item) =>
            <Card key={item.id} items={item} />
          )
        }
      </div>
    </>
  )
}

export default Cards