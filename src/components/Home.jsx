import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useEffect } from 'react';


export default function Home() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  function HandleSearchChange(event) {
    setSearch(event.target.value);
  }

  async function submit(e) {
    e.preventDefault()

    const response = await fetch("http://demonewspaper-001-site1.btempurl.com/api/Users/searchUsers", {
      method: 'POST',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("AccessToken")}`
       },
      body: JSON.stringify({ 
        Search : search
      })});
      
    const data = await response.json();
    setData(data);

  }


  async function fetchAllUsers() {
    const response = await fetch("http://demonewspaper-001-site1.btempurl.com/api/users/getallusers", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("AccessToken")}`
      }
    });
    
    setData(await response.json())
  }


  return (
    <div style={{"margin" : "20px"}}>
      <h3 >Login to use this function</h3>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Search user</Form.Label>
          <Form.Control placeholder="Enter search" onChange={HandleSearchChange}/>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={submit}>
          Submit
        </Button>
      </Form>
      <div>
        
        <SearchResult data = {data}/>
      </div>
    </div>
  );
}

function SearchResult(props) {
  
  return props.data.map((user, index) => (
    <div style={{"margin" : "20px", "background" : "Aqua"}}> <h5>Username: {user.username}</h5> <h5>Email: {user.email}</h5></div>
  ))
}