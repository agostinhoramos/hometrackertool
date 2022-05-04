import { Link } from 'react-router-dom'
import {
  UserAddIcon,
  UserRemoveIcon,
  UserCircleIcon,
  UserIcon,
} from '@heroicons/react/outline'

const cards = [
  { name: 'People Inside', icon: UserAddIcon, background: 'bg-green-100', color: 'text-green-800', number: 5 },
  { name: 'People Pending', icon: UserIcon, background: 'bg-yellow-100', color: 'text-yellow-800', number: 0 },
  { name: 'People Outside', icon: UserRemoveIcon, background: 'bg-gray-100', color: 'text-gray-800', number: 2 },
]

const statusStyles = {
  'inside': 'bg-green-100 text-green-800',
  'Pending': 'bg-yellow-100 text-yellow-800',
  'outside': 'bg-gray-100 text-gray-800',
}

const transactions = [
  {
    id: 1,
    name: 'Agostinho Ramos',
    href: '#',
    mac_address: '24:11:45:E5:5B:F9',
    status: 'inside',
    date: 'July 11, 2020',
    datetime: '2020-07-11',
  },
  {
    id: 2,
    name: 'Protásio Pina',
    href: '#',
    mac_address: '86:05:34:FA:B5:30',
    status: 'Pending',
    date: 'July 11, 2020',
    datetime: '2020-07-11',
  },
  {
    id: 3,
    name: 'Bruno Ramos',
    href: '#',
    mac_address: '22:04:11:EC:BD:5C',
    status: 'inside',
    date: 'July 11, 2020',
    datetime: '2020-07-11',
  },
  {
    id: 4,
    name: 'Gina Xavier',
    href: '#',
    mac_address: '86:05:34:FA:B5:30',
    status: 'inside',
    date: 'July 11, 2020',
    datetime: '2020-07-11',
  },
  {
    id: 5,
    name: 'Verónica Jesus',
    href: '#',
    mac_address: '24:6F:8C:78:8D:5A',
    status: 'outside',
    date: 'July 11, 2020',
    datetime: '2020-07-11',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Overview = () => {
    return (
      <>
        <div className="mt-5 p-5">

          <div className="w-full">
              <h2 className="text-lg leading-6 font-medium mb-5 text-gray-900">Overview</h2>
              <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {/* Card */}
                {cards.map((card) => (
                  <div key={card.name} className="bg-white overflow-hidden shadow rounded-lg">
                    <div className={`p-5 ${card.background}`}>
                      <div className={`flex items-center`} >
                        <div className="flex-shrink-0">
                          <card.icon className={`h-6 w-6 text-gray-400 ${card.color}`} aria-hidden="true" />
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-500 truncate">{card.name}</dt>
                            <dd>
                              <div className={`text-4xl font-medium ${card.color}`} >{card.number}</div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-5 py-3">
                      <div className="text-sm">
                        <a href={card.href} className="font-medium text-cyan-700 hover:text-cyan-900">
                          View all
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* RECENT PEOPLE */}
              <h2 className="text-lg leading-6 font-medium mb-5 mt-5 text-gray-900">Recent activity</h2>
              <div className="w-full mt-5">
                <div className="flex flex-col mt-2">
                  <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Profiles
                          </th>
                          <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            MAC address
                          </th>
                          <th className="hidden px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:block">
                            Status
                          </th>
                          <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {transactions.map((transaction) => (
                          <tr key={transaction.id} className="bg-white">
                            <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              <div className="flex">
                                <a href={transaction.href} className="group inline-flex space-x-2 truncate text-sm">
                                  <UserCircleIcon
                                    className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                  />
                                  <p className="text-gray-500 truncate group-hover:text-gray-900">
                                    {transaction.name}
                                  </p>
                                </a>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                              <span className="text-gray-900 font-medium">{transaction.mac_address} </span>
                            </td>
                            <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                              <span
                                className={classNames(
                                  statusStyles[transaction.status],
                                  'inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-medium capitalize'
                                )}
                              >
                                {transaction.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                              <time dateTime={transaction.datetime}>{transaction.date}</time>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {/* Pagination */}
                    <nav
                      className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
                      aria-label="Pagination"
                    >
                      <div className="hidden sm:block">
                        <p className="text-sm text-gray-700">
                          Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                          <span className="font-medium">20</span> results
                        </p>
                      </div>
                      <div className="flex-1 flex justify-between sm:justify-end">
                        <Link
                          to="#"
                          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                          Previous
                        </Link>
                        <Link
                          to="#"
                          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                          Next
                        </Link>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>

          </div>

        </div>
      </>
    )
  };
  
export default Overview;