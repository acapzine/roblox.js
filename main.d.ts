import { AssetBundlesResponse, UserFavoriteModelAssetInformationResponse, UserFavoriteBundleAssetInformationResponse, UserFavoriteSubtypeInformationResponse, ItemDetailsResponse, TopicsResponse } from './interfaces_catalog';
import { UserGroupsResponse_v2, UserGroupsResponse_v1, GroupsResponse_v1, GroupName, GroupDescription, GroupOwnerInformation, GroupShoutInformation, GroupMemberCount, GroupUsers, GroupRelations, GroupRolesPermissions, UsersInRoleset, GroupRoles, GroupNameHistory } from './interfaces_group';
import { UserResponse, User_Username, User_DisplayName, User_Description, UsernameHistoryResponse, UserSearch, POST_User_UserID, POST_User_Username } from './interfaces_user';
export declare class user {
    id: number;
    constructor(id?: number);
    username(): Promise<User_Username>;
    displayname(): Promise<User_DisplayName>;
    description(): Promise<User_Description>;
    fullInfo(): Promise<UserResponse[]>;
    usernameHistory(): Promise<UsernameHistoryResponse[]>;
    userGroups_v1(): Promise<UserGroupsResponse_v1[]>;
    userGroups_v2(): Promise<UserGroupsResponse_v2[]>;
}
export declare function searchUsers(keyword: string): Promise<UserSearch[]>;
export declare function multiUserIDRequest(userids: Int32Array, excludeBanned?: boolean): Promise<POST_User_UserID>;
export declare function multiUsernameRequest(usernames: Array<string>, excludeBanned?: boolean): Promise<POST_User_Username>;
export declare class group {
    id: number;
    constructor(id?: number);
    name(): Promise<GroupName>;
    description(): Promise<GroupDescription>;
    members(): Promise<GroupMemberCount>;
    ownerUserID(): Promise<GroupOwnerInformation[]>;
    ownerUsername(): Promise<GroupOwnerInformation[]>;
    ownerDisplayName(): Promise<User_DisplayName>;
    ownerInformation(): Promise<GroupOwnerInformation[]>;
    shoutBody(): Promise<GroupShoutInformation[]>;
    shoutPosterUserID(): Promise<GroupShoutInformation[]>;
    shoutPosterUsername(): Promise<GroupShoutInformation[]>;
    shoutPosterDisplayName(): Promise<User_DisplayName>;
    shoutInformation(): Promise<GroupShoutInformation[]>;
    information(): Promise<GroupsResponse_v1[]>;
    nameHistory(): Promise<GroupNameHistory[]>;
    roles(): Promise<GroupRoles[]>;
    users(): Promise<GroupUsers[]>;
    usersInRoleset(rolesetid?: number): Promise<UsersInRoleset[]>;
    relationships(enemies?: boolean): Promise<GroupRelations[]>;
    guestRolePermissions(): Promise<GroupRolesPermissions[]>;
}
export declare class catalogInformation {
    assetId: number | null;
    bundleId: number | null;
    userId: number | null;
    subtypeId: number | null;
    constructor(assetId?: number | null, bundleId?: number | null, userId?: number | null, subtypeId?: number | null);
    assetBundles(): Promise<AssetBundlesResponse[]>;
    userFavoriteAssetModelInfo(): Promise<UserFavoriteModelAssetInformationResponse[]>;
    userFavoriteBundleInfo(): Promise<UserFavoriteBundleAssetInformationResponse[]>;
    userFavoriteSubtypeInfo(): Promise<UserFavoriteSubtypeInformationResponse[]>;
    catalogItemDetails(itemsObject: {
        itemType: number;
        id: number;
    }): Promise<ItemDetailsResponse>;
    getTopics(itemsObject: {
        TargetId: number;
        ItemType: number;
    }, topics: Array<string>, inputQuery: string, maxResults?: number): Promise<TopicsResponse>;
}
