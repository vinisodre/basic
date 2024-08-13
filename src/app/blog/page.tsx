import { BlogBlock } from '@/components/Blog-block'
import React from 'react'




const page = () => {
  return (
    <div className='container mx-auto px-4 md:px-6'>
        <div className=''>
            <h1>Blog</h1>
            <BlogBlock />
        </div>
    </div>
  )
}

export default page