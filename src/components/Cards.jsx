import React, { useState, useEffect } from 'react'
import Card from './Card';
import './Cards.css'

const Cards = ({ items }) => {

  return (
    <>
      <div className="cards-container">
        {
          items.map((item) =>
            <Card key={item.id} items={item} />
          )
        }
      </div>
    </>
  )
}

export default Cards