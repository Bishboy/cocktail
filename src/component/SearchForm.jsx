 import React from "react";
import { useGlobalContext } from "../context";


const SearchForm = () => {
    const{ setSearchForm} = useGlobalContext()

   const searchValue = React.useRef('')

   const handleSubmit = (e) => {
    e.preventDefault()
   }

   const searchCocktail = () => {
    setSearchForm(searchValue.current.value)
   }

   React.useEffect(()=> {
    searchValue.current.focus()
   },[]);
 
    return (
        <section className=" mt-32">
            <form action="" className="w-[80%] mx-auto flex text-center" onSubmit={handleSubmit}  >
                <div className=" w-[50%] flex flex-col mx-auto">
                    <label htmlFor="" className=" font-bold text-gray-600 uppercase mb-4 text-xl">Search your preferred <span className="text-pink-400">cocktail</span> </label>
                    <input onChange={searchCocktail} ref={searchValue}  type="text" id="name" className="border border-pink-400  text-gray-600 text-lg h-12 outline-none px-4 rounded-md"/>
                </div>
            </form>
        </section>

    )
}
export default SearchForm