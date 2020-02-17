import React, { useState } from 'react';
// import styled from 'styled-components';
import Results from './Results';

const SearchApi = () => {
    const [data, setData] = useState({});
    const [username, setUsername] = useState("");
    const [repositories, setRepositories] = useState([]);

    const handleSearch = e => {
        setUsername(e.target.value);
    };

    const handleSubmit = async e => {

        const profile = await fetch(`https://api.github.com/users/${username}`)
        const profileJson = await profile.json();

        const repositories = await fetch(profileJson.repos_url);
        const repoJson = await repositories.json();

        if(profileJson) {
            setData(profileJson);
            setRepositories(repoJson);
        }
    }

      return (
          <div style={{padding: 30, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <div className="ui search">
                  <div className="ui icon input">
                      <i className='search icon'></i>
              <input placeholder="Find username" type='text' value={username} onChange={handleSearch} />
                  </div>
              <button className="ui secondary button" type='submit' onClick={handleSubmit}>
                  <i className="github icon"></i>
                  Search
              </button>      
              <Results data={data} repositories={repositories} />
              </div>
          </div>
        );
}

export default SearchApi;
