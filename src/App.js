import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

export default function App() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts/1/comments'
    );
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Fetching data from API</h1>
      <ui>
        {data.map((item) => {
          return (
            <>
              <li>{item.id}</li>
              <li>{item.name}</li>
              <li>{item.body}</li>
            </>
          );
        })}
      </ui>
    </div>
  );
}
