import React from 'react'

function Format() {
  return (
     <div className='format'>
        <p>Animal</p>
        <h4>Select language and format</h4>
        <div>
            <p className='f-name'>Tamil</p>
            <button className='f-button'>2D</button>
      </div> 
      <div>
        <p className='f-name'>Telugu</p>
        <button className='f-button'>2D</button>
        </div>
        <div>
           <p className='f-name'>Hindi</p>
           <button className='f-button'>2D</button>
        </div> 
     </div>
  )
}
export default Format