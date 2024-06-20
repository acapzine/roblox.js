import { ISODateTimeString } from './interfaces_universal.js';

export interface UserResponse {
    description: string,
    created: ISODateTimeString,
    isBanned: boolean,
    externalAppDisplayName: string,
    hasVerifiedBadge: boolean,
    id: number|BigInt,
    name: string,
    displayName: string
}
export type User_Username = Pick<UserResponse, 'name'>;
export type User_DisplayName = Pick<UserResponse, 'displayName'>;
export type User_Description = Pick<UserResponse, 'description'>;
export interface UsernameHistoryResponse {
    previousPageCursor: string,
    nextPageCursor: string,
    data: [
        {
            name: string
        },
    ]
}
export type UsernameHistory = Pick<UsernameHistoryResponse, 'data'>;
export interface UserSearchResponse {
    previousPageCursor: string,
    nextPageCursor: string,
    data: [
        {
            previousUsernames: [
                string,
            ],
            hasVerifiedBadge: string,
            id: number|bigint,
            name: string,
            displayName: string
        },
    ]
}
export type UserSearch = Pick<UserSearchResponse, 'data'>;
export interface POST_UserRequest_UserID {
    data: [
        {
            hasVerifiedBadge: boolean,
            id: number|bigint,
            name: string,
            displayName: string
        },
    ]
}
export type POST_User_UserID = Pick<POST_UserRequest_UserID, 'data'>;
export interface POST_UserRequest_Username {
    data: [
        {
            requestedUsername: string,
            hasVerifiedBadge: boolean,
            id: number|BigInt,
            name: string,
            displayName: string
        },
    ]
}
export type POST_User_Username = Pick<POST_UserRequest_Username, 'data'>;