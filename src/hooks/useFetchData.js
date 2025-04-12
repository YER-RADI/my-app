//src/hooks/useFetchData.js 

import { useEffect, useState } from  "react" ; 

export  const  useFetchData = ( url ) => { 
  const [data, setData] = useState ([]); 
  const [loading, setLoading] = useState ( false ); 
  const [error, setError] = useState ( "" ); 

  useEffect ( () => { 
    const  fetchData = async ( ) => { 
      setLoading ( true ); 
      try { 
        const response = await  fetch (url); 
        const json = await response.json (); 
        setData (json); 
      } catch (error) { 
        setError (error) 
      } finally { 
        setLoading ( false ); 
      } 
    }; 

    fetchData () 

  }, [url]); 

  //retourne les données nécessaires 

  return { data, loading, error} 
};