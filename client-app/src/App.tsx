import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { List, Header } from 'semantic-ui-react';
import { useState, useEffect } from 'react';

function App() {
  const [activities, setActivities] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5199/api/activities").then(response => {
      console.log(response)
      setActivities(response.data)
    })
  }, [])
  return (
    <div className="App">
      <Header as="h2" icon='users' content="Reactivities"></Header>
      <List>
        {activities.map((activity: any) => (
          <List.Item key={activity.id}>
            {activity.title}
          </List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
