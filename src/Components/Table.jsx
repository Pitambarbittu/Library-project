import React from "react";
import Table from "react-bootstrap/Table";
// import {Bookdata} from '../Pages/Home'


function DarkExample({data}) {
  function deleteRow(r){
    const rowindex= r.target.parentNode.parentNode.rowIndex;
    // console.log(rowindex-1);
    const tbody= document.getElementsByTagName('tbody')[0];
    tbody.deleteRow(rowindex-1);
    let bookdata=data;
    bookdata.splice(rowindex-1,1)
    // console.log(bookdata)
    localStorage.setItem('data', JSON.stringify(bookdata))
  }


//   console.log(data)

  
  return (
    <Table  striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>S No.</th>
          <th>Book Name</th>
          <th>Author</th>
          <th>Section</th>
          <th>Delete  <i className="fa-solid fa-trash-can" ></i></th>
        </tr>
      </thead>
      <tbody>
     
        {
           data.map((val,i)=>{
            return(
              <tr key={i}>
          <td>{i+1}</td>
          <td >{val.bookname}</td>
          <td>{val.author}</td>
          <td>{val.type}</td>
          <td className='h5 text-center'>
          <i className="fa-solid fa-trash-can" onClick={(e)=>{
            deleteRow(e)
          }}></i> </td>
         </tr>
            )
           })
        }
      </tbody>
    </Table>
  );
}

export default DarkExample;

 
