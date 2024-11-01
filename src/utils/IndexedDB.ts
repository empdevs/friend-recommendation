// src/indexedDb.ts
import { IDBPDatabase, openDB } from 'idb';
import { user, userRelationship as relationshipData } from '../dataStore';

const dbName = 'recommendationDB';
export const userStore = "users";
export const userRelationshipStore = "relationship";
export const notificationStore = "notifications"

export const initializeDB = async () => {
    return openDB(dbName, 1, {
        upgrade(db) {
            if (!!!db.objectStoreNames.contains(userStore)) {
                // console.log("create user store")
                db.createObjectStore(userStore, { keyPath: 'id', autoIncrement: true });
            }

            if (!!!db.objectStoreNames.contains(userRelationshipStore)) {
                // console.log("create relationship store")
                db.createObjectStore(userRelationshipStore, { keyPath: 'id', autoIncrement: true });
            }
            if (!!!db.objectStoreNames.contains(notificationStore)) {
                // console.log("create notification store")
                db.createObjectStore(notificationStore, { keyPath: 'id', autoIncrement: true });
            }

        },
    });
};

export const insertData = async (data: any, storeName: string) => {
    const db = await initializeDB();
    return db.add(storeName, data);
};

export const getAll = async (storeName: string): Promise<any[]> => {
    const db = await initializeDB();
    return db.getAll(storeName);
};

// export const deleteFriend = async (id: string) => {
//     const db = await initDB();
//     return db.delete(storeName, id);
// };

// export const getFriendCount = async () => {
//     const db = await initDB();
//     return db.count(storeName);
// }

export const updatedData = async (data: any, storeName: string) => {
    const db = await initializeDB();
    return db.put(storeName, data);
}


export const runInitialData = async () => {
    const db = await initializeDB();

    //Initial user data
    // Add initial data to the store
    const users = await db.getAll(userStore);
    if (users.length === 0) {
        const userTransaction = db.transaction(userStore, 'readwrite');
        user.forEach(item => userTransaction.store.add(item));
        await userTransaction.done;
    }

    const userRelationship = await db.getAll(userRelationshipStore);
    if (userRelationship.length === 0) {
        const relationshipTransaction = db.transaction(userRelationshipStore, 'readwrite');
        relationshipData.forEach(item => relationshipTransaction.store.add(item));
        await relationshipTransaction.done;
    }
};

export const resetAppData = async () => {
    const db = await initializeDB();

    const userTransaction = db.transaction(userStore, "readwrite");
    userTransaction.store.clear();
    await userTransaction.done;

    const relationshipTransaction = db.transaction(userRelationshipStore, "readwrite");
    relationshipTransaction.store.clear();
    await relationshipTransaction.done;

    const notificationTransaction = db.transaction(notificationStore, "readwrite");
    notificationTransaction.store.clear();
    await notificationTransaction.done;
}