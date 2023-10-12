import * as React from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Icon } from '@/components/atoms'

function classNames (...classes: (string | boolean)[]): string {
  return classes.filter(Boolean).join(' ')
}
interface FooterProps {
  logo?: string;
  companyName?: string;
  navigation?: any;
}
const Footer = (props: FooterProps) => {
  const { logo, companyName, navigation } = props
  return (
    <footer className='bg-gray-200'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-7xl pb-8 pt-16 sm:pt-24 px-6 lg:pt-32'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='space-y-8'>
            <img className='h-10' src={logo} alt='Company name' />
            <p className='leading-6 text-gray-600'>
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <div className='flex space-x-6'>
              {navigation.social.map((item: any) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-gray-600 hover:text-white'
                >
                  <span className='sr-only'>{item.name}</span>
                  <div className='h-6 w-6' aria-hidden='true'>
                    <Icon icon={item.icon} variant='fab' />
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className='mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='font-semibold leading-6 text-gray-600'>
                  Solutions
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {navigation.solutions.map((item: any) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='leading-6 text-gray-600 hover:text-white'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-10 md:mt-0'>
                <h3 className='font-semibold leading-6 text-gray-600'>
                  Support
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {navigation.support.map((item: any) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='leading-6 text-gray-600 hover:text-white'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='font-semibold leading-6 text-gray-600'>
                  Company
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {navigation.company.map((item: any) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='leading-6 text-gray-600 hover:text-white'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-10 md:mt-0'>
                <h3 className='font-semibold leading-6 text-gray-600'>
                  Legal
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {navigation.legal.map((item: any) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='leading-6 text-gray-600 hover:text-white'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24'>
          <p className='text-xs leading-5 text-gray-600'>
            &copy; {companyName}.
          </p>
        </div>
      </div>
    </footer>
  )
}

// const FooterSkeleton = () => {
//   return (
//     <SkeletonTheme baseColor='#cfcfcf' highlightColor='#efefef'>
//       <footer className='bg-red-600' aria-labelledby='footer-heading'>
//         <h2 id='footer-heading' className='sr-only'>
//           Footer
//         </h2>
//         <div className='mx-auto max-w-7xl pb-8 pt-16 sm:pt-24 px-6 lg:pt-32'>
//           <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
//             <div className='space-y-8'>
//               <div className='flex'>
//                 <Skeleton
//                   count={1}
//                   circle={true}
//                   width={'2.5rem'}
//                   height={'2.5rem'}
//                 />
//                 <div className='relative'>
//                   <Skeleton
//                     count={1}
//                     height={8}
//                     width={100}
//                     containerClassName='ms-2 mt-1 absolute'
//                   />
//                   <Skeleton
//                     count={1}
//                     height={6}
//                     width={80}
//                     containerClassName='m-2 !mt-4 absolute'
//                   />
//                 </div>
//               </div>
//               <div className='!mt-6'>
//                 <Skeleton count={1} height={8} />
//                 <Skeleton count={1} height={8} width={'20%'} />
//               </div>
//               <div className='flex gap-6 mt-4'>
//                 <Skeleton count={1} circle={true} width={22} height={22} />
//                 <Skeleton count={1} circle={true} width={22} height={22} />
//                 <Skeleton count={1} circle={true} width={22} height={22} />
//                 <Skeleton count={1} circle={true} width={22} height={22} />
//                 <Skeleton count={1} circle={true} width={22} height={22} />
//               </div>
//             </div>
//             <div className='mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
//               <div className='md:grid md:grid-cols-2 md:gap-8'>
//                 <div>
//                   <h3 className='font-semibold leading-6 text-gray-600'>
//                     <Skeleton count={1} height={8} width={80} />
//                   </h3>
//                   <ul role='list' className='mt-6 space-y-4'></ul>
//                 </div>
//                 <div className='mt-10 md:mt-0'>
//                   <h3 className='font-semibold leading-6 text-gray-600'>
//                     <Skeleton count={1} height={8} width={80} />
//                   </h3>
//                   <ul role='list' className='mt-6 space-y-4'></ul>
//                 </div>
//               </div>
//               <div className='md:grid md:grid-cols-2 md:gap-8'>
//                 <div>
//                   <h3 className='font-semibold leading-6 text-gray-600'>
//                     <Skeleton count={1} height={8} width={80} />
//                   </h3>
//                   <ul role='list' className='mt-6 space-y-4'></ul>
//                 </div>
//                 <div className='mt-10 md:mt-0'>
//                   <h3 className='font-semibold leading-6 text-gray-600'>
//                     <Skeleton count={1} height={8} width={80} />
//                   </h3>
//                   <ul role='list' className='mt-6 space-y-4'></ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className='mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24'>
//             <div className='flex'>
//               <Skeleton count={1} circle={true} width={8} height={8} />
//               <Skeleton
//                 count={1}
//                 circle={false}
//                 width={200}
//                 height={8}
//                 containerClassName='ms-2'
//               />
//             </div>
//           </div>
//         </div>
//       </footer>
//     </SkeletonTheme>
//   )
// }

// Footer.Skeleton = FooterSkeleton
export default Footer
