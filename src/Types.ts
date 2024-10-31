export interface IUser {
    id: string,
    username: string,
    password: string, // We will using bcrypt,
    name: string,
    age: number,
    address: string,
    job: string,
    hobbies: string[],
    email: string;
    profileUrl: string
    instagram: string,
    tiktok: string,
    facebook: string,
    phoneNumber: string
}

export interface IUserRelationship {
    id: string,
    userId1: string,
    userId2: string,
}

export interface INotificationLog {
    id: string,
    sender: string, //This is actually userId (sender)
    recipient: string, //This is actually userId (recipient),
    action: "ADD FRIEND",
    unreadBySender: number
    unreadByRecipient: number
}