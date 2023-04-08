import React from 'react'
import './Team.css'
import Navbar from '../components/Navbar'
import BackgroundParticles from '../components/BackgroundParticles'
import TeamCard from '../components/TeamCard'
import config from '../App.config'

export default function Team() {
  return (
    <>
    <BackgroundParticles/>
    <div className='team'>
      <Navbar/>

      <TeamCard member={config.team.final_year.secretory}/>

      </div>
      teams
    </>
  )
}
