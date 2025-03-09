import Navbar from "./components/Navbar.js"
import Search from "./components/Searchbar.js"
import Product from "./components/Product.js"
import About from "./components/About.js"
import Footer from "./components/Footer.js"

function App()
{
    return(
    <div>
         <Navbar></Navbar>
        <Search></Search>
        <Product></Product>
        <About></About>
        <Footer></Footer>

    </div>)
}

export default App