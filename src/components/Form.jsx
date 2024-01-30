import '../styles/Form.css'
import { useState } from 'react'

export const Form = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')

    const handleSubmit = () => {
        alert (

                `First Name is ${firstName}\n` + 
                `Last Name is ${lastName}\n` + 
                `Email is ${email}\n` + 
                `Company is ${company}\n`  
        )

        setFirstName('')
        setLastName('')
        setEmail('')
        setCompany ('')
    }


    return (
        <div className='user-details'>
               
            <form action="">
                
                <div className='input-details'>

                        <div className='for-names'>
                        
                            <div className='input-box'>
                                <label htmlFor="First Name">First Name</label>
                                <input onChange={(e)=>{setFirstName(e.target.value)}}  value={firstName} type="text" placeholder="First Name" required/>
                                {firstName}
                            </div>

                            <div className='input-box'>
                                <label htmlFor="Last Name">Last Name</label>
                                <input onChange={(e)=>{setLastName(e.target.value)}}  value={lastName} type="text" placeholder="Last Name" required/>
                                {lastName}
                            </div>
                        </div>
                            
                            <div className='input-box'>
                                <label htmlFor="email">Email Address</label>
                                <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" placeholder="Email Address" required/>
                                {email}
                            </div>
                            
                            <div className='input-box'>
                                <label htmlFor="Company">Company</label>
                                <input onChange={(e)=>{setCompany(e.target.value)}} value={company} type="text" placeholder="Company" required/>
                                {company}
                            </div>
                            
                            <span>Add me to your mailing list</span>
                            <div className='mailing-list'>
                                <input type="checkbox" id='' required/>
                                <label htmlFor="Mailing List">I agree to receive emails from your company and your terms of conditions</label>
                            </div>

                             <div className="button-submit">
                                <button onClick={handleSubmit}>Sign Me Up</button>
                             </div>


                </div> 

            </form>
        </div>
    )
}