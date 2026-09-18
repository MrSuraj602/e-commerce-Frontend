import React from 'react'

const AddressCard = ({ address }) => {
  return (
    <div>
      <span className="font-bold opacity-60">Address Summary :</span>
        <div className="space-y-3 w-[25rem]">
            <p className="font-semibold opacity-50">{address?.firstName+" "+address?.lastName}</p>
            <p className="opacity-50">{address?.state}, {address?.streetAddress} {address?.zipCode}</p>
            <div className="space-y-1">
                <p className="font-semibold opacity-50">Phone Number</p>
                <p className="opacity-50">{address?.mobile}</p>
            </div>
        </div>
    </div>
  )
}

export default AddressCard