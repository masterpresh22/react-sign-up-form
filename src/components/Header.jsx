import '../styles/Header.css'
export const Header = () => {
    return (
        <div className="header-wrap">

            <div>
                <h1 className="header-text">
                    YourCompany
                </h1>
            </div>

            <div className="newsletter">
                <span className='text-main'>Sign Up for Our Newsletter</span> <br />
                <span className='text-child'>Fill out your information below to be signed up <br />for our informative newsletter.</span>
            </div>

        </div>
    )
}