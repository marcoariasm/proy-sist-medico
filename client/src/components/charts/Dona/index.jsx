import React from 'react'
import { Doughnut } from 'react-chartjs-2';

const Dona = ({ data }) => {

    return (
        <>
        {/* <div className='header'>
          <h1 className='title'>Doughnut Chart</h1>
          <div className='links'>
            <a
              className='btn btn-gh'
              href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Doughnut.js'
            >
              Github Source
            </a>
          </div>
        </div> */}
        <Doughnut data={data} />
      </>
    )
}

export default Dona
