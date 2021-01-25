import React from 'react';
import tree from '../tree.jpg'
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src={tree}/>
            </div>
            <div>
                ava + personal info
            </div>
            <div>
                My posts
                <div>
                    new post
                </div>
                <div className={s.item}>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;