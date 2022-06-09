import React from 'react'

function Showtodo(props) {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-6'>
              <h6>{props.task}</h6>
            </div>
            <div className='col-6'>
           <button onClick={()=>{
                    props.onSelcet(props.id)}}>x</button>
            </div>
        </div>


    </div>
  )
}

export default Showtodo