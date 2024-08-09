import { Hero } from '@/components/Hero'
import { ImageGalery } from '@/components/ImageGaleryBlock'
import { ImageTextBlock } from '@/components/ImageTextBlock'
import { TwoColumnsText } from '@/components/TwoColumnsText'
import React from 'react'

const page = () => {
  return (
    <div className='container mx-auto px-4 md:px-6'>
        <div className='bg-primary-foreground'>
            <Hero />
            <TwoColumnsText />
            <ImageTextBlock />
            <TwoColumnsText />
            <ImageGalery />
        </div>
    </div>
  )
}

export default page