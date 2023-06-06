import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Shopping=()=>{ 
    const {id}=useParams()
    const [product,setproduct]=useState([])

    const [storeProduct,setStoreProduct]=useState({
        name:product.name,
        avatar:product.avatar,
        quantity:product.quantity
    })

    useEffect(()=>{
        getproduct()
    },[])

    useEffect(()=>{
         addshopping()
    },[])
    const addshopping=async()=>{
        await axios.post("https://63a5721a318b23efa793a770.mockapi.io/api/Type_Product",{
            name:product.name,
            avatar:product.avatar,
            quantity:product.quantity

        })
    }

    const getproduct=async()=>{
        const value=await axios.get(`https://63a5721a318b23efa793a770.mockapi.io/api/produce/${id}`)
        await axios.post("https://63a5721a318b23efa793a770.mockapi.io/api/Type_Product",value.data)
    }
    return (
        <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Avatar</th>
                <th>Quantity</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{storeProduct.name}</td>
                <td>{storeProduct.avatar}</td>
                <td>{storeProduct.quantity}</td>
            </tr>
        </tbody>
    </table>
    )
}