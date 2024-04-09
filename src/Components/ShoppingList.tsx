import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { FlatList } from "native-base";
import { db } from "../configs/firebaseConfig";
import { useEffect, useState } from "react";
import { CardItem } from "./CardItem";


type PropsProduct = {
    id: string;
    name: string;
    done: boolean,
    quantity: number,
}

export function ShoppingList() {

    const [products, setProducts] = useState<PropsProduct[]>([]);


    useEffect(() => {

        const unsubscribe = onSnapshot(
            query(collection(db, "products"), orderBy("name", "asc")),
            (querySnapshot) => {
                const data = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name,
                    done: doc.data().done,
                    quantity: doc.data().quantity
                }));

                setProducts(data);
            }
        );

        return () => unsubscribe();

    }, [])


    return (
        <FlatList

            data={products}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (

                <CardItem
                    data={item}
                />
            )}


            px={4}
            mb={4}
        />
    )
}