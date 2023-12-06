import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';


const UserList = ({ usersData }) => {
  const [users, setUsers] = useState([]);
  // Other state and useEffect logic...
useEffect(()=>{

setUsers(usersData)

},[usersData])
  return (
    <div>
      {/* Other components... */}
      <div className="user-list">
        {users
          .slice(currentPage * usersPerPage, (currentPage + 1) * usersPerPage)
          .map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
      </div>
      {/* Pagination component... */}
    </div>
  );
};

export default UserList;
