import React from 'react';

import '../UserCard.css';

const UserCard = props => {
    return (
        <div className="card-container">
            {props.followers.map((follower, key) => (
            <div className="user-card" key={follower.id}>
                <img className="user-photo" src={follower.avatar_url} alt="follower" />
                <h2>{follower.login}</h2>
                <p>Bio: {follower.bio}</p>
                <p>location: {follower.location}</p>
                <p># of followers: {follower.followers}</p>
                <p># following: {follower.following}</p>
                <p>
                    <a className="user-link" href={follower.html_url}>Github Profile</a>
                </p>
            </div>
            ))}

            <div className="user-card">
                <img className="user-photo" src={props.user.avatar_url} alt="user" />
                <h2>{props.user.login}</h2>
                <p>Bio: {props.user.bio}</p>
                <p>location: {props.user.location}</p>
                <p># of followers: {props.user.followers}</p>
                <p># following: {props.user.following}</p>
                <p>
                    <a className="user-link" href={props.user.html_url}>Github Profile</a>
                </p>
            </div>
        </div>
    );
}

export default UserCard;