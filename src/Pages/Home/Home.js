import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Todo from '../../Components/Todo/Todo'
import Goal from '../../Components/Goal/Goal'
import Reward from '../../Components/Reward/Reward'
import Community from '../../Components/Community/Community'

const Home = () => {
    return (
        <div>
            
            <Hero />
            <Goal/>
            <Todo/>
            <Reward />
            <Community />


        </div>
    )
}

export default Home