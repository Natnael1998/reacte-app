import React from 'react'

const People = (props) => {
  const {image,id,age,name} = props.person;
  return (
    <>
    <div className='p'>
      <figure>
        <img src={image}></img>
      </figure>
    <div>
      <h3>{name}</h3>
      <h4>{age}</h4>
      </div>

    </div>
    
    
    </>
  )
}

export default People