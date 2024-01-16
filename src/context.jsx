import React,{ useState, useEffect, useContext } from "react";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [loading , setLoding] = useState(true);
    const [searchForm, setSearchForm] = useState('a')
    const [cocktail, setCocktail] = useState([])

    const fetchDrinks = async() => {
        setLoding(true);
        try {
            const response = await fetch(`${url}${searchForm}`)
            const data = await response.json();
            const{drinks} = data;
           

            if(drinks){
                const newCocktail = drinks.map((items) => {
                    const {idDrink, strDrink, strDrinkThumb, strAlcohol, strGlass} = items;
                    return {id: idDrink, name: strDrink, image: strDrinkThumb, info:strAlcohol, glass: strGlass};
                })
                setCocktail(newCocktail)
                
            }else{
                setCocktail([])
            }
            setLoding(false)
            
        } catch (error) {
            setLoding(false)
            
        }
    }

    useEffect(()=>{
        fetchDrinks()
    },[searchForm])

    return(
        <AppContext.Provider value={{
            loading,
            cocktail,
            setSearchForm
            
        }}>
            {children}
        </AppContext.Provider>
    )

}

export const useGlobalContext = ()=> {
   return useContext(AppContext)

}
export  {AppContext, AppProvider}