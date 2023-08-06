// import React, {useEffect, useState} from 'react'
// import { useGlobalContext } from '../context';

// const SearchForm = () => {
// const [searchTerm , setSearchTerm] = useState('');
// //const [timer,setTimer] = useState(null);

// const {fetchDrinks} = useGlobalContext();

// const handleSublit = (e) => {
//     e.preventDefault();
// }
// let timer;
// const handleChange = (e) => {
// console.log(e.target.value);
// setSearchTerm(e.terget.value);
// if(timer) clearTimeout(timer);
// // setTimer((setTimeout(()=>{
// // fetchDrinks(e.target.value);
// // },500)))
// timer = setTimeout(() => {
// fetchDrinks(e.target.value)
// },500)
// }
// useEffect(() => {
// return() => clearTimeout(timer)
// },[timer])

//   return (
//     <form className='coctail-form' onSubmit={handleSublit}>
//    <input 
//    type='search'
//    name='name'
//    id = 'name'
//    placeholder='Type your search here...'
//    value={searchTerm}
//    onChange={handleChange}
//     />    


//     </form>
//   )
// }

// export default SearchForm



import React, { useEffect, useMemo, useState } from 'react';
import { useGlobalContext } from '../context';
export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const [timeoutId, setTimeoutId] = useState(null);

  const { fetchDrinks } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

 
  const searchCocktail = (e) => {
    //const searchTerm = e.target.value;
    console.log(e.target.value)
    setSearchTerm(e.target.value);
    clearTimeout(timeoutId);
    setTimeoutId(
      setTimeout(() => {
        // Call the API after the debounce timeout
        fetchDrinks(e.target.value);
      }, 1000)
    );  
  };

  useEffect(() => {
    // Cleanup function to clear the timeout on unmount and re-render
    return () => {
      clearTimeout(timeoutId);
   
    };
  }, [timeoutId]);

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='search'
            name='name'
            id='name'
            onChange={searchCocktail}
            value={searchTerm}
          />
        </div>
      </form>
    </section>
  );
}