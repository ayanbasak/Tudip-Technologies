import React from 'react';
import { Grid } from './components';

function App() {
  const userList = [
    { firstName: "Ayan", lastName:"Basak", email: "Ayan@gmail.com" },
    { firstName: "Ajay", lastName:"Rao", email: "Ajay@gmail.com" },
    { firstName: "Ajaz", lastName:"Khan", email: "Ajaz@gmail.com" },
    { firstName: "Akshay", lastName:"Kumar", email: "Akshay@gmail.com" },
    { firstName: "Adoor", lastName:"Bhasi", email: "Adoor@gmail.com" },
    { firstName: "Asif", lastName:"Ali", email: "Asif@gmail.com" },
    { firstName: "Amol", lastName:"Palekar", email: "Amol@gmail.com" },
    { firstName: "Amit", lastName:"Sial", email: "Amit@gmail.com" },
    { firstName: "Barun", lastName:"Sobti", email: "Barun@gmail.com" },
    { firstName: "Bharath", lastName:"Gopi", email: "Bharath@gmail.com" },
    { firstName: "Nana", lastName:"Patekar", email: "Nana@gmail.com" },
    { firstName: "Raj", lastName:"Kapoor", email: "Raj@gmail.com" },
  ]

  return (
    <React.Fragment>
      {userList.map((user, i) => (
        <Grid row key={i} justify="center" alignItems="center">
          <Grid column sm={12} md={4} lg={3}>
            <p> First Name: {user.firstName} </p>
          </Grid>
          <Grid column sm={12} md={4} lg={3}>
            <p> Last Name: {user.lastName} </p>
          </Grid>
          <Grid column sm={12} md={4} lg={3}>
            <p> Email: {user.email} </p>
          </Grid>
        </Grid>
      ))}  
    </React.Fragment>
  );
}

export default App;

