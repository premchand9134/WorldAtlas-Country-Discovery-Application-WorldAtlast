import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/postApi"
import { Loader } from "../components/UI/Loader";
import { CountryCards } from "../components/layout/CountryCards";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () =>{

    const [isPending, startTransition] = useTransition();
    const [countries,setCountries] = useState([])

    const [search,setSearch] = useState()
    const [filter,setFilter] = useState("all")

    useEffect(()=>{
        startTransition( async()=>{
            const res = await getCountryData()
            // console.log(res.data); 
            setCountries(res.data)          
        })
    },[])

    if(isPending) return <Loader />
    
    const searchCountry = (curr) =>{
        if(search){
            return curr.name.common.toLowerCase().includes(search.toLowerCase())
        }
        return curr
    }

    const filterRegion = (curr) =>{
        if(filter === "all") return curr;
        return curr.region === filter;
        
    }

    const filterCountries = countries.filter((curr)=> searchCountry(curr) && filterRegion(curr))
 
    return(
        <section className="country-section">
                <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} setCountries={setCountries} />
            <ul className="grid grid-four-cols">
                {
                    filterCountries.map((curr,index)=>{
                        return <CountryCards curr={curr} key={index} />
                    })
                }
            </ul>
        </section>
    )
}

