import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Searchbox from './Components/Searchbox'
import JobCard from './Components/JobCard'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from './firebase.config'

const App = () => {
  const [jobs, setJobs] = useState([]);

  // Fetch jobs based on search criteria
  const fetchJobs = async (criteria = {}) => {
    const { title, location, experience, type } = criteria;
    let q = query(collection(db, "jobs"));

    // Dynamically build the query based on selected criteria
    if (title) q = query(q, where("title", "==", title));
    if (location) q = query(q, where("location", "==", location));
    if (experience) q = query(q, where("experience", "==", experience));
    if (type) q = query(q, where("type", "==", type));
    if (type) q = query(q, where("location", "==",location));

    try {
      const querySnapshot = await getDocs(q);
      const tempJobs = [];
      querySnapshot.forEach((doc) => {
        tempJobs.push({ ...doc.data(), id: doc.id });
      });
      setJobs(tempJobs); 
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    fetchJobs(); 
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <Searchbox fetchJobs={fetchJobs} /> 
      {jobs.length > 0 ? (
        jobs.map((item) => <JobCard key={item.id} {...item} />)
      ) : (
        <p>No jobs found</p> // Show a message if no jobs are available
      )}
    </div>
  );
}

export default App;
