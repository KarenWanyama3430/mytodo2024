import React from 'react'
import './Reward.css'
import rewardsImage from '../../Assets/success after finishing a task.jpg'


const Reward = () => {
  return (
    <div>
      <div className='rewardspage'>
                <div className='image-container3'>
                    {<img src={rewardsImage} alt='' className='image-container'/>}
                    <div className='text-container3'>

                        <h2>Earn Points for Tasked Finished</h2>

                        <p>Earn 10 points for each task finished</p>
                            <p>Anaylitics for the goal Accomplishment</p>
                             <p>Earn Badges that can be redeemed</p>
                            

                        

                    </div>
                </div>

            </div>
      


    </div>
  )
}

export default Reward
