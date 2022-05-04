import { PencilAltIcon, EyeOffIcon, MinusCircleIcon } from '@heroicons/react/solid'
import { PlusSmIcon as PlusSmIconOutline } from '@heroicons/react/outline'

const people = [
  {
    name: 'Agostinho P. Ramos',
    title: 'Paradigm Representative',
    status: 'inside',
    email: 'janecooper@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
]

const statusStyles = {
    'inside': 'bg-green-100 text-green-800',
    'pending': 'bg-yellow-100 text-yellow-800',
    'outside': 'bg-gray-100 text-gray-800',
}

for(var i=0; i<5; i++){
    people.push(people[0]);
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
  

const Profiles = () => {
    return (
      <>
        <div className="mt-5 p-5">
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {people.map((person) => (
                <li
                key={person.email}
                className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
                >
                <div className="flex-1 flex flex-col p-8">
                    <img className="w-32 h-32 flex-shrink-0 mx-auto rounded-full" src={person.imageUrl} alt="" />
                    <h3 className="mt-6 text-gray-900 text-sm font-medium">{person.name}</h3>
                    <dl className="mt-1 flex-grow flex flex-col justify-between">
                    <dt className="sr-only">Role</dt>
                    <dd className="mt-3">
                        <span className={classNames(
                            statusStyles[person.status],
                            'inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-medium capitalize'
                        )}>
                        {person.status}
                        </span>
                    </dd>
                    </dl>
                </div>
                <div>
                    <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="w-0 flex-1 flex hover:text-blue-500 text-gray-400 ">
                        <a
                        href={`mailto:${person.email}`}
                        className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm  font-medium border border-transparent rounded-bl-lg "
                        >
                        <PencilAltIcon className="w-5 h-5" aria-hidden="true" />
                        <span className="ml-3">Edit</span>
                        </a>
                    </div>
                    <div className="-ml-px w-0 flex-1 flex hover:text-yellow-500 text-gray-400">
                        <a
                        href={`tel:${person.telephone}`}
                        className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm  font-medium border border-transparent rounded-br-lg "
                        >
                        <EyeOffIcon className="w-5 h-5" aria-hidden="true" />
                        <span className="ml-3">Disable</span>
                        </a>
                    </div>
                    <div className="-ml-px w-0 flex-1 flex hover:text-red-500 text-gray-400 ">
                        <a
                        href={`tel:${person.telephone}`}
                        className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm font-medium border border-transparent rounded-br-lg "
                        >
                        <MinusCircleIcon className="w-5 h-5 " aria-hidden="true" />
                        <span className="ml-3">Remove</span>
                        </a>
                    </div>
                    </div>
                </div>
                </li>
            ))}
        </ul>

        <button type="button"
            className="fixed right-3 bottom-3
            inline-flex items-center 
            p-3 border border-transparent 
            rounded-full shadow-sm 
            text-white bg-indigo-600 
            hover:bg-indigo-700 
            focus:outline-none 
            focus:ring-2 focus:ring-offset-2 
            focus:ring-indigo-500" >
            <PlusSmIconOutline className="h-6 w-6" aria-hidden="true" />
        </button>
        
        </div>
      </>
    )
};
  
  export default Profiles;