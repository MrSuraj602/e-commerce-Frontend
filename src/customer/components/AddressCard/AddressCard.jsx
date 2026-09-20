import React from 'react'

const AddressCard = ({ address }) => {
  return (
    <div className="w-full text-right text-gray-700">
        <p className="text-lg font-medium text-gray-800">{address?.firstName ?? 'undefined'} {address?.lastName ?? 'undefined'}</p>
        <p className="mt-3 text-gray-500">"</p>
        <div className="mt-4">
            <p className="text-sm font-semibold text-gray-600">Phone Number</p>
            <p className="text-gray-500">{address?.mobile ?? 'undefined'}</p>
        </div>
    </div>
  )
}

export default AddressCard