import "./App.css"
import React from 'react'
// import {Icon} from 'react-icons-kit'
// import {edit} from 'react-icons-kit/feather/edit'

export default function Profile() {
  // const id = localStorage.getItem('id');
  return (
    
    <main >
      <h2>Profile</h2>
       <table className='table' >
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone number</th>
                    <th>DOB</th>
                    <th>City</th>
                    <th>District</th>
                    <th>Province</th>
                    <th>Country</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
        
                  <tr >
                  
                  {/* Details.map(detail=>(
                    <td>{detail.id}</td>
                    <td>{detail.nameList}</td>
                  <td>{detail.emailList}</td>
                  <td>{detail.phoneList}</td>
                  <td>{detail.dobList}</td>
                  <td>{detail.cityList}</td>
                  <td>{detail.districtList} </td>
                  <td>{detail.proList}</td>
                  <td>{detail.conList}</td>  
                  <td className='edit-btn' onClick = "">
                      <Icon icon={edit}/>
                  </td>       )   */}
              </tr> 
              
                  
                </tbody>
              </table>
    </main>
  );
}


