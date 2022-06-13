import {useState} from "react"

const ProductInput = ({addProduct}) => {
  let [title, setTitle] = useState ("")
  let [price, setPrice] = useState ("")
  let [category, setCategory] = useState ("")
  let [gender, setGender] = useState ("male")
  let [image, setImage] = useState ("")


  const submit = (e) =>{

    e.preventDefault()

    if (!title || !gender || !category || !price ){
      alert ("all fields are mandatory!")
    }
    else{
      addProduct(title,gender,category,price)
      setTitle =  ""
      setPrice = ""
      setCategory = ""
      setGender= ""
      setImage= ""
    }
    
  }

  let inputStyle ={
    width:"100%",
    marginBottom:"1rem"
    
  }
  let BStyle = {
    padding:"0.5rem",
    border:"none",
    borderRadius:"0.5rem",
    color:"#fff",
    background:"orangered",
    width:"100%",
    cursor:"pointer"
  }
  return (
    <div> 
    <h2 style =  {{color:"orangered",textAlign:"center"}}>Product Form</h2>
      <form style = {{width:"25%",marginLeft:"35vw",marginBottom:"1rem"}} onSubmit = {submit} >
          <input style = {inputStyle} type = "text" placeholder = "enter product name" value = {title} onChange = {(e)=> setTitle (e.target.value)}/>
          <br/>
          <input style = {inputStyle} type = "number" placeholder = "enter price" value = {price} onChange = {(e)=> setPrice (e.target.value)}/>
          <br/>
          <input  style = {inputStyle} type = "text" placeholder = "enter product category" value = {category} onChange = {(e)=> setCategory(e.target.value)}/>
          <br/>
          <select style = {inputStyle}  value = {gender} onChange = {(e) => setGender(e.target.value)}>
            <option value = "male">Male</option>
            <option value = "female">female</option>
          </select>
          <br/>
          <input style = {inputStyle} type = "url"  placeholder = "enter product image" value = {image} onChange = {(e)=> setImage(e.target.value)}/>
          <br/>
          <input style = {BStyle}  type = "submit" value = "Add" />
       
       </form>
    </div>
  )
}

export default ProductInput
