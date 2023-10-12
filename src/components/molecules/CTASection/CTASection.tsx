import { Button, Heading, Text } from '@/components/atoms'
import React from 'react'

interface CTASectionProps {
  titleText: string;
  largeText: string;
  smallText: string;
  buttonText?: string;
}
const CTASection = (props: CTASectionProps) => {
  const { titleText, largeText, smallText, buttonText } = props
  return (
    <section className='py-28 bg-gray-100'>
      <div className='max-w-screen-xl mx-auto px-4 md:text-center md:px-8'>
        <div className='max-w-xl space-y-3 md:mx-auto'>
          {titleText && (
            <Heading level={3} className='text-indigo-600 font-semibold'>
              {titleText}
            </Heading>
          )}
          {largeText && (
            <Text className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
              {largeText}
            </Text>
          )}
          {smallText && <Text className='text-gray-600'>{smallText}</Text>}
        </div>
        <div className='mt-4'>
          <Button variant='primary'>{buttonText || ''}</Button>
        </div>
      </div>
    </section>
  )
}

export default CTASection
