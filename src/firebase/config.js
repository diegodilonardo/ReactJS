
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCM9Vb-mkAVD6RlwJSgq5kGPUlZ1bZ6BLE",
  authDomain: "mi-tienda-reack-db.firebaseapp.com",
  projectId: "mi-tienda-reack-db",
  storageBucket: "mi-tienda-reack-db.firebasestorage.app",
  messagingSenderId: "88636123702",
  appId: "1:88636123702:web:0766e9a5f5ddc2f6324697"
};

export const app = initializeApp(firebaseConfig);