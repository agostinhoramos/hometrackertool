import { Switch } from '@headlessui/react'
import React, { useEffect, useState } from 'react'
import api from '../../services/api';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Settings = () => {

    const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] = useState(true)
    const [autoUpdateApplicantDataEnabled, setAutoUpdateApplicantDataEnabled] = useState(false)
    const [settings, setSettings] = useState({})

    useEffect(() => {
      async function settingsAsync(){
          const response = await api.get("settings/", {
              params: {}
          })
          console.log( response.data );
          setSettings( response.data );
      }
      settingsAsync();
    }, [])


    return(
        <>
        <div className="mt-5 p-5">
          <div className="w-full">
            <div className="pb-5">
              <div className="px-4">
                {/* Description list with inline editing */}

                <div className="divide-y divide-gray-200">
                  <div className="space-y-1">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Local Wi-Fi network</h3>
                    <p className="max-w-2xl text-sm text-gray-500">
                      This device will takes an existing signal from a wireless router or wireless access point and rebroadcasts it to create a second network.
                    </p>
                  </div>

                  <div className="mt-6">
                    <dl className="divide-y divide-gray-200">
                      <div className="py-4">
                        <dt className="text-sm font-medium text-gray-500">SSID</dt>
                        <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <span className="flex-grow">{ "settings.network.ssid" }</span>
                          <span className="ml-4 flex-shrink-0">
                            <button
                              type="button"
                              className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                            >
                              Update
                            </button>
                          </span>
                        </dd>
                      </div>
                      <div className="py-4">
                        <dt className="text-sm font-medium text-gray-500">Password</dt>
                        <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          <span className="flex-grow">{ "pass" }</span>
                          <span className="ml-4 flex-shrink-0">
                            <button
                              type="button"
                              className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                            >
                              Update
                            </button>
                          </span>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
                <div className="mt-10 divide-y divide-gray-200">
                  <div className="space-y-1">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Account</h3>
                    <p className="max-w-2xl text-sm text-gray-500">
                      Manage how information is displayed on your account.
                    </p>
                  </div>
                  <div className="mt-6">
                    <dl className="divide-y divide-gray-200">
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt className="text-sm font-medium text-gray-500">Language</dt>
                        <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          <span className="flex-grow">English</span>
                          <span className="ml-4 flex-shrink-0">
                            <button
                              type="button"
                              className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                            >
                              Update
                            </button>
                          </span>
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                        <dt className="text-sm font-medium text-gray-500">Date format</dt>
                        <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          <span className="flex-grow">DD-MM-YYYY</span>
                          <span className="ml-4 flex-shrink-0 flex items-start space-x-4">
                            <button
                              type="button"
                              className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                            >
                              Update
                            </button>
                            <span className="text-gray-300" aria-hidden="true">
                              |
                            </span>
                            <button
                              type="button"
                              className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                            >
                              Remove
                            </button>
                          </span>
                        </dd>
                      </div>
                      <Switch.Group as="div" className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                        <Switch.Label as="dt" className="text-sm font-medium text-gray-500" passive>
                          Automatic timezone
                        </Switch.Label>
                        <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          <Switch
                            checked={automaticTimezoneEnabled}
                            onChange={setAutomaticTimezoneEnabled}
                            className={classNames(
                              automaticTimezoneEnabled ? 'bg-purple-600' : 'bg-gray-200',
                              'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-auto'
                            )}
                          >
                            <span
                              aria-hidden="true"
                              className={classNames(
                                automaticTimezoneEnabled ? 'translate-x-5' : 'translate-x-0',
                                'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                              )}
                            />
                          </Switch>
                        </dd>
                      </Switch.Group>
                      <Switch.Group
                        as="div"
                        className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200"
                      >
                        <Switch.Label as="dt" className="text-sm font-medium text-gray-500" passive>
                          Auto-update applicant data
                        </Switch.Label>
                        <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <Switch
                              checked={autoUpdateApplicantDataEnabled}
                              onChange={setAutoUpdateApplicantDataEnabled}
                              className={classNames(
                                autoUpdateApplicantDataEnabled ? 'bg-purple-600' : 'bg-gray-200',
                                'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-auto'
                              )}
                            >
                            <span
                              aria-hidden="true"
                              className={classNames(
                                autoUpdateApplicantDataEnabled ? 'translate-x-5' : 'translate-x-0',
                                'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                              )}
                            />
                          </Switch>
                        </dd>
                      </Switch.Group>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default Settings;