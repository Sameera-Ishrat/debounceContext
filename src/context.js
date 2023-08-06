import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const AppContext = createContext();

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);


const fetchDrinks = async(searchTerm) => {
    setLoading(true);
    try {
        const response = await fetch(`${url}${searchTerm || 'a'}`);
        const data = await response.json();
        console.log(data,"data");
        const {drinks} = data;

        if(drinks) {
            const newCocktails = drinks.map((item) => {
                const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
                return {
                    id:idDrink,
                    name : strDrink,
                    image : strDrinkThumb,
                    info : strAlcoholic,
                    glass : strGlass
                }
                
            })
            setCocktails(newCocktails);
            
        }else {
            setCocktails([])
        }
        setLoading(false);
    }catch(error) {
        console.log(error);
        setLoading(false);
    }
}// fetchDrinks ends...

  useEffect(() => {
    fetchDrinks();
  }, []);

  return (
    <AppContext.Provider value={{ loading,cocktails,fetchDrinks,}}>
      {children}
    </AppContext.Provider>
  );
};
//custom hook

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider };



