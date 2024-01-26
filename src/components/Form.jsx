import '../styles/Form.css'
export const Form = () => {
    return (
        <div className='user-details'>
               
            <form action="">
                
                <div className='input-details'>

                        <div className='for-names'>
                        
                            <div className='input-box'>
                                <label htmlFor="First Name">First Name</label>
                                <input type="text" placeholder="First Name" required/>
                            </div>

                            <div className='input-box'>
                                <label htmlFor="Last Name">Last Name</label>
                                <input type="text" placeholder="Last Name" required/>
                            </div>
                        </div>
                            
                            <div className='input-box'>
                                <label htmlFor="email">Email Address</label>
                                <input type="email" placeholder="Email Address" required/>
                            </div>

                            <div className='input-box'>
                                <label htmlFor="Company">Company</label>
                                <input type="text" placeholder="Company" required/>
                            </div>
                            
                            <span>Add me to your mailing list</span>
                            <div className='mailing-list'>
                                <input type="checkbox" id='' required/>
                                <label htmlFor="Mailing List">I agree to receive emails from your company and your terms of conditions</label>
                            </div>

                             <div className="button-submit">
                                <button>Sign Me Up</button>
                             </div>


                </div> 

            </form>
        </div>
    )
}