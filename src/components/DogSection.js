import React from 'react'
import DogTile from './DogTile'

const DogSection = props => {
  let dogs = props.dogs.map(dog => {
    return (
      <DogTile
      dog={dog}
      key={dog.id}
      />
    )
  })
  return (
    <div>
    <h1> Expect Dogs </h1>
    <h4>{dogs}</h4>
    </div>
  )
}

export default DogSection
