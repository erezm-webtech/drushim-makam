/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

export default function Highlights() {
  const [job, setJob] = useState("");


  const showDetails = (job) => {
    setJob(job);
    window.location = `/jobs/${job}`;
  }
  return (
      <div className="search-area">
    <Autocomplete
    onChange={(event, value) => showDetails(value.title)}
      id="highlights-demo"
      style={{ width: 300 }}
      options={jobs}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField {...params} label="משרות" variant="outlined" margin="normal" />
      )}
      renderOption={(option, { inputValue }) => {
        const matches = match(option.title, inputValue);
        const parts = parse(option.title, matches);

        return (
          <div>
            {parts.map((part, index) => (
              <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
              {part.text}
              </span>
            ))}
          </div>
        );
      }}
    />


</div>
    
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const jobs = [
  { title: 'מהדנס תוכנה' },
  { title: 'מהנדס אפליקציות' },
  { title: 'איש סיסטם' },
  { title: 'בודק אוטומציה' },
  { title: 'FullStack מפתח'},
  { title: "Php מפתח" },
  { title: 'iOS מפתח'},
  { title: 'Android מפתח'}
];