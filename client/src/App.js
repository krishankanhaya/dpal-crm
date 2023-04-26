import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';

// importing pages
import AllLeads from './pages/All_Leads';
import Approved from './pages/Approved';
import Bank_Update from './pages/Bank_Update';
import Branch_Wise_Target from './pages/Branch_Wise_Target';
import Call_Back_Leads from './pages/Call_Back_Leads';
import Disbursed from './pages/Disbursed';
import Docs_Received from './pages/Docs_Received';
import E_Sign_Docs_List from './pages/E_Sign_Doc_List';
import Incomplete_Docs from './pages/Incomplete_Docs';
import Intrested_Leads from './pages/Intrested_Leads';
import Less_Salary from './pages/Less_Salary';
import Mandate_Registration from './pages/Mandate_Registration';
import No_Answer_Leads from './pages/No_Answer_Leads';
import Not_Eligible_Leads from './pages/Not_Eligible_Leads';
import Rejected from './pages/Rejected';
import Sanction_Wise_Target from './pages/Sanction_Wise_Target';
import User from './pages/User.js';
import Video_Kyc_List from './pages/Video_Kyc_List';
import Fresh_Leads from './pages/Fresh_Leads';
import Profile from './pages/Profile';
import Account from './pages/Account';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/'  element={<Home />}/>
          <Route path='/All_Leads'  element={<AllLeads />}/>
          <Route path='/Approved'  element={<Approved />}/>
          <Route path='/Bank_Update'  element={<Bank_Update />}/>
          <Route path='/Branch_Wise_Target'  element={<Branch_Wise_Target />}/>
          <Route path='/Call_Back_Leads'  element={<Call_Back_Leads />}/>
          <Route path='/Disbursed'  element={<Disbursed />}/>
          <Route path='/Docs_Received'  element={<Docs_Received />}/>
          <Route path='/E-Sign_Doc_List'  element={<E_Sign_Docs_List />}/>
          <Route path='/Incomplete_Docs'  element={<Incomplete_Docs />}/>
          <Route path='/Intrested_Leads'  element={<Intrested_Leads />}/>
          <Route path='/Less_Salary'  element={<Less_Salary />}/>
          <Route path='/Mandate_Registration'  element={<Mandate_Registration />}/>
          <Route path='/No_Answer_Leads'  element={<No_Answer_Leads />}/>
          <Route path='/Not_Eligible_Leads'  element={<Not_Eligible_Leads />}/>
          <Route path='/Rejected'  element={<Rejected />}/>
          <Route path='/Sanction_Wise_Target'  element={<Sanction_Wise_Target />}/>
          <Route path='/User'  element={<User />}/>
          <Route path='/Video_Kyc_List'  element={<Video_Kyc_List />}/>
          <Route path='/Profile'  element={<Profile />}/>
          <Route path='/Account'  element={<Account />}/>
          <Route path='/Dashboard'  element={<Dashboard />}/>
          <Route path='/Fresh_Leads'  element={<Fresh_Leads />}/>
          <Route path='/Fresh_Leads'  element={<Fresh_Leads />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
