import React from "react";
import { IUser } from "../Types";

interface IProfileCard {
    user: IUser
    onDetailClick: Function
}
const ProfileCard: React.FunctionComponent<IProfileCard> = (props: IProfileCard) => {
    return (
        <div className="profile-card">
            <div className="profile-container">
                <div className="avatar">
                    <img className="avatar-img" src={props.user.profileUrl} />
                </div>
                <div className="info">
                    <h2 className="name">{props.user.name}</h2>
                    <p className="title">{props.user.job}</p>
                </div>
            </div>
            <div className="button-container">
                <p className="connection-text">Find More Connection!</p>
                <button className="details-button" onClick={() => props.onDetailClick(props.user)}>Details</button>
            </div>
        </div>
    );
};

export default ProfileCard;