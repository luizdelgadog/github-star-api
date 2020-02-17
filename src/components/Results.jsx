import React from 'react';

const Results = ({data, repositories}) => {
    return(
        <table>
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
                    <td>{data.name}</td>
                    <td><img alt={data.avatar_url} src={data.avatar_url}/></td>
                    <td>{data.bio}</td>
                    <td>
                    {repositories.map(repo => (
                            <div className='' key={repo.name}>
                            {repo.stargazers_count}
                            </div>
                        ))}
                    </td>
                    <td>
                        {repositories.map(repo => (
                            <div className='' key={repo.name}>
                            <div>
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