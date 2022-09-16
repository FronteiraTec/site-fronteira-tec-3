import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logomarcaFronteiraTec from '../../Assets/Logomarca/logoFronteiraTEC.png'
import { AnimatedOnScroll } from 'react-animated-css-onscroll'

const navigation = [
  { name: 'Home', href: '#Home' },
  { name: 'Sobre nós', href: '#AboutUs' },
  { name: 'Serviços', href: '#Services' },
  { name: 'Membros', href: '#Members' },
  { name: 'Contatos', href: '#' }
]

export function Navbar() {
  return (
    <Popover>
      <nav
        className="relative flex items-center justify-between top-5 z-10"
        aria-label="Global"
      >
        <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
          <div className="flex w-full items-center justify-between md:w-auto">
            <a href="#Home">
              <AnimatedOnScroll animationIn="rollIn">
                <img
                  className="w-auto lg:h-28 h-16"
                  src={logomarcaFronteiraTec}
                  alt="Logomarca Fronteira Tec, com um F no meio de vários circulos."
                />
              </AnimatedOnScroll>
            </a>

            <div className="-mr-2 flex items-center md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-gray-400 focus:outline-none focus:none">
                <Bars3Icon
                  className="lg:h-10 lg:w-10 h-7 w-7 mr-10"
                  aria-hidden="true"
                />
              </Popover.Button>
            </div>
          </div>
        </div>
        <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
          {navigation.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="font-semibold text-gray-400 text-[17px] hover:font-bold hover:text-gray-50"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="overflow-hidden rounded-lg bg-neutral-800 shadow-md">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-neutral-800 p-2 text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close main menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-400 hover:text-gray-700"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
