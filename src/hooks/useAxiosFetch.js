import axios from 'axios'
import { useEffect, useState } from 'react'

export const useAxiosFetch = (dataUrl) => {

    const [data, setData] = useState([])
    const [fetchError, setFetchError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        let isMounted = true
        const source = axios.CancelToken.source()

        const fetchData = async(url) =>{
            setIsLoading(true)
            try{
                const resp = await axios.get (url,{
                    cancelToken : source.cancel()
                })
                
                if(isMounted){
                    setData(resp.data)
                    setFetchError(null)
                }
            }
            catch(err){
                if(isMounted){
                    setData([])
                    setFetchError(err.message)
                }
            } finally{
                isMounted && setIsLoading(false)
            }
        }

        fetchData(dataUrl)
        return () =>{isMounted = false
        source.cancel()}

    }, [dataUrl])

    return{data, fetchError, isLoading}
}
