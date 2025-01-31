
import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc} from "firebase/firestore"
import { app } from "./config"
import { Link } from "react-router"

const bd = getFirestore(app)

export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(bd, "items"))
    const products = []
    querySnapshot.forEach((doc) => {        
        products.push(doc.data()) 
  })
    return products
} 
export const getProductsByCategory = async (category) => {

    const q = query(collection(bd, "items"), where("category", "==", category))
    const querySnapshot = await getDocs(q)
    const products = []
    
    querySnapshot.forEach((doc) => {
    products.push(doc.data())
    
    })
    return products
    
}
export const getProductsById = async (id) => {

    const docRef = doc(bd, "items", id)
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
      return docSnap.data()
    }
}
export const newOrder = async (order) => {
    try {
        const docRef = await addDoc(collection(bd, "orders"), order)
        console.log("Document written with ID: ", docRef.id);
            
      } catch (e) {
            console.error("Error adding document: ", e);
      }
}