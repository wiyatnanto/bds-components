import { Button, Heading, Text } from '@/components/atoms'
import React from 'react'

interface ForumSectionProps {
  titleText: string;
  largeText: string;
  smallText: string;
  buttonText?: string;
}
const ForumSection = (props: ForumSectionProps) => {
  const { titleText, largeText, smallText, buttonText } = props
  return (
    <section className='py-28 bg-gray-100'>
      <div className='max-w-screen-xl mx-auto px-4 md:px-8'>
        <div className='max-w-xl space-y-3'>
          <Heading
            level={3}
            className='text-gray-800 dark:text-gray-50 text-3xl font-semibold sm:text-4xl'
          >
            Latest Forum
          </Heading>
          <Text>
            IO academy is a leading provider of high-quality, affordable
            Computer Science education.
            <a
              className='text-blue-600 hover:text-blue-400 dark:text-sky-500 dark:hover:text-sky-600 inline-flex items-center gap-x-1 duration-150'
              href='/tutorials/cs50'
            >
              Browse lessons
            </a>
          </Text>
        </div>
        <div className='mt-12'>
          <ul className='grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3'>
            <li>
              <div className='space-y-2 sm:max-w-sm'>
                <a href='/tutorials/cs50/introduction-to-computer-science'>
                  <img
                    src='https://via.placeholder.com/600x380'
                    className='rounded-lg w-full'
                    alt='Introduction to computer science'
                  />
                </a>
                <div className='pt-2 text-sm flex items-center justify-between'>
                  <span className=' text-blue-600 dark:text-sky-500 font-semibold'>
                    Lesson {/* */}1
                  </span>
                  <span className='text-sm text-gray-700 dark:text-gray-400 font-semibold '>
                    25:45
                  </span>
                </div>
                <h3 className=' block text-gray-800 dark:text-gray-50 text-lg font-medium'>
                  <a href='/tutorials/cs50/introduction-to-computer-science'>
                    Introduction to computer science
                  </a>
                </h3>
                <p>
                  We will be discussing the important subjects within the scope
                  of computer science.
                </p>
              </div>
            </li>
            <li>
              <div className='space-y-2 sm:max-w-sm'>
                <a href='/tutorials/cs50/data-structures-and-algorithms'>
                  <img
                    src='https://via.placeholder.com/600x380'
                    className='rounded-lg w-full'
                    alt='Data Structures and Algorithms'
                  />
                </a>
                <div className='pt-2 text-sm flex items-center justify-between'>
                  <span className=' text-blue-600 dark:text-sky-500 font-semibold'>
                    Lesson {/* */}2
                  </span>
                  <span className='text-sm text-gray-700 dark:text-gray-400 font-semibold '>
                    5:00:45
                  </span>
                </div>
                <h3 className=' block text-gray-800 dark:text-gray-50 text-lg font-medium'>
                  <a href='/tutorials/cs50/data-structures-and-algorithms'>
                    Data Structures and Algorithms
                  </a>
                </h3>
                <p>
                  We will cover fundamental concepts pertaining to memory,
                  complexity analysis, and more.
                </p>
              </div>
            </li>
            <li>
              <div className='space-y-2 sm:max-w-sm'>
                <a href='/tutorials/cs50/sql-and-nosql-databases'>
                  <img
                    src='https://via.placeholder.com/600x380'
                    className='rounded-lg w-full'
                    alt='Sql and NoSql Databases'
                  />
                </a>
                <div className='pt-2 text-sm flex items-center justify-between'>
                  <span className=' text-blue-600 dark:text-sky-500 font-semibold'>
                    Lesson {/* */}3
                  </span>
                  <span className='text-sm text-gray-700 dark:text-gray-400 font-semibold '>
                    3:20:45
                  </span>
                </div>
                <h3 className=' block text-gray-800 dark:text-gray-50 text-lg font-medium'>
                  <a href='/tutorials/cs50/sql-and-nosql-databases'>
                    Sql and NoSql Databases
                  </a>
                </h3>
                <p>
                  In this video we will learn the difference between SQL, and
                  NoSQL, and how to deal with both of them.
                </p>
              </div>
            </li>
            <li>
              <div className='space-y-2 sm:max-w-sm'>
                <a href='/tutorials/cs50/computer-architecture'>
                  <img
                    src='https://via.placeholder.com/600x380'
                    className='rounded-lg w-full'
                    alt='Computer Architecture'
                  />
                </a>
                <div className='pt-2 text-sm flex items-center justify-between'>
                  <span className=' text-blue-600 dark:text-sky-500 font-semibold'>
                    Lesson {/* */}4
                  </span>
                  <span className='text-sm text-gray-700 dark:text-gray-400 font-semibold '>
                    1:12:29
                  </span>
                </div>
                <h3 className=' block text-gray-800 dark:text-gray-50 text-lg font-medium'>
                  <a href='/tutorials/cs50/computer-architecture'>
                    Computer Architecture
                  </a>
                </h3>
                <p>
                  You will how learn to design the computer architecture of
                  complex modern microprocessors.
                </p>
              </div>
            </li>
            <li>
              <div className='space-y-2 sm:max-w-sm'>
                <a href='/tutorials/cs50/discrete-math'>
                  <img
                    src='https://via.placeholder.com/600x380'
                    className='rounded-lg w-full'
                    alt='Discrete Math'
                  />
                </a>
                <div className='pt-2 text-sm flex items-center justify-between'>
                  <span className=' text-blue-600 dark:text-sky-500 font-semibold'>
                    Lesson {/* */}5
                  </span>
                  <span className='text-sm text-gray-700 dark:text-gray-400 font-semibold '>
                    1:45:30
                  </span>
                </div>
                <h3 className=' block text-gray-800 dark:text-gray-50 text-lg font-medium'>
                  <a href='/tutorials/cs50/discrete-math'>Discrete Math</a>
                </h3>
                <p>
                  What is discrete mathematics, and what are the main concepts
                  of discrete mathematics ..etc.
                </p>
              </div>
            </li>
            <li>
              <div className='space-y-2 sm:max-w-sm'>
                <a href='/tutorials/cs50/javascript-programming-language'>
                  <img
                    src='https://via.placeholder.com/600x380'
                    className='rounded-lg w-full'
                    alt='JavaScript programming language'
                  />
                </a>
                <div className='pt-2 text-sm flex items-center justify-between'>
                  <span className=' text-blue-600 dark:text-sky-500 font-semibold'>
                    Lesson {/* */}6
                  </span>
                  <span className='text-sm text-gray-700 dark:text-gray-400 font-semibold '>
                    4:30:00
                  </span>
                </div>
                <h3 className=' block text-gray-800 dark:text-gray-50 text-lg font-medium'>
                  <a href='/tutorials/cs50/javascript-programming-language'>
                    JavaScript programming language
                  </a>
                </h3>
                <p>
                  We wil cover the basic of JavaScript, and how it’s works, and
                  you will learn OOP.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ForumSection
