import React from 'react'
import Cocktail from './Cocktail'
import { useGlobalContext } from '../context'

const CocktailList = () => {
   const {cocktails,loading}  = useGlobalContext();
   console.log(cocktails,"coktails");
   console.log(loading,"loading");
   

   if(cocktails.length === 0) {
    return (
        <p>No cocktails matched your criteria</p>
    )
   }
   if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='wrapper' >
        <div className='list'>
            {cocktails.map((coctail) => (
                <Cocktail key={coctail.id} {...coctail} />
            ))}
            
        </div>

    </div>
  )
}

export default CocktailList