


import { Fragment, useState } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import {Bars3Icon,XMarkIcon} from '@heroicons/react/24/outline'
import { ChevronDownIcon,  } from '@heroicons/react/20/solid'
import React from 'react'
import { NavLink } from 'react-router-dom'
import {WheelIcon,BikeIcon,HelmetIcon,ShirtIcon,SpannerIcon} from '../assets/aamisicons/Icons'





const products = [
  { name: 'Bicicletas', description: 'Get a better understanding of your traffic', href: '#Bicicletas', icon:BikeIcon},
  { name: 'Repuestos', description: 'Speak directly to your customers', href: '#Repuestos', icon: WheelIcon },
  { name: 'Accesorios', description: 'Your customers’ data will be safe and secure', href: '#Accesorios', icon: HelmetIcon },
  { name: 'Indumentaria', description: 'Connect with third-party tools', href: '#Indumentaria', icon: ShirtIcon },
  { name: 'Otros', description: 'Build strategic funnels that will convert', href: '#Otros', icon: SpannerIcon },
]



export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [open,setOpen]=useState(false)




  return (
    <header className="bg-white" onMouseLeave={() => setOpen(false)}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://canaglia.com/wp-content/uploads/2019/10/Canaglia_marca_color.svg" alt="" />
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
        

          <NavLink to="/" className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </NavLink>
          <Popover className="relative" onMouseEnter={() => setOpen(true)} >
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
               <NavLink to="/Products">Tienda</NavLink>
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>
            {open && (
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
        >
          <div className="p-4">
          {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
          </div>
          <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
     
          </div>
        </div>
      )}

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
           
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <NavLink to="/nosotros" className="text-sm font-semibold leading-6 text-gray-900">
            Nosotros
          </NavLink>
          <NavLink to="/sucursales" className="text-sm font-semibold leading-6 text-gray-900">
            Sucursales
          </NavLink>
          <NavLink to="/contacto" className="text-sm font-semibold leading-6 text-gray-900">
            Contacto

          </NavLink>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink to="login" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </NavLink>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#asd" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
            
                <a
               href='#asleel'
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
               href='#asleel'
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
               href='#asleel'
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
               href='#asleel'
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}



