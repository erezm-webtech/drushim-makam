import React from 'react';
import JobCard from './JobCard';
import '../App.css';


export default function Jobs({match}) {

  return (
    <div>
        <JobCard name={match.params.name}/>
        <JobCard name={match.params.name}/>
        <JobCard name={match.params.name}/>
    </div>
  );
}