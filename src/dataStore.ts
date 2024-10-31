//This is initial data that will be loaded in IndexedDB

import { IUser, IUserRelationship } from "./Types";


/**
 * User data
 * 
 * Note: The password equal username
 */
export const user: IUser[] = [
    {
        "id": "c07a3f97-34ca-42ff-9ffc-de4709ab3c83",
        "username": "destiny",
        "password": "eeff7308a9d99d5cf4015c1dea27865a5b2d27bed36a9e8898d6717db1c2015a",
        "name": "Destiny",
        "age": 27,
        "address": "123 Elm St, Cityville",
        "job": "Teacher",
        "hobbies": [
            "Yoga",
            "Reading"
        ],
        "email": "destiny@example.com",
        "profileUrl": "/images/Destiny.webp",
        "instagram": "destiny_ig",
        "tiktok": "destiny_tok",
        "facebook": "destiny_fb",
        "phoneNumber": "081234567890"
    },
    {
        "id": "608a4baf-3215-4491-a31f-bb0fe897412b",
        "username": "jude",
        "password": "1dedebb3ce94ad9c4c7cf72dd7d566fe5bfe759f34fc4f8ba4f8ecc76d201262",
        "name": "Jude",
        "age": 25,
        "address": "456 Oak St, Townsville",
        "job": "Musician",
        "hobbies": [
            "Playing guitar",
            "Gaming"
        ],
        "email": "jude@example.com",
        "profileUrl": "/images/Jude.webp",
        "instagram": "jude_ig",
        "tiktok": "jude_tok",
        "facebook": "jude_fb",
        "phoneNumber": "081234567891"
    },
    {
        "id": "2106bdbd-77f4-4de8-88b6-45e52167ab64",
        "username": "andrea",
        "password": "efec02ac616011772e3d932266f5bb88bc0e8cc158039adec02e28775bbeae11",
        "name": "Andrea",
        "age": 30,
        "address": "789 Pine St, Metropolis",
        "job": "Photographer",
        "hobbies": [
            "Photography",
            "Traveling"
        ],
        "email": "andrea@example.com",
        "profileUrl": "/images/Andrea.webp",
        "instagram": "andrea_ig",
        "tiktok": "andrea_tok",
        "facebook": "andrea_fb",
        "phoneNumber": "081234567892"
    },
    {
        "id": "77deb7b1-2b57-441a-96e1-78ecdff12fb6",
        "username": "jade",
        "password": "ff1b1cb414502e30b556750786624c09763d31614902fc4dded094ab8855d3a3",
        "name": "Jade",
        "age": 29,
        "address": "101 Cedar St, Riverside",
        "job": "Journalist",
        "hobbies": [
            "Writing",
            "Yoga"
        ],
        "email": "jade@example.com",
        "profileUrl": "/images/Jade.webp",
        "instagram": "jade_ig",
        "tiktok": "jade_tok",
        "facebook": "jade_fb",
        "phoneNumber": "081234567893"
    },
    {
        "id": "3c7c4954-aa4e-487c-a669-6576a1204d81",
        "username": "oliver",
        "password": "64e484b4b04b83a79dc531b22a2d89d5e653bcb485e4ee1825fee626478e249d",
        "name": "Oliver",
        "age": 28,
        "address": "202 Willow St, Hillside",
        "job": "Engineer",
        "hobbies": [
            "Cycling",
            "Hiking"
        ],
        "email": "oliver@example.com",
        "profileUrl": "/images/Oliver.webp",
        "instagram": "oliver_ig",
        "tiktok": "oliver_tok",
        "facebook": "oliver_fb",
        "phoneNumber": "081234567894"
    },
    {
        "id": "dffe7199-05e8-4882-a087-67579e2b1075",
        "username": "valentina",
        "password": "62b53df015a473e6774568e9d54f79e05bba3ad2aa00758a9baa89bfe9361096",
        "name": "Valentina",
        "age": 32,
        "address": "303 Birch St, Lakeside",
        "job": "Doctor",
        "hobbies": [
            "Swimming",
            "Traveling"
        ],
        "email": "valentina@example.com",
        "profileUrl": "/images/Valentina.webp",
        "instagram": "valentina_ig",
        "tiktok": "valentina_tok",
        "facebook": "valentina_fb",
        "phoneNumber": "081234567895"
    },
    {
        "id": "b59e3606-69cf-4365-8d67-060fc430fc26",
        "username": "liliana",
        "password": "0a4d7662324baafbdf016e68a523e81c0318a0e36a30cad439d07991a0a63951",
        "name": "Liliana",
        "age": 26,
        "address": "404 Cedar St, Seaside",
        "job": "Artist",
        "hobbies": [
            "Painting",
            "Reading"
        ],
        "email": "liliana@example.com",
        "profileUrl": "/images/Liliana.webp",
        "instagram": "liliana_ig",
        "tiktok": "liliana_tok",
        "facebook": "liliana_fb",
        "phoneNumber": "081234567896"
    },
    {
        "id": "bb93d15f-dacf-40a9-b235-05fd904de5eb",
        "username": "leah",
        "password": "2c7175d4180f3faf70b5bc665d8e8da5ac05379a8b1e1a2a06074826c3e7ffae",
        "name": "Leah",
        "age": 31,
        "address": "505 Fir St, Mountainview",
        "job": "Fashion Designer",
        "hobbies": [
            "Sewing",
            "Photography"
        ],
        "email": "leah@example.com",
        "profileUrl": "/images/Leah.webp",
        "instagram": "leah_ig",
        "tiktok": "leah_tok",
        "facebook": "leah_fb",
        "phoneNumber": "081234567897"
    },
    {
        "id": "9ee40580-ada8-4013-ab9b-12122f05c52f",
        "username": "ryker",
        "password": "f7edc6bcac5e2db6f8d25c721ed8774c1ac00f3fcb8db7e15e299d363513c4b2",
        "name": "Ryker",
        "age": 27,
        "address": "606 Spruce St, Valleytown",
        "job": "Chef",
        "hobbies": [
            "Cooking",
            "Cycling"
        ],
        "email": "ryker@example.com",
        "profileUrl": "/images/Ryker.webp",
        "instagram": "ryker_ig",
        "tiktok": "ryker_tok",
        "facebook": "ryker_fb",
        "phoneNumber": "081234567898"
    },
    {
        "id": "7392e1c1-7089-49f0-99d8-31f08a3e12f7",
        "username": "easton",
        "password": "34c7ff9151da3efc37803450dc704380c3f91835de694f566629d6382fa74757",
        "name": "Easton",
        "age": 29,
        "address": "707 Aspen St, Rivertown",
        "job": "Architect",
        "hobbies": [
            "Drawing",
            "Running"
        ],
        "email": "easton@example.com",
        "profileUrl": "/images/Easton.webp",
        "instagram": "easton_ig",
        "tiktok": "easton_tok",
        "facebook": "easton_fb",
        "phoneNumber": "081234567899"
    },
    {
        "id": "00da068b-e527-4dfa-993d-aea7266bf831",
        "username": "alexander",
        "password": "c99038b02e1aea3509e383ac9189d0c227b8d03847fb3e56e266bc6aa377b1f4",
        "name": "Alexander",
        "age": 34,
        "address": "808 Oakwood St, Greenfield",
        "job": "Software Developer",
        "hobbies": [
            "Coding",
            "Hiking"
        ],
        "email": "alexander@example.com",
        "profileUrl": "/images/Alexander.webp",
        "instagram": "alexander_ig",
        "tiktok": "alex_tok",
        "facebook": "alex_fb",
        "phoneNumber": "081234567900"
    },
    {
        "id": "a697c436-f42e-4369-a870-26b3bfb7b7a0",
        "username": "riley",
        "password": "0e61802a24027861e6a6c01d581a7d20705a0f6a91cb0993677a588885f5e76c",
        "name": "Riley",
        "age": 28,
        "address": "909 Pinecrest St, Highlands",
        "job": "Data Analyst",
        "hobbies": [
            "Gaming",
            "Gardening"
        ],
        "email": "riley@example.com",
        "profileUrl": "/images/Riley.webp",
        "instagram": "riley_ig",
        "tiktok": "riley_tok",
        "facebook": "riley_fb",
        "phoneNumber": "081234567901"
    },
    {
        "id": "b659ec37-dad4-455e-93c8-e0571c7efe5c",
        "username": "christopher",
        "password": "408bb21f89f5653d1b4ddf50e9b8451f7a3615bf89bd2401d5efa7b14eaf840d",
        "name": "Christopher",
        "age": 33,
        "address": "1010 Maple St, Bayview",
        "job": "Doctor",
        "hobbies": [
            "Reading",
            "Running"
        ],
        "email": "christopher@example.com",
        "profileUrl": "/images/Christopher.webp",
        "instagram": "christopher_ig",
        "tiktok": "chris_tok",
        "facebook": "chris_fb",
        "phoneNumber": "081234567902"
    },
    {
        "id": "9e370651-0c53-4dde-976d-3d35ffc2dbba",
        "username": "chase",
        "password": "8a5eebb8da6ece49c15f98fd9673aa50f3f99ac3973f56de2833cb4147e24d6f",
        "name": "Chase",
        "age": 26,
        "address": "1111 River St, Brookside",
        "job": "Marketing Manager",
        "hobbies": [
            "Swimming",
            "Running"
        ],
        "email": "chase@example.com",
        "profileUrl": "/images/Chase.webp",
        "instagram": "chase_ig",
        "tiktok": "chase_tok",
        "facebook": "chase_fb",
        "phoneNumber": "081234567903"
    },
    {
        "id": "39a5392a-44e3-416b-81b9-ded6bacf1c80",
        "username": "sadie",
        "password": "f66f55eebb96f3a1e801cae8f2d59d6c1b6f18441128305968f790f911d269df",
        "name": "Sadie",
        "age": 24,
        "address": "1212 Oak St, Bayside",
        "job": "Graphic Designer",
        "hobbies": [
            "Drawing",
            "Dancing"
        ],
        "email": "sadie@example.com",
        "profileUrl": "/images/Sadie.webp",
        "instagram": "sadie_ig",
        "tiktok": "sadie_tok",
        "facebook": "sadie_fb",
        "phoneNumber": "081234567904"
    },
    {
        "id": "52d3ad6b-5dd7-4f51-b81e-48893a40daf8",
        "username": "eliza",
        "password": "00d26c4e0b1cd38c45adf2f77fcfdd18b80b333549dc4c526da6d6c00f2681db",
        "name": "Eliza",
        "age": 29,
        "address": "1313 Spruce St, Cliffside",
        "job": "Nurse",
        "hobbies": [
            "Gardening",
            "Reading"
        ],
        "email": "eliza@example.com",
        "profileUrl": "/images/Eliza.webp",
        "instagram": "eliza_ig",
        "tiktok": "eliza_tok",
        "facebook": "eliza_fb",
        "phoneNumber": "081234567905"
    },
    {
        "id": "837e35ec-e846-43d4-be35-c852702d5be1",
        "username": "kingston",
        "password": "b8298e886cae9bbf4837ca5ed2757d179c842901133b7bd2b15ec05d40226979",
        "name": "Kingston",
        "age": 35,
        "address": "1414 Birch St, Ridgeview",
        "job": "Financial Analyst",
        "hobbies": [
            "Investing",
            "Hiking"
        ],
        "email": "kingston@example.com",
        "profileUrl": "/images/Kingston.webp",
        "instagram": "kingston_ig",
        "tiktok": "kingston_tok",
        "facebook": "kingston_fb",
        "phoneNumber": "081234567906"
    },
    {
        "id": "a4be14ff-660d-4708-9b40-06161f6d8d19",
        "username": "mackenzie",
        "password": "34dfe62ad84b73478c6931d99dce5e48f7dd22128d3a560625f2ebbce1f14fd5",
        "name": "Mackenzie",
        "age": 27,
        "address": "1515 Cedar St, Valleyview",
        "job": "Psychologist",
        "hobbies": [
            "Reading",
            "Traveling"
        ],
        "email": "mackenzie@example.com",
        "profileUrl": "/images/Mackenzie.webp",
        "instagram": "mackenzie_ig",
        "tiktok": "mackenzie_tok",
        "facebook": "mackenzie_fb",
        "phoneNumber": "081234567907"
    },
    {
        "id": "b2d01453-c862-4f4d-bc2b-2d8cc6688de2",
        "username": "sawyer",
        "password": "2c77b3ef664b4cdac4fedb50eb7ea405e2bdea1b5b7b155c3458a895bbe718e2",
        "name": "Sawyer",
        "age": 30,
        "address": "1616 Oak St, Hilltop",
        "job": "Architect",
        "hobbies": [
            "Running",
            "Photography"
        ],
        "email": "sawyer@example.com",
        "profileUrl": "/images/Sawyer.webp",
        "instagram": "sawyer_ig",
        "tiktok": "sawyer_tok",
        "facebook": "sawyer_fb",
        "phoneNumber": "081234567908"
    },
    {
        "id": "87732d8d-37eb-4262-a4c1-9efc895a4b37",
        "username": "katherine",
        "password": "bb6ab55e26e689d0fa3576934aee4f335c83bb609379630238f80c576d658d4c",
        "name": "Katherine",
        "age": 33,
        "address": "1717 Pine St, Woodland",
        "job": "Software Engineer",
        "hobbies": [
            "Coding",
            "Reading"
        ],
        "email": "katherine@example.com",
        "profileUrl": "/images/Katherine.webp",
        "instagram": "katherine_ig",
        "tiktok": "katherine_tok",
        "facebook": "katherine_fb",
        "phoneNumber": "081234567909"
    }
]


