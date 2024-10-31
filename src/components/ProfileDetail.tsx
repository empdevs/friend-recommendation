import React from "react";
import { Stack, Text } from "@fluentui/react";
import { IUser } from "../Types";

interface IProfileDetail {
    user: IUser,
    userFriends: IUser[],
    onConnectClick: (id: string) => void
}
const ProfileDetail: React.FunctionComponent<IProfileDetail> = (props: IProfileDetail) => {
    console.log(props);
    return (
        <div className="profile-page">
            <div className="profile-details">
                <div className="profile-header">
                    <div className="avatar-large">
                        <img className="avatar-img" src={props.user.profileUrl} />
                    </div>
                    <div className="info">
                        <h2 className="name">{props.user.name}</h2>
                        <p className="title">{props.user.job}</p>
                    </div>
                </div>
                <div className="profile-info">
                    <Stack tokens={{ childrenGap: 10 }}>
                        <Stack horizontal tokens={{ childrenGap: 10 }}>
                            <Stack
                                horizontal
                                horizontalAlign="space-between"
                                className="profile-info-item"
                            >
                                <span>Age</span>
                                <span>:</span>
                            </Stack>
                            <Stack>
                                {props.user.age}
                            </Stack>
                        </Stack>
                        <Stack horizontal tokens={{ childrenGap: 10 }}>
                            <Stack
                                horizontal
                                horizontalAlign="space-between"
                                className="profile-info-item"
                            >
                                <span>Address</span>
                                <span>:</span>
                            </Stack>
                            <Stack>
                                {props.user.address}
                            </Stack>
                        </Stack>
                        <Stack horizontal tokens={{ childrenGap: 10 }}>
                            <Stack
                                horizontal
                                horizontalAlign="space-between"
                                className="profile-info-item"
                            >
                                <span>Hobbies</span>
                                <span>:</span>
                            </Stack>
                            <Stack>
                                {props.user.hobbies.join(", ")}
                            </Stack>
                        </Stack>
                        <Stack horizontal tokens={{ childrenGap: 10 }}>
                            <Stack
                                horizontal
                                horizontalAlign="space-between"
                                className="profile-info-item"
                            >
                                <span>Email</span>
                                <span>:</span>
                            </Stack>
                            <Stack>
                                {props.user.email}
                            </Stack>
                        </Stack>
                        <Stack horizontal tokens={{ childrenGap: 10 }}>
                            <Stack
                                horizontal
                                horizontalAlign="space-between"
                                className="profile-info-item"
                            >
                                <span>Instagram</span>
                                <span>:</span>
                            </Stack>
                            <Stack>
                                {props.user.instagram}
                            </Stack>
                        </Stack>
                        <Stack horizontal tokens={{ childrenGap: 10 }}>
                            <Stack
                                horizontal
                                horizontalAlign="space-between"
                                className="profile-info-item"
                            >
                                <span>Facebook</span>
                                <span>:</span>
                            </Stack>
                            <Stack>
                                {props.user.facebook}
                            </Stack>
                        </Stack>
                        <Stack horizontal tokens={{ childrenGap: 10 }}>
                            <Stack
                                horizontal
                                horizontalAlign="space-between"
                                className="profile-info-item"
                            >
                                <span>Phone Number</span>
                                <span>:</span>
                            </Stack>
                            <Stack>
                                {props.user.phoneNumber}
                            </Stack>
                        </Stack>
                    </Stack>
                </div>
            </div>

            <div className="connections">
                {(props.userFriends.length > 0) && <h3 className="connections-title">Let's get connected!</h3>}
                {(props.userFriends.length > 0) ?
                    (props.userFriends?.map((item) => {
                        return (
                            <div className="connection-card">
                                <div className="avatar">
                                    <img className="avatar-img" src={item.profileUrl} />
                                </div>
                                <div className="info">
                                    <h4 className="name">{item.name}</h4>
                                    <p className="title">{item.job}</p>
                                </div>
                                <button className="connect-button" onClick={() => props.onConnectClick(item.id)}>Connect</button>
                            </div>
                        )
                    }))
                    :
                    <Stack horizontalAlign="center" tokens={{ childrenGap: 10 }}>
                        <img src="/images/nothing_recommendation.svg" style={{ width: 200 }} />
                        <Text variant="large"><i>No new friend recommendations at the moment! Check back later to see new connections.</i></Text>
                    </Stack>
                }
            </div>
        </div>
    );
};

export default ProfileDetail;