import React from 'react';
import Cards from './Cards';
import LeadReport from './LeadReport';


const Home = () => {
  return (
    <div>
      <div style={{'marginTop': '4rem','display': 'flex', 'flexDirection': 'row', 'justifyContent': 'space-evenly'}}>
        <Cards name='Business Overview' />
        <Cards name='Business Analytics' />
        <Cards name='Sanction 360°' />
        <Cards name='Recovery 360°' />
      </div>
      <div class='lead_report'>
        <LeadReport />
      </div>
    </div>
  )
}

export default Home