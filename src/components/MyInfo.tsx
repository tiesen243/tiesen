import React from 'react'

import me from '../data/personal'

const MyInfo = () => {
  return (
    <>
      <h2 className="island-text pb-4">About me</h2>
      <p>Date of birth: {me.DoB}</p>
      <p>Place: {me.Place}</p>
      <p>College: {me.college}</p>
      <p>Favourite: {me.favourite.join(', ')}</p>
      <p>Languages: {me.languages.join(', ')}</p>
      <p>Skills: {me.skills.join(', ')}</p>
    </>
  )
}

export default MyInfo
