import { Hero } from '@/components/Hero'

import { TwoColumnsText } from '@/components/TwoColumnsText'
import React from 'react'

const page = () => {
  return (
    <div className='container mx-auto px-4 md:px-6'>
        <div className=''>
            <Hero />
            <TwoColumnsText />
          
            
        </div>
    </div>
  )
}

export default page