
import one from "../assets/images/one.jpg"
import two from "../assets/images/two.jpg"
import three from "../assets/images/three.jpg"


//Prodect component

function Product()
{
  return(
    <div>
      <div class="products">
            <div class="box">
                <img src={one} alt="first"></img>
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
            </div>
            
            <div class="box">
                <img src={two} alt="second"></img>
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
            </div>
            <div class="box">
                <img src={three} alt="third"></img>
                <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
            </div>
            
        </div>

    </div>
  )
}

export default Product