import { Heading, Text } from '@/components/atoms'
import React from 'react'

interface ArticleSectionProps {
  largeText: string;
  smallText: string;
  articles: any;
}

const ArticleSection = (props: ArticleSectionProps) => {
  const { largeText, smallText, articles } = props
  return (
    <section className='py-28'>
      <div className='max-w-screen-xl mx-auto px-4 md:px-8'>
        <div className='max-w-2xl mx-auto space-y-3 sm:text-center'>
          {largeText && (
            <Heading level={3} className='text-gray-800 text-3xl sm:text-3xl'>
              {largeText}
            </Heading>
          )}
          {smallText && <Text>{smallText}</Text>}
        </div>
        <div className='mt-12'>
          <ul className='grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3'>
            <li className='gap-x-4 bg-white border p-4 rounded-lg'>
              <h4 className='text-lg text-gray-800 font-semibold'>Next.js</h4>
              <p className='mt-3'>
                Next.js is a React framework that gives you building blocks to
                create web apps.
              </p>
            </li>
            <li className='gap-x-4 bg-white border p-4 rounded-lg'>
              <h4 className='text-lg text-gray-800 font-semibold'>Next.js</h4>
              <p className='mt-3'>
                Next.js is a React framework that gives you building blocks to
                create web apps.
              </p>
            </li>
            <li className='gap-x-4 bg-white border p-4 rounded-lg'>
              <h4 className='text-lg text-gray-800 font-semibold'>Next.js</h4>
              <p className='mt-3'>
                Next.js is a React framework that gives you building blocks to
                create web apps.
              </p>
            </li>
            <li className='gap-x-4 bg-white border p-4 rounded-lg'>
              <h4 className='text-lg text-gray-800 font-semibold'>Next.js</h4>
              <p className='mt-3'>
                Next.js is a React framework that gives you building blocks to
                create web apps.
              </p>
            </li>
            <li className='gap-x-4 bg-white border p-4 rounded-lg'>
              <h4 className='text-lg text-gray-800 font-semibold'>Next.js</h4>
              <p className='mt-3'>
                Next.js is a React framework that gives you building blocks to
                create web apps.
              </p>
            </li>
            <li className='gap-x-4 bg-white border p-4 rounded-lg'>
              <h4 className='text-lg text-gray-800 font-semibold'>Next.js</h4>
              <p className='mt-3'>
                Next.js is a React framework that gives you building blocks to
                create web apps.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ArticleSection
