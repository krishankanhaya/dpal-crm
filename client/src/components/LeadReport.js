import React from 'react'

function LeadReport() {
  return (
    <>
      <div style={{width: '40%', marginLeft: '30%', marginTop: '2rem', fontSize: '1.2rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}} >
        <select name='report' id='report'>
            <option value={'lead_report'}>Lead Report</option>
            <option value={'loan'}>Loan Report</option>
            <option value={'recovery_report'}>Recovery Report</option>
        </select>
        <input type='date' placeholder='Start Date' style={{width: '9rem', height: '2rem', fontSize: '1.2rem'}} />
        <input type='date' placeholder='End Date' style={{width: '9rem', height: '2rem', fontSize: '1.2rem'}} />
        </div>
        <button style={{marginLeft: '43.8%', marginTop: '2rem', width: '9rem', height: '2rem', fontSize: '1.2rem', backgroundColor:'blue', border:'none', borderRadius:'4px', cursor: 'pointer', color: 'white'}} >Search</button>
    </>
  )
}

export default LeadReport