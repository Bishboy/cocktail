import React from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
import Cocktail from "./Cocktail";

const CocktailList = () => {

    const { loading, cocktail } = useGlobalContext()

    if (loading) {
        return <Loading />
    }
    if (cocktail.length < 1) {
        return (
            <div className="text-center mt-16 font-bold text-gray-600 uppercase mb-4 text-xl">
                <h2>No <span className="text-pink-400"> cocktail</span> matched  your criteria</h2>
            </div>
        )

    }

    return (
        <section>
            <div className="w-[60%] mx-auto  text-center mt-24">
                <h1 className="font-bold text-gray-600 uppercase mb-4 text-xl" >Cocktails</h1>
                <div className="grid grid-cols-3 gap-6 ">
                    {cocktail.map((items)=> {
                        return <Cocktail key={items.id} {...items} />

                    })}
                </div>
            </div>
        </section>
    )
}
export default CocktailList