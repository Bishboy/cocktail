import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({image, name, id, info, glass}) => {
    return (
        <article className="bg-pink-500 border-2 shadow-lg rounded-lg h-[30rem] shadow-gray-500">
            <div className="">
                <img src={image} alt={image} className="rounded-lg"/>
            </div>
            <div className=" py-2 ">
                <h3 className="text-white font-bold text-2xl">{name}</h3>
                <h4 className="text-white uppercase">{glass}</h4>
                <p>{info}</p>
            </div>
            <Link to={`/cocktail/${id}`} className=" bg-white uppercase transition-all hover:bg-black hover:text-white hover:shadow-md px-6 py-2">details</Link>
        </article>
    )
}
export default Cocktail