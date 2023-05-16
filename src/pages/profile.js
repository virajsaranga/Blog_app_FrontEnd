import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserProfilePage = () => {
  const { id } = useParams(); // get user id from URL params
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => setUser(response.data))
      .catch(error => console.log(error));
  }, [id]);

  return (
    <div className="user-profile">
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
      <h2>Posts by {user.name}</h2>
      {/* Add code to display posts by the user */}
    </div>
  );
};

export default UserProfilePage;
