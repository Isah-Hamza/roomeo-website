import React from 'react'

const StatusBadge = ({ status = 'Test' }) => {
    return (
        <div className='text-sm bg-black/30 text-white rounded-2xl px-4 py-2'>
            {status}
        </div>
    )
}

export default StatusBadge
