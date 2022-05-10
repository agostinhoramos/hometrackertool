import { Fragment, useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  BellIcon,
  HomeIcon,
  CalendarIcon,
  MenuAlt2Icon,
  UsersIcon,
  CogIcon,
  InformationCircleIcon,
  XIcon,
} from '@heroicons/react/outline'

const pages = [
    //{ name: 'Projects', href: '#', current: true },
]

const navigation = [
    { name: 'Overview', link: '/', icon: HomeIcon },
	{ name: 'Profiles', link: '/profiles', icon: UsersIcon },
    //{ name: 'Rule Chains', link: '/rule_chains', icon: CursorClickIcon },
    //{ name: 'Scheduler', link: '/scheduler', icon: CalendarIcon },
    //{ name: 'Integrations', link: '/integrations', icon: ChipIcon },
    { name: 'Settings', link: '/settings', icon: CogIcon },
	{ name: 'About', link: '/about', icon: InformationCircleIcon },
]
const userNavigation = [
    { name: 'Your Profile', href: '/profile' },
    { name: 'Settings', href: '/settings' },
    { name: 'Sign out', href: '/login' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}  


const Layout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    return (
        <>
            <div>
            <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
                <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                >
                <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                </Transition.Child>
                <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
                >
                <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
                    <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button
                        type="button"
                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                        >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </button>
                    </div>
                    </Transition.Child>
                    <div className="flex-shrink-0 flex items-center px-4">
                    <h3 className='font-bold text-xl text-blue-600'>Home Tracker Tool</h3>
                    </div>
                    <div className="mt-5 flex-1 h-0 overflow-y-auto">
                    
                    <nav className="px-2 space-y-1">
                        {navigation.map((item) => (
                        <Link
                            to={item.link}
                            className={classNames(
                            (location.pathname === item.link)
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                            )}
							activeClassName={"bg-gray-100 text-gray-900"}
                        >
                            <item.icon
                            className={classNames(
                                (location.pathname === item.link) ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                'mr-4 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden="true"
                            />
                            {item.name}
                        </Link>
                        ))}
                    </nav>
                    

                    </div>
                </div>
                </Transition.Child>
                <div className="flex-shrink-0 w-14" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
                </div>
            </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 bg-white overflow-y-auto">
                <div className="flex items-center mx-auto flex-shrink-0 px-4">
                <h3 className='font-bold text-xl text-blue-600'>Home Tracker Tool</h3>
                </div>
                <div className="mt-5 flex-grow flex flex-col">
                <nav className="flex-1 px-2 pb-4 space-y-1">
                    {navigation.map((item) => (
                    <Link
                        key={item.name}
                        to={item.link}
                        className={classNames(
                        (location.pathname === item.link) ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                        )}
						>
                        <item.icon
                        className={classNames(
                            (location.pathname === item.link) ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                            'mr-3 flex-shrink-0 h-6 w-6'
                        )}
                        aria-hidden="true"
                        />
                        {item.name}
                    </Link>
                    ))}
                </nav>
                </div>
            </div>
            </div>
            <div className="md:pl-64 flex flex-col flex-1">
            <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
                <button
                type="button"
                className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                onClick={() => setSidebarOpen(true)}
                >
                <span className="sr-only">Open sidebar</span>
                <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
                </button>
                <div className="flex-1 px-4 flex justify-between">
                <div className="flex-1 flex">
                    <nav className="flex" aria-label="Breadcrumb">
                    <ol className="flex items-center space-x-4">
                        <li>
                        <div>
                            <Link to="#" className="text-gray-400 hover:text-gray-500">
                            <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                            <span className="sr-only">Home</span>
                            </Link>
                        </div>
                        </li>
                        <li>
                        <div>
                            <Link to="#" className="text-gray-400 hover:text-gray-500">
                                { location.pathname }
                            </Link>
                        </div>
                        </li>
                        {pages.map((page) => (
                        <li key={page.name}>
                            <div className="flex items-center">
                            <svg
                                className="flex-shrink-0 h-5 w-5 text-gray-300"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                            >
                                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                            </svg>
                            <Link
                                to={page.href}
                                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                aria-current={page.current ? 'page' : undefined}
                            >
                                {page.name}
                            </Link>
                            </div>
                        </li>
                        ))}
                    </ol>
                    </nav>
                </div>
                <div className="ml-4 flex items-center md:ml-6">
                    <button
                    type="button"
                    className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                    <div>
                        <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="sr-only">Open user menu</span>
                        <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                            {({ active }) => (
                                <Link
                                to={item.href}
                                className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                )}
                                >
                                {item.name}
                                </Link>
                            )}
                            </Menu.Item>
                        ))}
                        </Menu.Items>
                    </Transition>
                    </Menu>
                </div>
                </div>
            </div>

            <Outlet />
            
            </div>
        </div>
        </>
    )
};

export default Layout;