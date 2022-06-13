const ProductList = ({ deleteProduct, products }) => {
  return (
    <div style = {{display:"flex"}}>
      {products.map((product) => (

      
        <div style = {{border:"1px solid #cecece", marginRight:"1rem",padding:"0.8rem",marginBottom:"1rem"}} key={product.id} >
          <h3>{product.id}</h3>
          <img src = "product.image"/>
          <h3>{product.title}</h3>
          <h3>{product.category}</h3>
          <h3>{product.gender}</h3>
          <h3>{product.price}</h3>
          <button onClick = {()=>deleteProduct(product.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
