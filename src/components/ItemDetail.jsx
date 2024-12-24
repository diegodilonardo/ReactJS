import ItemCount from "./ItemCount"

function ItemDetail ({producto}) {
 return (
    <div>
        <h2>{producto?.title}</h2>
        <img src={producto?.thumbnail} alt={producto?.title} />
        <p>{producto?.description}</p>
        <p>Categoria: {producto?.category}</p>
        <p>Precio: {producto?.price}</p>
        <ItemCount />
    </div>
 )   
}
export default ItemDetail