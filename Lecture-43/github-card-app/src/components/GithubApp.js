import React, { useState } from 'react';
import Person from './Person';
import Form from './Form';

const GithubApp = () => {

    const [user, setUser] = useState({
        username: '',
        imageUrl: '',
        followers: 0,
        following:0
    })

    const fetchProfile=async(username)=>{
        const res = await fetch(`https://api.github.com/users/${username}`);
        const profile = await res.json();
        setUser(() => {
            return {
                username: profile.login,
                imageUrl: profile.avatar_url,
                followers: profile.followers,
                following:profile.following
            }
        })
    }

    return (
        <React.Fragment>
            <section>
                <Form fetchProfile={fetchProfile}/>
            </section>
            <section>
                { user.username.length ?
                    <Person
                    username={user.username}
                    imageUrl={user.imageUrl}
                    followers={user.followers}
                    following={user.following}
                    />
                    : <p>No User</p>
                }
               
            </section>
        </React.Fragment>
  )
}

export default GithubApp