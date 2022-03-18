import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'
import {edit} from 'react-icons-kit/feather/edit'
import "./App.css"

export const View = ({Details,deleteDetails,handleEdit}) => {
     
    
    return Details.map(detail=>(
        <>
        <tr key={detail.id} >
            <td>{detail.id}</td>
            <td>{detail.nameList}</td>
            <td>{detail.emailList}</td>
            <td>{detail.phoneList}</td>
            <td>{detail.dobList}</td>
            <td>{detail.cityList}</td>
            <td>{detail.districtList} </td>
            <td>{detail.proList}</td>
            <td>{detail.conList}</td>
            <td className='delete-btn' onClick={()=>deleteDetails(detail.id)}>
                <Icon icon={trash}/>
            </td>   
            <td className='edit-btn' onClick={()=>handleEdit(Details,detail.id)}>
                <Icon icon={edit}/>
            </td>         
        </tr>
         
        
        </>          
    
))
}