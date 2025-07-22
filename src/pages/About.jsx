import countryFacts from "../api/countryData.json"

export const About = () =>{
    return(
        <section className="section-about container">
        <h2 className="container-title">
          Here are the Interesting Facts
          <br />
          we’re proud of
        </h2>
        <div className="gradient-cards">
            {
                countryFacts.map((curr)=>{
                    return(
                        <div className="card" key={curr.id}>
                        <div className="container-card bg-blue-box">
                            <p className="card-title">{curr.countryName}</p>
                            <p>
                            <span className="card-description">Capital:</span> 
                            {curr.capital}
                            </p>
                            <p>
                            <span className="card-description">Population:</span> 
                            {curr.population}
                            </p>
                            <p>
                            <span className="card-description">Interesting Fact:</span> 
                            {curr.interestingFact}
                            </p>
                        </div>
                    </div>
                        
                    )
                })
            }
            
        </div>
        </section>
    )
}