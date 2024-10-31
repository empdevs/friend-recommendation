import React, { useEffect, useState } from "react";
import { INotificationLog, IUser, IUserRelationship } from "../Types";
import Navbar from "../components/Navbar";
import { ActionButton, FontIcon, Pivot, PivotItem, Stack, Text } from "@fluentui/react";
import ProfileCard from "../components/ProfileCard";
import ProfileDetail from "../components/ProfileDetail";
import { getAll, insertData, notificationStore, updatedData, userRelationshipStore, userStore } from "../utils/IndexedDB";
import BasicModal from "../components/BasicModal";
import { resetAppData as resetData, runInitialData } from "../utils/IndexedDB";
import { v4 as uuidv4 } from "uuid";
import { useNotification } from "../hooks/useNotification";
import { Badge, notification } from "antd";

interface IMain {
    // user: IUser
}
const Main: React.FunctionComponent = (props: IMain) => {
    const { openNotification, contextHolder } = useNotification();
    const [user, setUser] = useState<IUser>();
    const [myNetworks, setMyNetworks] = useState<IUser[]>([]);
    const [activeUser, setActiveUser] = useState<IUser>();
    const [userNetworks, setUserNetworks] = useState<IUser[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [unreadCount, setUnreadCount] = useState<number>(0);

    // Sample notification data with read status
    // Function to mark notification as read
    const [notifications, setNotifications] = useState<INotificationLog[]>([]);


    const getUserNetwork = async (userId: string): Promise<IUser[]> => {
        const users = await getAll(userStore);
        const relationship: IUserRelationship[] = await getAll(userRelationshipStore);

        const myRelationshipId = relationship.filter((item) => item.userId1 == userId || item.userId2 == userId).map((item) => {
            if (item.userId1 !== userId) return item.userId1;
            if (item.userId2 !== userId) return item.userId2;
        });
        const myNetworks: IUser[] = users.filter((item) => myRelationshipId.includes(item.id));
        return myNetworks;
    }
    const getNotification = async (userId: string): Promise<INotificationLog[]> => {
        const notifications: INotificationLog[] = await getAll(notificationStore);
        const myNotifications = notifications?.filter((item) => item.sender == userId || item.recipient == userId);
        return myNotifications;
    }

    const onDetailClick = async (activeUser: IUser) => {
        let userNetworks: IUser[] = await getUserNetwork(activeUser.id);
        // console.log(userNetworks);

        /**
         * We will show user network that hasn't connected with me yet
         */
        let exceptUserId: string[] = [user.id];
        exceptUserId.push(...myNetworks.map((item) => item.id));

        userNetworks = userNetworks.filter((item) => !!!exceptUserId.includes(item.id));
        setActiveUser(activeUser);
        setUserNetworks(userNetworks);
    };

    /**
     * Id is user id target that will be added as a friend 
     * 
     * @param id 
     */
    const onConnectClick = async (id: string) => {
        const newItem: IUserRelationship = {
            id: uuidv4(),
            userId1: user.id,
            userId2: id
        }
        const newNotification: INotificationLog = {
            id: uuidv4(),
            sender: user.id,
            recipient: id,
            action: "ADD FRIEND",
            unreadBySender: 1,
            unreadByRecipient: 1
        }
        await insertData(newItem, userRelationshipStore);
        await insertData(newNotification, notificationStore);

        const myNetworks = await getUserNetwork(user.id);
        let userNetworks: IUser[] = await getUserNetwork(activeUser.id);
        const newFriend: IUser = myNetworks?.find((item) => item.id == id);
        /**
         * We will show user network that hasn't connected with me yet
         */
        let exceptUserId: string[] = [user.id];
        exceptUserId.push(...myNetworks.map((item) => item.id));
        userNetworks = userNetworks.filter((item) => !!!exceptUserId.includes(item.id));

        setUserNetworks(userNetworks);
        setMyNetworks(myNetworks);

        /**
         * Update notification
         */
        const myNotifications = await getNotification(user.id);
        const unreadCountBySender = myNotifications.filter((item) => (item.sender === user.id && item.unreadBySender > 0))?.length;
        const unreadCountByRecipient = myNotifications.filter((item) => (item.recipient === user.id && item.unreadByRecipient > 0))?.length;
        setNotifications(myNotifications);
        setUnreadCount(unreadCountBySender + unreadCountByRecipient);

        //Show notification
        openNotification({
            message: "Information",
            description: `You have made connection with ${newFriend?.name}!`,
            showProgress: true,
            pauseOnHover: false

        })
    }

    const markAsRead = async (notification: INotificationLog) => {
        const isSender = (notification.sender === user.id);
        const isRecipient = (notification.recipient === user.id);

        if (isSender) notification.unreadBySender = 0
        else if (isRecipient) notification.unreadByRecipient = 0;

        await updatedData(notification, notificationStore);
        const myNotifications = await getNotification(user.id);
        const unreadCountBySender = myNotifications.filter((item) => (item.sender === user.id && item.unreadBySender > 0))?.length;
        const unreadCountByRecipient = myNotifications.filter((item) => (item.recipient === user.id && item.unreadByRecipient > 0))?.length;
        setNotifications(myNotifications);
        setUnreadCount(unreadCountBySender + unreadCountByRecipient);
    };

    async function loadData() {
        const user: IUser = JSON.parse(localStorage.getItem("user"));
        const myNetworks = await getUserNetwork(user.id);
        const myNotifications = await getNotification(user.id);
        const unreadCountBySender = myNotifications.filter((item) => (item.sender === user.id && item.unreadBySender > 0))?.length;
        const unreadCountByRecipient = myNotifications.filter((item) => (item.recipient === user.id && item.unreadByRecipient > 0))?.length;
        setMyNetworks(myNetworks);
        setUser(user);
        setNotifications(myNotifications);
        setUnreadCount(unreadCountBySender + unreadCountByRecipient);
    };

    const resetAppData = async () => {
        await resetData();
        await runInitialData();
        loadData();
        setIsOpen(false);
    }

    const handleBackButton = () => {
        setActiveUser(undefined);
        loadData();
    }
    const onResetClick = () => {
        setIsOpen(true);
    }

    useEffect(() => {
        loadData();
    }, []);
    return (
        <div>
            {contextHolder}
            <Navbar
                user={user}
                onResetClick={onResetClick}
            />
            <div className="main">
                <Pivot
                    styles={{
                        linkIsSelected: {
                            selectors: {
                                "&::before": {
                                    backgroundColor: "#E67332 !important"
                                }
                            }
                        },
                        root: {
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: 10
                        }
                    }}
                >
                    <PivotItem headerText="My Network" itemKey="My Network">
                        <div className="ms-Grid" dir="ltr">
                            {(!!!activeUser) &&
                                <div className="ms-Grid-row">
                                    {myNetworks?.map((user) => {
                                        return (
                                            <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg6">
                                                <ProfileCard
                                                    user={user}
                                                    onDetailClick={onDetailClick} />
                                            </div>
                                        )
                                    })}
                                </div>
                            }
                            {/* Detail Profile */}
                            {(activeUser) &&
                                <div className="ms-Grid-row">

                                    <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12" style={{ marginBottom: 4 }}>
                                        <ActionButton
                                            onClick={handleBackButton}
                                            iconProps={{ iconName: "Back" }}
                                            styles={{ icon: { fontSize: 20 } }}
                                        />

                                    </div>
                                    <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
                                        <ProfileDetail
                                            user={activeUser}
                                            userFriends={userNetworks}
                                            onConnectClick={onConnectClick}
                                        />
                                    </div>
                                </div>
                            }
                        </div>
                    </PivotItem>
                    <PivotItem
                        headerText="Notifications"
                        onRenderItemLink={(linkProps, defaultRender) => (
                            <Stack horizontal verticalAlign="center" tokens={{ childrenGap: 5 }}>
                                {defaultRender?.(linkProps)}
                                <Badge count={unreadCount} offset={[1, 0]}>
                                    <FontIcon iconName="Ringer" style={{ fontSize: 24 }} />
                                </Badge>
                            </Stack>
                        )}
                    >
                        <div className="notifications">
                            {(notifications.length > 0) ?
                                notifications.map((notification) => {
                                    let unread: boolean = false;
                                    let username: string = "";
                                    let message = "";
                                    const isSender = (notification.sender === user.id);
                                    const isRecipient = (notification.recipient === user.id);
                                    if (isSender) {
                                        if (notification.unreadBySender > 0) unread = true;
                                        username = myNetworks.find((item) => item.id === notification.recipient)?.name;
                                        message = `You have made connection with ${username}!`

                                    } else if (isRecipient) {
                                        if (notification.unreadByRecipient > 0) unread = true;
                                        username = myNetworks.find((item) => item.id === notification.sender)?.name;
                                        message = `${username} has connected with you!`
                                    }

                                    return (
                                        <div
                                            key={notification.id}
                                            className={`notification ${unread ? "unread" : "read"}`}
                                            onClick={() => markAsRead(notification)}
                                        >
                                            <p>{message}</p>
                                        </div>
                                    )
                                })
                                :
                                <Stack horizontalAlign="center" tokens={{ childrenGap: 10 }}>
                                    <img src="/images/nothing_notification.svg" style={{ width: 300 }} />
                                    <Text variant="large"><i>No new notifications. Take a moment to explore or connect with someone new!</i></Text>
                                </Stack>
                            }
                        </div>
                    </PivotItem>
                </Pivot>
            </div>
            <BasicModal
                isOpen={isOpen}
                onApprove={resetAppData}
                onCancel={() => setIsOpen(false)}
                onCancelText={"Cancel"}
                onApproveText={"Yes"}
                headerText={"Confirmation"}
                bodyText={"Are you sure you want to reset the app data to default settings?"}
            />
        </div >
    )
}

export default Main;