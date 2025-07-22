export const Contact = () =>{

    const handleFormSubmit = (formData) =>{
        const userData = Object.fromEntries(formData.entries()) 
        console.log(userData);
        
    }

    return(
        <section className="section-contact">
            <h2 className="container-title">Contact Form</h2>
            <div className="contact-wrapper container">
                <form action={handleFormSubmit}>
                    <input type="text" name="username" required autoComplete="off" className="form-control" placeholder="Enter your name" />
                    <input type="email" name="useremail" required autoComplete="off" className="form-control" placeholder="Enter your email" />
                    <textarea className="form-control" rows="10" required name="message" autoComplete="off" placeholder="Enter Your message"></textarea>
                    <button type="submit" value='send'>Send</button>
                </form>
            </div>    
            
        </section>
    )
}