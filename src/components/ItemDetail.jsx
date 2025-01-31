import ItemCount from "./ItemCount"

function ItemDetail ({item}) {
 return (
    <div>
        <h2>{item?.name}</h2>
        <img className="imgsize" src={item?.image} alt={item?.name} />
        <p>{item?.description}</p>
        <p>Categoria: {item?.category}</p>
        <p>Precio: {item?.price}</p>
        <ItemCount item={item}/>
    </div>
 )   
}
export default ItemDetail