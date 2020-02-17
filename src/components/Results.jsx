import React from 'react';
// import styled from 'styled-components';

const Results = ({data, repositories}) => {
    return(
        <table className="ui center aligned padded table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Avatar</th>
                    <th>Bio</th>
                    <th>Stars</th>
                    <th>Repositories</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{!data.avatar_url ? ("") : (
                    <img className="ui small circular image" 
                    alt={data.avatar_url} 
                    src={data.avatar_url}
                    />
                    )}
                    </td>
                    <td>{data.name}</td>
                    <td>{data.bio}</td>
                    <td>
                    {repositories.map(repo => (
                            <div className="ui relaxed divided list" key={repo.name}>
                            <div className="item">
                            <i className="star aligned icon"></i>
                            {repo.stargazers_count}
                            </div>
                            </div>
                        ))}
                    </td>
                    <td>
                        {repositories.map(repo => (
                            <div className="ui relaxed divided list" key={repo.name}>
                            <div className="item">
                                <a href={repo.html_url} target='blank'>
                                    {repo.name}
                                </a>
                            </div>
                            </div>
                        ))}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Results;
