import React from 'react'

const page = ({params}) => {
  return (
    <div>
      <h1>hello {params.name}</h1>
    </div>
  )
}

export default page
