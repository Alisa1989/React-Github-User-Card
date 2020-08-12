import React from 'react';
import '../UserCard.css';

const UserCard = props => {
    const cardCreator = (usr, key) => (
            <div className="user-card" key={usr.id}>
                <img className="user-photo" src={usr.avatar_url} alt="follower" />
                <h2>{usr.login}</h2>
                <p>Bio: {usr.bio}</p>
                <p>location: {usr.location}</p>
                <p># of followers: {usr.followers}</p>
                <p># following: {usr.following}</p>
                <p>
                    <a className="user-link" href={usr.html_url}>Github Profile</a>
                </p>
            </div>
    )
    return (
        <div className="card-container">
            {cardCreator(props.user)}
            {props.followers.map((follower, key) => (
                cardCreator(follower,key)
            ))}
            {console.log("location",props.followers.location)}
        </div>
    );
}

export default UserCard;

