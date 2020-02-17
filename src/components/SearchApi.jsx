import React, { useState } from 'react';
import Results from './Results';

const SearchApi = () => {
    const [data, setData] = useState({});
    const [username, setUsername] = useState("");
    const [repositories, setRepositories] = useState([]);
    // const [starredRepos, setStarredRepo] = useState([]);

    const handleSearch = e => {
        setUsername(e.target.value);
    };

    const handleSubmit = async e => {

        const profile = await fetch(`https://api.github.com/users/${username}`)
        const profileJson = await profile.json();
        console.log(profileJson);


        const repositories = await fetch(profileJson.repos_url);
        const repoJson = await repositories.json();
        console.log(repoJson)

        if(profileJson) {
            setData(profileJson);
            setRepositories(repoJson);
        }
    }

      return (
          <div>
              <input type='text' value={username} onChange={handleSearch} />
              <button type='submit' onClick={handleSubmit}>
                  Search
              </button>      
              <Results data={data} repositories={repositories} />
          </div>
        );
}

export default SearchApi;
