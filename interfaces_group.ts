import { ISODateTimeString } from "./interfaces_universal.js";

export interface UserGroupsResponse_v2 {
  data: [GroupsResponse_v2];
}
export type UserGroups_v2 = Pick<UserGroupsResponse_v2, "data">;
export interface UserGroupsResponse_v1 {
  data: [GroupsResponse_v1];
}
export type UserGroups_v1 = Pick<UserGroupsResponse_v1, "data">;

export interface GroupsResponse_v1 {
  id: number | bigint;
  name: string;
  description: string;
  owner: {
    buildersClubMembershipType: boolean;
    hasVerifiedBadge: boolean;
    userId: number | bigint;
    username: string;
    displayName: string;
  };
  shout: {
    body: string;
    poster: {
      buildersClubMembershipType: boolean;
      hasVerifiedBadge: boolean;
      userId: number | bigint;
      username: string;
      displayName: string;
    };
    created: ISODateTimeString;
    updated: ISODateTimeString;
  };
  memberCount: number;
  isBuildersClubOnly: boolean;
  publicEntryAllowed: boolean;
  isLocked: boolean;
  hasVerifiedBadge: boolean;
}
export type GroupName = Pick<GroupsResponse_v1, "name">;
export type GroupDescription = Pick<GroupsResponse_v1, "description">;
export type GroupOwnerInformation = Pick<GroupsResponse_v1, "owner">;
export type GroupShoutInformation = Pick<GroupsResponse_v1, "shout">;
export type GroupMemberCount = Pick<GroupsResponse_v1, "memberCount">;
export interface GroupsResponse_v2 {
  data: [
    {
      id: number | bigint;
      name: string;
      description: string;
      owner: {
        id: number | bigint;
        type: number;
        name: string;
      };
      memberCount: number;
      created: ISODateTimeString;
      hasVerifiedBadge: boolean;
    },
  ];
}
export interface multiGroupResponse_v2 {
  data: [GroupsResponse_v2];
}
export type multiGroup_v2 = Pick<multiGroupResponse_v2, "data">;
export interface GroupNameHistoryResponse {
  previousPageCursor: string;
  nextPageCursor: string;
  data: [
    {
      name: string;
      created: ISODateTimeString;
    },
  ];
}
export type GroupNameHistory = Pick<GroupNameHistoryResponse, "data">;
export interface GroupConfigMetadataResponse {
  groupConfiguration: {
    nameMaxLength: number;
    descriptionMaxLength: number;
    iconMaxFileSizeMb: number;
    cost: number;
    isUsingTwoStepWebviewComponent: boolean;
  };
  recurringPayoutsConfiguration: {
    maxPayoutPartners: number;
  };
  roleConfiguration: {
    nameMaxLength: number;
    descriptionMaxLength: number;
    limit: number;
    cost: number;
    minRank: number;
    maxRank: number;
  };
  groupNameChangeConfiguration: {
    cost: number;
    cooldownInDays: number;
    ownershipCooldownInDays: number;
  };
  isPremiumPayoutsEnabled: boolean;
  isDefaultEmblemPolicyEnabled: boolean;
}
export interface GroupMetadataResponse {
  groupLimit: number;
  currentGroupCount: number;
  groupStatusMaxLength: number;
  groupPostMaxLength: number;
  isGroupWallNotificationsEnabled: boolean;
  groupWallNotificationsSubscribeIntervalInMilliseconds: number;
  areProfileGroupsHidden: boolean;
  isGroupDetailsPolicyEnabled: boolean;
  showPreviousGroupNames: boolean;
}
export interface GroupRolesResponse {
  groupId: number | bigint;
  role: [
    {
      id: number | bigint;
      name: string;
      rank: number;
      memberCount: number;
    },
  ];
}
export type GroupRoles = Pick<GroupRolesResponse, "role">;
export interface UsersInRolesetResponse {
  previousPageCursor: string;
  nextPageCursor: string;
  data: [
    {
      buildersClubMembershipType: number;
      hasVerifiedBadge: boolean;
      userId: number | bigint;
      username: string;
      displayName: string;
    },
  ];
}
export type UsersInRoleset = Pick<UsersInRolesetResponse, "data">;
export interface GroupUsersResponse {
  previousPageResponse: string;
  nextPageResponse: string;
  data: [
    {
      user: {
        buildersClubMembershipType: number;
        hasVerifiedBadge: boolean;
        userId: number | bigint;
        username: string;
        displayName: string;
      };
      role: {
        id: number | bigint;
        name: string;
        description: string;
        rank: number;
        memberCount: number;
      };
    },
  ];
}
export type GroupUsers = Pick<GroupUsersResponse, "data">;
export interface GroupRelationsResponse {
  groupId: number | bigint;
  relationshipType: number;
  totalGroupCount: number;
  relatedGroups: [GroupsResponse_v1];
  nextRowIndex: number;
}
export type GroupRelations = Pick<GroupRelationsResponse, "relatedGroups">;
interface RolePermissions {
  groupPostsPermissions: {
    viewWall: boolean;
    postToWall: boolean;
    deleteFromWall: boolean;
    viewStatus: boolean;
    postToStatus: boolean;
  };
  groupMembershipPermissions: {
    changeRank: boolean;
    inviteMembers: boolean;
    removeMembers: boolean;
  };
  groupEconomyPermissions: {
    spendGroupFunds: boolean;
    advertiseGroup: boolean;
    createItems: boolean;
    manageItems: boolean;
    addGroupPlaces: boolean;
    manageGroupGames: boolean;
    viewGroupPayouts: boolean;
    viewAnalytics: boolean;
  };
  groupOpenCloudPermissions: {
    useCloudAuthentication: boolean;
    administerCloudAuthentication: boolean;
  };
}
export interface GroupRolePermissionsResponse {
  groupId: number | bigint;
  role: {
    id: number | bigint;
    name: string;
    description: string;
    rank: number;
    memberCount: number;
  };
  permissions: RolePermissions;
}
export interface GroupRolesPermissions {
  data: [GroupRolePermissionsResponse];
}
