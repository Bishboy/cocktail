import React, { useState, useEffect } from "react"
import Loading from "../component/Loading"
import { useParams, Link } from "react-router-dom"

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
const SingleCocktail = () => {

    const { id } = useParams()
    const [loading, setLoading] = useState(false);
    const [cocktail, setCocktail] = useState(null);

    useEffect(() => {
        setLoading(true);
        const getCocktail = async () => {
            try {
                const response = await fetch(`${url}${id}`);
                const data = await response.json();
                const { drinks } = data;

                if (drinks) {
                    const {
                        strDrink: name,
                        strDrinkThumb: image,
                        strAlcoholic: info,
                        strCategory: category,
                        strGlass: glass,
                        strInstructions: instructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    } = data.drinks[0]
                    const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    ]
                    const newCocktail = {
                        name,
                        image,
                        info,
                        category,
                        glass,
                        instructions,
                        ingredients,
                    }
                    setCocktail(newCocktail)
                }
                else {
                    setCocktail(null)
                }


            } catch (error) {
                console.log(error);

            }
            setLoading(false)
        }
        getCocktail()
    }, [id])

    if (loading) {
        return <Loading />
    }
    else if (!cocktail) {
        return <h2 className="text-center mt-8 text-2xl text-pink-400 font-bold">No cocktail to display</h2>
    }
    else {
        const {
            name,
            image,
            category,
            info,
            glass,
            instructions,
            ingredients,
        } = cocktail

        return (
            <section>
                <div className="text-center mt-16">
                    <Link to='/' className="font-semibold text-white bg-pink-400 py-3 px-6 rounded-lg hover:bg-black hover:text-white" >
                        Back home
                    </Link>

                </div>
                <div className="w-[25%] mx-auto mt-10 flex flex-col py-8">
                    <h2 className="mb-10 py-2 text-center font-bold text-xl text-gray-500">{name}</h2>
                    <div className=" bg-pink-400 shadow-lg shadow-gray-700 rounded-lg ">
                        <img src={image} alt={name} className="rounded-lg" />
                        <div className="px-6 ">
                            <p className="text-gray-700">
                                <span className=' font-bold uppercase text-white italic'>name :</span> {name}
                            </p>
                            <p className="text-gray-700">
                                <span className=' font-bold uppercase text-white italic'>category :</span> {category}
                            </p>
                            <p className="text-gray-700">
                                <span className=' font-bold uppercase text-white italic'>info :</span> {info}
                            </p>
                            <p className="text-gray-700">
                                <span className=' font-bold uppercase text-white italic'>glass :</span> {glass}
                            </p>
                            <p className="text-gray-700">
                                <span className=' font-bold uppercase text-white italic'>instructons :</span> {instructions}
                            </p>
                            <p className="py-4">
                                <span className=' font-bold uppercase text-white italic'> Ingredient : </span>
                                {ingredients.map((item, index) => {
                                    return item ? <span className="text-gray-600 " key={index}>{item}</span> : null;
                                })}
                            </p>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}


export default SingleCocktail