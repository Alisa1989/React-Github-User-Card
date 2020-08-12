import React from 'react';

import UserCard from './UserCard';

const UserCardList = props => {
    return(
        <div>
            {console.log( "userCardList",props.user.login)}
            <UserCard user={props.user} followers={props.followers}/>
        </div>
    );
}

export default UserCardList;