import React from 'react'
import heroImage from 
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='homepage'>
                <div className='image-container'>
                    {<img src={heroImage} alt='' className='background-image'/> }
                    <div className='text-container'>

                        <h1>Your Accountability Patner</h1>

                        <p>Santorini is your activity patner,
                           allowing you to set goals,todos,
                            offering rewards ,earning points
                            and a support community.
                            The best version of you,
                            is one click away
                        </p>

                        <button type='button'>Learn More</button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
