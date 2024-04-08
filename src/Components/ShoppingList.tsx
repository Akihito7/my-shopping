import { DocumentData, collection, getDocs } from "firebase/firestore";
import { FlatList } from "native-base";
import { db } from "../configs/firebaseConfig";
import { useEffect, useState } from "react";
import { CardItem } from "./CardItem";


type PropsProduct = {
    id : string;
    name : string;
    done : boolean,
    quantity : number,
}

export function ShoppingList() {

    const [products, setProducts] = useState<PropsProduct[]>([]);

    async function getProducts() {
        try {
            const collectionOfProducts = await getDocs(collection(db, "products"));

            const data = collectionOfProducts.docs.map(product => {

                return {
                    id: product.id,
                    name: product.data().name,
                    done: product.data().done,
                    quantity: product.data().quantity
                };
            })

            setProducts(data)
        } catch (error) {

        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <FlatList

            data={products}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (

                <CardItem
                    name={item.name}
                    quantity={item.quantity}
                />
            )}

            
            px={4}
            mb={4}
        />
    )
}