import React from 'react'

export default function Render(data) {
  return (
    <div>
    <ul>
      {data.ninjas.map( (ninja, index) => 
          <li key={index}>
              <span className={ninja.available}></span>
              <span className="name">{ninja.name}</span>
              <span className="rank">{ninja.rank}</span>
              <span className="dist">{Math.floor(ninja.dist.calculated * 1000)} km</span>
          </li>
          )}
    </ul>
  </div>
  )
}
