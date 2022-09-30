import React from 'react'
import { Button } from 'react-bootstrap'

export default function Delete() {
  async function deleteUser(e) {
    e.preventDefault()

    const response = await fetch("https://demonewspaper.azurewebsites.net/api/Users/delete", {
      method: 'DELETE',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("AccessToken")}`
       },
      });
      
    alert(await response.json());
  }

  return (    
    <div>
        <h2>Delete account</h2>
        <Button variant="danger" onClick={deleteUser}>Delete</Button>
    </div>
  )
}
