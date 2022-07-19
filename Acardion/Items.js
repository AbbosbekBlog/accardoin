import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

function Items({ name, text, jobs }) {
  const [icon, setIcon] = useState(false)
  return (
    <div className="box">
      <div className="flex">
        <div className="name">{name}</div>
        <button onClick={() => setIcon(!icon)}>
          {icon ? (
            <AiOutlinePlus className="plus" />
          ) : (
            <AiOutlineMinus className="minus" />
          )}
        </button>
      </div>
      <hr />
      <div className="text-content ">
        {icon && (
          <div>
            <div
              style={{
                textAlign: 'center',
                color: '#555',
                fontSize: '20px',
                marginBottom: '10px',
                fontWeight: '600',
              }}
            >
              {jobs}
            </div>
            <p>{text}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Items
