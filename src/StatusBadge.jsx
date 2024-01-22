import React from 'react'

const StatusBadge = ({ status = 'Test' }) => {
    return (
        <div className='absolute top-3 right-3 text-sm bg-black/30 text-white rounded-2xl px-3 py-1'>
            {status}
        </div>
    )
}

export default StatusBadge
