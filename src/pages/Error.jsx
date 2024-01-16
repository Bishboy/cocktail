import { Link } from "react-router-dom"

const Error = () => {
    return(
        <section>
            <div className="text-center">
            <div className=" py-24 font-bold text-4xl capitalize ">
                <h1 className="text-pink-400">oops! <span className="text-gray-400"> you headed the wrong Direction!</span></h1>
            </div>
                <Link to="/" className="mt-6 text-2xl font-semibold py-3 rounded-lg px-8 bg-gray-400 text-white ">Go back home!</Link>

            </div>

        </section>
    )
}
export default Error