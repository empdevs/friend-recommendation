import React from "react";
import { ActionButton, BaseButton, Button, FontIcon, PrimaryButton, Stack, Text } from "@fluentui/react";
import { IUser } from "../Types";
import { useHistory } from 'react-router-dom';

interface INavbar {
    user: IUser,
    onResetClick: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement | HTMLAnchorElement | HTMLSpanElement | BaseButton | Button>
}

function Navbar(props: INavbar) {
    const user: IUser = props.user;
    const history = useHistory();

    function logout() {
        localStorage.removeItem("user");
        history.push('/Login');
    }

    return (
        <div style={{ background: "#fff", padding: '10px 20px' }}>
            <Stack horizontal horizontalAlign="space-between">
                <Stack>
                    <Text variant="xLarge" style={{ color: "#fff" }}>
                        <img
                            src="/images/Logo.webp"
                            width={80}
                            height={65} />
                    </Text>
                </Stack>
                <Stack horizontal verticalAlign="center" tokens={{ childrenGap: 20 }}>
                    <Stack>
                        <ActionButton onClick={props.onResetClick}>
                            <Stack>
                                <FontIcon iconName="Refresh" />
                                <span>Reset</span>
                            </Stack>
                        </ActionButton>
                    </Stack>
                    <Stack horizontal horizontalAlign="center" verticalAlign="center" tokens={{ childrenGap: 4 }}>
                        <Text>
                            <strong>{user?.name}</strong>
                        </Text>
                        <img
                            src={`${user?.profileUrl}`}
                            className="profile-picture"
                        />
                    </Stack>
                    <Stack
                        className="btn-logout"
                        onClick={logout}
                        horizontalAlign="center"
                    >
                        <FontIcon iconName="SignOut" />
                        <Text variant="small"><strong>Logout</strong></Text>
                    </Stack>
                </Stack>
            </Stack>
        </div>
    )
}

export default Navbar;