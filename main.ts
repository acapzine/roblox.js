import { UserGroupsResponse_v1, UserGroupsResponse_v2, UserGroups_v1, UserGroups_v2, UsersInRoleset, UsersInRolesetResponse, GroupUsers, GroupUsersResponse, GroupConfigMetadataResponse, GroupDescription, GroupMemberCount, GroupMetadataResponse, GroupName, GroupNameHistory, GroupNameHistoryResponse, GroupOwnerInformation, GroupRelations, GroupRelationsResponse, GroupRolePermissionsResponse, GroupRoles, GroupRolesPermissions, GroupRolesResponse, GroupShoutInformation, GroupsResponse_v1, GroupsResponse_v2, multiGroupResponse_v2, multiGroup_v2 } from './interfaces_group.js';
import { UserResponse, UserSearch, UserSearchResponse, User_Description, User_DisplayName, User_Username, UsernameHistory, UsernameHistoryResponse, POST_UserRequest_UserID, POST_UserRequest_Username, POST_User_UserID, POST_User_Username } from './interfaces_user.js';
import {  } from './interfaces_catalog.js';

export class User {
    userid?:number = 1;
    constructor(userid?:number) {
        this.userid = userid ?? 1;
    }

    async Username() {
        const response = await fetch(``);
    }
}