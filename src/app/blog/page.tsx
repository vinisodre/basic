import { BlogBlock } from '@/components/Blog-block'
import React from 'react'

import { blogPosts } from '@/constants';


const page = () => {
  return (
    <div className='container mx-auto px-4 md:px-6'>
        <div className=''>
            <h1>Blog</h1>
            <BlogBlock posts={blogPosts}/>
        </div>
    </div>
  )
}

export default page