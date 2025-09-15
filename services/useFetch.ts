import { useState } from "react"


const useFetch = <T>(fetchFunction:()=>Promise<T>,autoFetch = true)=>{

    const [data , setdata] = useState<T |null>(null)
    const [loading , setloading] = useState(false)
}