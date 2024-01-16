 import CocktailList from "../component/CocktailList"
import SearchForm from "../component/SearchForm"
const Home = () => {
    return (
        <section>
          <SearchForm />
          <CocktailList />
        </section>
    )
}
export default Home