import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  UserAddIcon,
  UserRemoveIcon,
  UserCircleIcon,
  UserIcon,
} from '@heroicons/react/outline'

import api from '../../services/api';

const statusStyles = {
  'inside': 'bg-green-100 text-green-800',
  'Pending': 'bg-yellow-100 text-yellow-800',
  'outside': 'bg-gray-100 text-gray-800',
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Overview = () => {

    const [loading, setLoading] = useState(true);
    const [overview, setOverview] = useState([]);
    const [pagination, setPagination] = useState([]);
    const [activity, setActivity] = useState([]);
    
    useEffect(() => {
        async function recentActivity(){
            const response = await api.get("profiles/activity/", {
              headers: { }
            })
            
            setActivity( response.data.row );
            setPagination({
              size: response.data.totalRow,
              index: response.data.index,
              limit: response.data.limit
            });
            setLoading(false);
        }
        async function overviewAsync(){
            const response = await api.get("overview/", {
              headers: { }
            })
            
            setOverview([
              { 
                name: 'People Inside', icon: UserAddIcon, 
                background: 'bg-green-100', color: 'text-green-800', 
                number: response.data.inside, href: "/#inside" 
              },
              { 
                name: 'People Pending', icon: UserIcon, 
                background: 'bg-yellow-100', color: 'text-yellow-800', 
                number: response.data.pending, href: "/#pending" 
              },
              { 
                name: 'People Outside', icon: UserRemoveIcon, 
                background: 'bg-gray-100', color: 'text-gray-800', 
                number: response.data.outside, href: "/#outside" 
              },
            ]);
        }
    
        overviewAsync();
        recentActivity();
    }, [])
    
    return (
      <>
        <div className="mt-5 p-5">

          <div className="w-full">
            { loading ?
              <>
                
              </>
              :
              <>
                <h2 className="text-lg leading-6 font-medium mb-5 text-gray-900">Overview</h2>
                <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {/* Card */}
                  {overview.map((card) => (
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
                          <Link to={card.href} className="font-medium text-cyan-700 hover:text-cyan-900">
                            View all
                          </Link>
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
                          {activity.map((act) => (
                            <tr key={act.id} className="bg-white">
                              <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                <div className="flex">
                                  <Link to={act.href} className="group inline-flex space-x-2 truncate text-sm">
                                    <UserCircleIcon
                                      className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                      aria-hidden="true"
                                    />
                                    <p className="text-gray-500 truncate group-hover:text-gray-900">
                                      {act.name}
                                    </p>
                                  </Link>
                                </div>
                              </td>
                              <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                <span className="text-gray-900 font-medium">{act.mac_address} </span>
                              </td>
                              <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                                <span
                                  className={classNames(
                                    statusStyles[act.status],
                                    'inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-medium capitalize'
                                  )}
                                >
                                  {act.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                <time dateTime={act.datetime}>{act.date}</time>
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
                            Showing <span className="font-medium">{ pagination.index }</span> to <span className="font-medium">{ pagination.limit }</span> of{' '}
                            <span className="font-medium">{ pagination.size }</span> results
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
              </>
            }

          </div>

        </div>
      </>
    )
  };
  
export default Overview;