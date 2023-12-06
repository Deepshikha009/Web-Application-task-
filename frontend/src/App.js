import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserCard from './components/UserCard';
import data from './data.json'
import axios from "axios"

function App() {
  // const [usersData, setUsersData] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 20;

  // useEffect(() => {
  //   // Fetch user data from an API or other data source
  //   const fetchData = async () => {
  //     try {
  //       // Fetch user data and set it in state
  //       const response = await fetch(data);
  //       const data = await response.json();
  //       console.log(data);
  //       setUsersData(data);
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const handlePageChange = (newPage) => {
  //   setCurrentPage(newPage);
  // };

  const [getUser, setGetUser] = useState([])

  const getAllUser = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/user/getusers")
      setGetUser(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllUser();
  }, [])

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter users based on the search query



  return (
    <div>

      <div>
        <input type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <UserCard getUser={getUser} searchQuery={searchQuery} />
    </div>
  );
}

export default App;



