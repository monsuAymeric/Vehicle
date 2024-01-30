import fetchData from './app';
const myQuery = 'SELECT * FROM colors'; // Replace with your actual SQL query.

fetchData(myQuery)
    .then(data => console.log(data))  // Handle successful response.
    .catch(err => console.error(err)); // Handle errors.