/**
 * User relationship is the user has been 
 */
export const userRelationship: IUserRelationship[] = [
    {
        "id": "9e86b779-5227-4307-8839-e63cb8dff3af",
        "userId1": "00da068b-e527-4dfa-993d-aea7266bf831",
        "userId2": "837e35ec-e846-43d4-be35-c852702d5be1"
    },
    {
        "id": "62cc6f46-5ce6-4bd7-8a3d-bee029054700",
        "userId1": "87732d8d-37eb-4262-a4c1-9efc895a4b37",
        "userId2": "00da068b-e527-4dfa-993d-aea7266bf831"
    },
    {
        "id": "0233ae1e-3006-4afb-9ef9-fcc0aec5c9a8",
        "userId1": "00da068b-e527-4dfa-993d-aea7266bf831",
        "userId2": "a697c436-f42e-4369-a870-26b3bfb7b7a0"
    },
    {
        "id": "484f4d79-e5ad-4f31-930a-8e3573be2d24",
        "userId1": "837e35ec-e846-43d4-be35-c852702d5be1",
        "userId2": "9e370651-0c53-4dde-976d-3d35ffc2dbba"
    },
    {
        "id": "384e743a-05e1-488e-8751-86abe682c262",
        "userId1": "dffe7199-05e8-4882-a087-67579e2b1075",
        "userId2": "837e35ec-e846-43d4-be35-c852702d5be1"
    },
    {
        "id": "e605f37f-01f2-4b0a-bff0-2e885ce3201e",
        "userId1": "9e370651-0c53-4dde-976d-3d35ffc2dbba",
        "userId2": "2106bdbd-77f4-4de8-88b6-45e52167ab64"
    },
    {
        "id": "e4e6e89a-0976-4c40-8252-b968ab60b045",
        "userId1": "b659ec37-dad4-455e-93c8-e0571c7efe5c",
        "userId2": "dffe7199-05e8-4882-a087-67579e2b1075"
    },
    {
        "id": "32e8361d-4197-4113-9a27-625ad92727c7",
        "userId1": "608a4baf-3215-4491-a31f-bb0fe897412b",
        "userId2": "b659ec37-dad4-455e-93c8-e0571c7efe5c"
    },
    {
        "id": "a9ecca09-ec76-4dce-9a4e-fdf6d4c420b8",
        "userId1": "87732d8d-37eb-4262-a4c1-9efc895a4b37",
        "userId2": "3c7c4954-aa4e-487c-a669-6576a1204d81"
    },
    {
        "id": "5db0f051-9c48-49ac-96f4-c11b9b3dc323",
        "userId1": "7392e1c1-7089-49f0-99d8-31f08a3e12f7",
        "userId2": "87732d8d-37eb-4262-a4c1-9efc895a4b37"
    },
    {
        "id": "00cf48b4-80aa-438e-bdf0-69fc4a513a3e",
        "userId1": "39a5392a-44e3-416b-81b9-ded6bacf1c80",
        "userId2": "7392e1c1-7089-49f0-99d8-31f08a3e12f7"
    },
    {
        "id": "a6a19aaf-de37-4e5c-8d2c-20ecc0a832c3",
        "userId1": "bb93d15f-dacf-40a9-b235-05fd904de5eb",
        "userId2": "7392e1c1-7089-49f0-99d8-31f08a3e12f7"
    },
    {
        "id": "ec97a629-7c56-478f-91f7-19d5cb416c7e",
        "userId1": "bb93d15f-dacf-40a9-b235-05fd904de5eb",
        "userId2": "b59e3606-69cf-4365-8d67-060fc430fc26"
    },
    {
        "id": "a254ab97-017e-4dbb-b4f3-7c4e8546028e",
        "userId1": "a697c436-f42e-4369-a870-26b3bfb7b7a0",
        "userId2": "c07a3f97-34ca-42ff-9ffc-de4709ab3c83"
    },
    {
        "id": "07df16dc-8e2d-4a41-a813-bc67ec0179c9",
        "userId1": "a697c436-f42e-4369-a870-26b3bfb7b7a0",
        "userId2": "b2d01453-c862-4f4d-bc2b-2d8cc6688de2"
    },
    {
        "id": "dd78fb8e-fe46-4e18-af7b-92ddf9d33fcb",
        "userId1": "b2d01453-c862-4f4d-bc2b-2d8cc6688de2",
        "userId2": "52d3ad6b-5dd7-4f51-b81e-48893a40daf8"
    },
    {
        "id": "3cef0964-e2d2-4849-a6f3-c96a87dba623",
        "userId1": "b2d01453-c862-4f4d-bc2b-2d8cc6688de2",
        "userId2": "9ee40580-ada8-4013-ab9b-12122f05c52f"
    },
    {
        "id": "1b4b9ee7-3b8c-4604-ae7a-ec7bbb5d0cc7",
        "userId1": "b2d01453-c862-4f4d-bc2b-2d8cc6688de2",
        "userId2": "a4be14ff-660d-4708-9b40-06161f6d8d19"
    },
    {
        "id": "8528aa8e-2a52-423f-8b0f-b146052ae072",
        "userId1": "52d3ad6b-5dd7-4f51-b81e-48893a40daf8",
        "userId2": "77deb7b1-2b57-441a-96e1-78ecdff12fb6"
    }
]