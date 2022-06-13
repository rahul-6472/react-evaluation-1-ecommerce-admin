import ProductInput from "./ProductInput"
import ProductList from "./ProductList"

const Product = ({addProduct,deleteProduct,products}) => {
  return (
    <div>
      <ProductInput  addProduct={addProduct}/>
      <ProductList deleteProduct = {deleteProduct} products = {products}/>
    </div>
  )
}

export default Product
