import { Hero } from '@/components/Hero'
import { MyTeam } from '@/components/MyTeam'
import { TwoColumnsText } from '@/components/TwoColumnsText'
import React from 'react'

const professores = () => {
  return (
    <div className='container mx-auto px-4 md:px-6'>
        <div className=''>
            <MyTeam />
        </div>
    </div>
  )
}

export default professores

//TODO clocar um modal ao clicar no professor
