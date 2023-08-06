import React from 'react'
import Card from '../UI/Card'


const Cocktail = ({image ,id,name,info,glass }) => {
  return (
    <Card className='cocktail-list'>
        <div className='image-container'>
            <img src={image} alt={name} />
        </div>
        <div className='coctail-footer'>
            <h3>{name}</h3>
            <h4>{glass}</h4>
            <p>{info}</p>
        </div>
        </Card>
  )
}

export default Cocktail
