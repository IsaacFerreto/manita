import React from 'react'
import PostCatalogo from '../Services/PostCatalogo'
import GetCatalogo from '../Services/GetCatalogo'
import UpdateCatalogo from '../Services/UpdateCatalogo'
import DeleteCatalogo from '../Services/DeleteCatalogo'
import { useEffect, useState } from 'react'


function AdminCatalogoCompo() {
const [nombre,setNombre]=useState('')
const [precio,setprecio]=useState('')
const [descripcion,setdescripcion]=useState('')
const [categoria,setcategoria]=useState('')
const [cantidad,setcantidad]=useState('')
const [image,setimage]=useState('')
const [base64, setBase64] = useState('');
const [productos, setProductos]=useState([])
const [editable,setEditable]=useState('')
const [editando,setEditando]=useState('')

const [productsServices, setProductsServices] = useState([]);


const formProduct={
   name: nombre,
   price: precio,
   description: descripcion,
   category: categoria,
   imageUrl: base64,
   Quantity: cantidad
}

// const [formProduct, setFormProduct]  = useState({
//   name: '',
//   price: '',
//   description: '',
//   category: '',
//   imageUrl: ''
// });

useEffect(() =>{
  
  getUsuario()
},[productos])

const inputChange = (e) => {
  const { name, value } = e.target;
  setFormProduct({ ...formProduct, [name]: value});
}

const handleFileChange = (event) => {
  const file = event.target.files[0];

  convertToBase64(file);
};


const convertToBase64 = (file) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    setBase64(reader.result);
  };
};



  const getUsuario = async()=>{//funcion GET para hacer consulta al fetch
    const  dataProductos =await GetCatalogo()//guardando datos traidos del get en una variable inicial
    setProductos(dataProductos)//guardando datos en una funcion global para poder usarlo en todo el documento
   
}



const cargar = () => {
PostCatalogo(formProduct)
console.log(formProduct+' esto es lo que llega a la funcion');

}


const Eliminar =(id)=>{
  DeleteCatalogo(id)
}


  return (


    <div>
        <div id='adminBody'>
<div id='formBody'>
<input type="text"
        onChange={(e)=>setNombre(e.target.value)}
        placeholder='Nombre del producto'/>
</div>
<div id='formBody'>
<input type="number"
        onChange={(e)=>setprecio(e.target.value)}
        placeholder='Precio del producto'/>
</div>
<div id='formBody'>
<select name="" id="selector" value={formProduct.category} onChange={(e)=>setcategoria(e.target.value)} required>
            <option value="">Escoja el tipo de producto</option>
            <option value="servicio">Servicio</option>
            <option value="producto">Producto</option>
        </select>
</div>
<div id='formBody'>
<input type="text"
onChange={(e)=>setcantidad(e.target.value)}
        placeholder='Cantidad'/>
</div>
<div >
<input type="text"
        onChange={(e)=>setdescripcion(e.target.value)}
        placeholder='Descripción del producto'/>

<label htmlFor="agregarimg">INGRESE IMAGEN</label>
<input id="agregarimg" type="file" 
onChange={handleFileChange}/>       
</div>
        <button id='btnAdd' onClick={cargar}>Enviar</button>
        </div>


        <div id='mapArticle'>
        <div className="product-grid">
        {productos.length > 0 ? (
            productos.map((producto, index) => (
              <div key={index} className="product-card">
                <h3>{producto.formProduct.name}</h3>
                <p>Precio: ${producto.formProduct.price}</p>
                <p>Cantidad: {producto.formProduct.Quantity}</p>
                <p>Descripción: {producto.formProduct.description}</p>
                <img src={producto.formProduct.imageUrl} alt="imagen de producto" />
                <button >Editar</button>
                <button onClick={()=>Eliminar(producto.id)}>Borrar</button>
              </div>
            ))
          ) : (
            <p>No hay productos disponibles.</p>
          )}
      </div>

        </div>
    </div>
  )
}

export default AdminCatalogoCompo
