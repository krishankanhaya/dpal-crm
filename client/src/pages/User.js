import React from 'react'
import '../styles/Profile.css'
// import ProfilePic from '../assets/images/ProfilePic.jpg';
import UserTable from '../components/UserTable';

const userData = [
  { id: 1, Action: 'Vew-Edit', 'Lead Assign': 'Rinku', 'Customer Name': 'krishan', 'Email Id': 'krishan@gmail.com', 'Mobile No.': '1234567890', Purpose: 'Loan Payment', 'Employee Type': 'Sanctioned', 'Loan Required': 500000,'Monthly Income':'4000', City: 'Banglore', State: 'Goa', Pincode: '123456', Source: 'Website', 'Utm Source': 'Google', Status: 'Fresh Lead', Date: '2023-04-27 17:08:01'},
  { id: 2, Action: 'view-Edit', 'Lead Assign': 'Rinku', 'Customer Name': 'krishan', 'Email Id': 'krishan@gmail.com', 'Mobile No.': '1234567890', 'Purpose': 'Loan Payment', 'Employee Type': 'Sanctioned', 'Loan Required': 500000,'Monthly Income':'4000', City: 'Banglore', State: 'Goa', Pincode: '123456', Source: 'Website', 'Utm Source': 'Google', Status: 'Fresh Lead', Date: '2023-04-27 17:08:01'},
  { id: 3, Action: 'view-Edit', 'Lead Assign': 'Rinku', 'Customer Name': 'krishan', 'Email Id': 'krishan@gmail.com', 'Mobile No.': '1234567890', 'Purpose': 'Loan Payment', 'Employee Type': 'Sanctioned', 'Loan Required': 500000,'Monthly Income':'4000', City: 'Banglore', State: 'Goa', Pincode: '123456', Source: 'Website', 'Utm Source': 'Google', Status: 'Fresh Lead', Date: '2023-04-27 17:08:01'},
  { id: 4, Action: 'view-Edit', 'Lead Assign': 'Rinku', 'Customer Name': 'krishan', 'Email Id': 'krishan@gmail.com', 'Mobile No.': '1234567890', 'Purpose': 'Loan Payment', 'Employee Type': 'Sanctioned', 'Loan Required': 500000,'Monthly Income':'4000', City: 'Banglore', State: 'Goa', Pincode: '123456', Source: 'Website', 'Utm Source': 'Google', Status: 'Fresh Lead', Date: '2023-04-27 17:08:01'},
  { id: 5, Action: 'view-Edit', 'Lead Assign': 'Rinku', 'Customer Name': 'krishan', 'Email Id': 'krishan@gmail.com', 'Mobile No.': '1234567890', 'Purpose': 'Loan Payment', 'Employee Type': 'Sanctioned', 'Loan Required': 500000,'Monthly Income':'4000', City: 'Banglore', State: 'Goa', Pincode: '123456', Source: 'Website', 'Utm Source': 'Google', Status: 'Fresh Lead', Date: '2023-04-27 17:08:01'},
  { id: 6, Action: 'view-Edit', 'Lead Assign': 'Rinku', 'Customer Name': 'krishan', 'Email Id': 'krishan@gmail.com', 'Mobile No.': '1234567890', 'Purpose': 'Loan Payment', 'Employee Type': 'Sanctioned', 'Loan Required': 500000,'Monthly Income':'4000', City: 'Banglore', State: 'Goa', Pincode: '123456', Source: 'Website', 'Utm Source': 'Google', Status: 'Fresh Lead', Date: '2023-04-27 17:08:01'},
  { id: 7, Action: 'view-Edit', 'Lead Assign': 'Rinku', 'Customer Name': 'krishan', 'Email Id': 'krishan@gmail.com', 'Mobile No.': '1234567890', 'Purpose': 'Loan Payment', 'Employee Type': 'Sanctioned', 'Loan Required': 500000,'Monthly Income':'4000', City: 'Banglore', State: 'Goa', Pincode: '123456', Source: 'Website', 'Utm Source': 'Google', Status: 'Fresh Lead', Date: '2023-04-27 17:08:01'},
  { id: 8, Action: 'view-Edit', 'Lead Assign': 'Rinku', 'Customer Name': 'krishan', 'Email Id': 'krishan@gmail.com', 'Mobile No.': '1234567890', 'Purpose': 'Loan Payment', 'Employee Type': 'Sanctioned', 'Loan Required': 500000,'Monthly Income':'4000', City: 'Banglore', State: 'Goa', Pincode: '123456', Source: 'Website', 'Utm Source': 'Google', Status: 'Fresh Lead', Date: '2023-04-27 17:08:01'},
  { id: 9, Action: 'view-Edit', 'Lead Assign': 'Rinku', 'Customer Name': 'krishan', 'Email Id': 'krishan@gmail.com', 'Mobile No.': '1234567890', 'Purpose': 'Loan Payment', 'Employee Type': 'Sanctioned', 'Loan Required': 500000,'Monthly Income':'4000', City: 'Banglore', State: 'Goa', Pincode: '123456', Source: 'Website', 'Utm Source': 'Google', Status: 'Fresh Lead', Date: '2023-04-27 17:08:01'},
  { id: 10, Action: 'view-Edit', 'Lead Assign': 'Rinku', 'Customer Name': 'krishan', 'Email Id': 'krishan@gmail.com', 'Mobile No.': '1234567890', 'Purpose': 'Loan Payment', 'Employee Type': 'Sanctioned', 'Loan Required': 500000,'Monthly Income':'4000', City: 'Banglore', State: 'Goa', Pincode: '123456', Source: 'Website', 'Utm Source': 'Google', Status: 'Fresh Lead', Date: '2023-04-27 17:08:01'},
];

function User() {
  return (
    <div style={{ width: '90%', marginLeft: '5%', marginTop: '1rem'}}>
      <UserTable data={userData} />
    </div>
  )
}

export default User;