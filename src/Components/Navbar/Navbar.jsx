import { Fragment, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import logomarcaFronteiraTec from '../../Assets/Logomarca/logoFronteiraTEC.png'
import { motion } from 'framer-motion'
import { useTheme } from '../../contexts/ThemeContext'

const navigation = [
  { name: 'Home', href: '/', type: 'route' },
  { name: 'Sobre nós', href: '#AboutUs', type: 'anchor' },
  { name: 'Serviços', href: '/servicos', type: 'route' },
  //{ name: 'Membros', href: '#Members', type: 'anchor' },
  { name: 'Processos Seletivos', href: '/processos-seletivos', type: 'route' },
  //{ name: 'Projetos', href: '/projetos', type: 'route' },
  { name: 'Contatos', href: '/contato', type: 'route' }
]

export function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        // Rolando para cima ou no topo - mostrar navbar
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Rolando para baixo e passou de 100px - esconder navbar
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])
  
  return (
    <Popover
      as="div"
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="bg-black/80 dark:bg-gray-900/95 backdrop-blur-md shadow-lg px-4 lg:px-8 py-3">
      <nav
        className="relative flex items-center justify-between"
        aria-label="Global"
      >
        <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
          <div className="flex w-full items-center justify-between md:w-auto">
            <Link to="/">
              <motion.div
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  className="w-auto lg:h-20 h-12"
                  src={logomarcaFronteiraTec}
                  alt="Logomarca Fronteira Tec, com um F no meio de vários circulos."
                />
              </motion.div>
            </Link>

            <div className="flex items-center md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-gray-400 focus:outline-none focus:none">
                <Bars3Icon
                  className="lg:h-10 lg:w-10 h-7 w-7 mr-10"
                  aria-hidden="true"
                />
              </Popover.Button>
            </div>
          </div>
        </div>
        <div className="hidden md:ml-10 md:flex md:items-center md:space-x-8 md:pr-4">
          {navigation.map(item => (
            item.type === 'route' ? (
              <Link
                key={item.name}
                to={item.href}
                className="font-semibold text-gray-400 dark:text-gray-300 text-[17px] hover:font-bold hover:text-gray-50 dark:hover:text-white"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="font-semibold text-gray-400 dark:text-gray-300 text-[17px] hover:font-bold hover:text-gray-50 dark:hover:text-white"
              >
                {item.name}
              </a>
            )
          ))}
          
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? (
              <SunIcon className="h-5 w-5 text-yellow-500" />
            ) : (
              <MoonIcon className="h-5 w-5 text-gray-700" />
            )}
          </button>
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
                item.type === 'route' ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-400 hover:text-gray-700"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-400 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
      </div>
    </Popover>
  )
}
