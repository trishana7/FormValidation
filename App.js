import React,{useState , useEffect} from "react";
import "./App.css"
import { View } from './View';
// import {Edit} from "./Edit";
import {Link} from 'react-router-dom';

// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('Details');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

function  App () {

  
  //main array of object state || detail state || details array of object
  const[Details, setdetails] = useState((getDatafromLS()));  
  
  //input field states
  const[id, setid] = useState("");
  const[nameList, setnameList] = useState("");
  const[emailList, setemailList] = useState("");
  const[phoneList, setphoneList] = useState("");
  const[dobList, setdobList] = useState("");
  const[cityList, setcityList] = useState("");
  const[districtList, setdistrictList] = useState("");
  const[proList, setproList] = useState("");
  const[conList, setconList] = useState("");


  const itemEventid = (event) => {
    setid(event.target.value);
   
  };
   const itemEventname = (event) => {
    setnameList(event.target.value);
   
  };
   const itemEventemail = (event) => {
    setemailList(event.target.value);
   
  };

  const itemEventphone = (event) => {
    setphoneList(event.target.value);
   
  };
  const itemEventdob = (event) => {
    setdobList(event.target.value);
   
  };
  const itemEventcity = (event) => {
    setcityList(event.target.value);
   
  };
  const itemEventdist = (event) => {
    setdistrictList(event.target.value);
   
  };
  const itemEventpro = (event) => {
    setproList(event.target.value);
   
  };
  const itemEventcon = (event) => {
    setconList(event.target.value);
   
  };

// form validation
  function validateForm()
  {
      let phone = document.forms["myForm"]["phone"].value;
      // name must be requires
      if (phone.length < 7) 
      {
        alert("Phone number must be at least 7 digits");
        const status = false
        return status;
      } 
      
      
  } 
  


  //form submit event
  const handleAddData = (e)=>{
   
    validateForm();
  
    e.preventDefault();
    // creating a detail object
    let  detail = {
      id: id,
      nameList: nameList,
      emailList: emailList,
      phoneList: phoneList,
      dobList: dobList,
      cityList: cityList,
      districtList: districtList,
      proList: proList,
      conList: conList

    }
    setdetails([...Details,detail]);
    setid('');
    setnameList('');
    setemailList('');
    setphoneList('');
    setdobList('');
    setcityList('');
    setdistrictList('');
    setproList('');
    setconList('');
    
  }


  // delete book from LS
  const deleteDetails=(id)=>{
    const filteredDetails=Details.filter((element)=>{
      return element.id !== id
    })
    setdetails(filteredDetails);
  }

  // saving data to local storage
  useEffect(()=>{
    
    localStorage.setItem('Details',JSON.stringify(Details));
  },[Details])


// edit book from LS

const [editForm, setEditForm]=useState(false);
const handleEdit = (detail,id) =>{
    
    console.log('edit');
    setEditForm(true);
    setid(detail.id);
    setnameList(detail.nameList);
    setemailList(detail.emailList);
    setphoneList(detail.phoneList);
    setdobList(detail.dobList)
    setcityList(detail.cityList);
    setdistrictList(detail.districtList);
    setproList(detail.proList);
    setconList(detail.conList);
  }

   const handleEditSubmit=(e)=>{
      e.preventDefault();
      let details = [...Details];
      let detail = details[id];
      
      detail.id = id ;
      detail.nameList=nameList;
      detail.emailList = emailList;
      detail.phoneList = phoneList;
      detail.dobList = dobList;
      detail.cityList = cityList;
      detail.districtList = deleteDetails;
      detail.proList = proList;
      detail.conList = conList;
      // after manipulating item, saving it at the same index in items
      details[id]=detail;
      // updating todos with items
      setdetails(details);
      setid('');
      setnameList('');
      setemailList('');
      setphoneList('');
      setdobList('');
      setcityList('');
      setdistrictList('');
      setproList('');
      setconList('');
    }

  <script>

  </script>

 return (
   
  <>
    <div className="main_div">
      <div className="center_div">
         {editForm===false&&(
           
        <form name = "myForm" onSubmit={handleAddData}>
          <h1>Form</h1>
            <br/>
          <table className="table1">
            <tr>
              <td>
                 <label >Id:</label>
              </td>
              <td>
                <input type="text"  value = {id} onChange={itemEventid} />
              </td>
            </tr>
            <tr>
              <td>
                 <label >Name:</label>
              </td>
              <td>
                <input type="text"  value = {nameList} onChange={itemEventname} name="name" required/>
              </td>
            </tr>
            <tr>
              <td><label>Email:</label></td>
              <td><input type="email" value = {emailList} onChange={itemEventemail} name = "email" required/></td>
            </tr>
           
            <tr>
              <td><label >Phone: </label></td>
              <td><input type="number" value = {phoneList}  onChange={itemEventphone} name="phone" required/></td>
            </tr>
            <tr>
              <td><label >DOB: </label></td>
              <td><input type="text" value = {dobList} onChange={itemEventdob} name = "dob" /></td>
            </tr>
            <tr>
              <td><label >Address </label></td>
            </tr>
            <tr>
              <td> <label>City: </label></td>
              <td><input type="text" value = {cityList} onChange={itemEventcity} name="city" /></td>
            </tr>
            <tr>
              <td><label >District: </label></td>
              <td><input type="text" value = {districtList} onChange={itemEventdist} name= "dist"/></td>
            </tr>
            <tr>
              <td><label for="province">Province: </label></td>
              <td>
                <select name="province" id="province" value = {proList} onChange={itemEventpro}>
                  <option value = "Province-1" >Province-1</option>
                  <option value = "Province-2" >Province-2</option>
                  <option value = "Province-3" >Province-3</option>
                  <option value = "Province-4" >Province-4</option>
                  <option value = "Province-5" >Province-5</option>
                  <option value = "Province-6" >Province-6</option>
                  <option value = "Province-7" >Province-7</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label for="country"> Country: </label></td>
              <td>
                <select name="country" value = {conList} onChange={itemEventcon}id="country">
                  <option value = "Nepal" >Nepal</option>
                  <option value = "India" >India</option>
                  <option value = "China" >China</option>
                  <option value = "Japan" >Japan</option>
                </select>
              </td>
            </tr>
            <tr>
              <td></td>
              <td><button type="submit">Submit</button></td>
            </tr> 
          </table>
        </form>
         )}

         {/* edit form */}
         
          {editForm===true&&(
        <form  onSubmit={handleEditSubmit} name = "myForm">
          <h1>Edit form</h1>
            <br/>
          <table className="table1">
            <tr>
              <td>
                 <label >Id:</label>
              </td>
              <td>
                <input type="text"  value = {id} onChange={itemEventid} required/>
              </td>
            </tr>
            <tr>
              <td>
                 <label >Name:</label>
              </td>
              <td>
                <input type="text"  value = {nameList} onChange={itemEventname} name = "name"/>
              </td>
            </tr>
            <tr>
              <td><label>Email:</label></td>
              <td><input type="email" value = {emailList} onChange={itemEventemail} name = "email"/></td>
            </tr>
           
            <tr>
              <td><label >Phone: </label></td>
              <td><input type="number" value = {phoneList} onChange={itemEventphone} name="phone"/></td>
            </tr>
            <tr>
              <td><label >DOB: </label></td>
              <td><input type="text" value = {dobList} onChange={itemEventdob} name ="dob" /></td>
            </tr>
            <tr>
              <td><label >Address </label></td>
            </tr>
            <tr>
              <td> <label>City: </label></td>
              <td><input type="text" value = {cityList} onChange={itemEventcity} name="city" /></td>
            </tr>
            <tr>
              <td><label >District: </label></td>
              <td><input type="text" value = {districtList} onChange={itemEventdist} name="dist" /></td>
            </tr>
            <tr>
              <td><label for="province">Province: </label></td>
              <td>
                <select name="province" id="province" value = {proList} onChange={itemEventpro}>
                  <option value = "Province-1" >Province-1</option>
                  <option value = "Province-2" >Province-2</option>
                  <option value = "Province-3" >Province-3</option>
                  <option value = "Province-4" >Province-4</option>
                  <option value = "Province-5" >Province-5</option>
                  <option value = "Province-6" >Province-6</option>
                  <option value = "Province-7" >Province-7</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label for="country"> Country: </label></td>
              <td>
                <select name="country" value = {conList} onChange={itemEventcon}id="country">
                  <option value = "Nepal" selected>Nepal</option>
                  <option value = "India" >India</option>
                  <option value = "China" >China</option>
                  <option value = "Japan" >Japan</option>
                </select>
              </td>
            </tr>
            <tr>
              <td></td>
              <td><button type="submit">Update</button></td>
            </tr> 
          </table>
        </form>
         )}
        <br/> <br/>
         <div >
          {Details.length>0&&<>
            <div >
              <table className='table'>
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
                    <th>Delete</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  <View Details={Details} deleteDetails={deleteDetails} handleEdit= {handleEdit}/>
                </tbody>
              </table>
              
            </div>
            
          </>}
          {Details.length < 1 && <div>No details are added yet</div>}
       
           <Link to='/profile'> <button>Profile</button>
      </Link>
        </div>

      </div>
    </div>
       
    
     
      {/* <Profile/> */} 
       
      
     
     </>
     
    
  );
  
}

export default App;
