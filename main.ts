import {
  AssetBundlesResponse,
  UserFavoriteModelAssetInformationResponse,
  UserFavoriteBundleAssetInformationResponse,
  UserFavoriteSubtypeInformationResponse,
  ItemDetailsResponse,
  TopicsResponse,
} from "./interfaces_catalog";
import {
  UserGroupsResponse_v2,
  UserGroupsResponse_v1,
  GroupsResponse_v1,
  GroupName,
  GroupDescription,
  GroupOwnerInformation,
  GroupShoutInformation,
  GroupMemberCount,
  GroupUsers,
  GroupRelations,
  GroupRolesPermissions,
  UsersInRoleset,
  GroupRoles,
  GroupNameHistory,
} from "./interfaces_group";
import {
  UserResponse,
  User_Username,
  User_DisplayName,
  User_Description,
  UsernameHistoryResponse,
  UserSearch,
  POST_User_UserID,
  POST_User_Username,
} from "./interfaces_user";

const USERS_API_URL: string = "https://users.roblox.com/v1/users";
const GROUPS_API_URL_v1_USERS: string = "https://groups.roblox.com/v1/users";
const GROUPS_API_URL_v2_USERS: string = "https://groups.roblox.com/v2/users";
const GROUPS_API_URL_v1: string = "https://groups.roblox.com/v1/groups";
const CATALOG_API_URL_v1: string = "https://catalog.roblox.com/v1";

export class user {
  id: number;
  constructor(id?: number) {
    this.id = id ?? 1;
  }

  async username(): Promise<User_Username> {
    const response = await fetch(`${USERS_API_URL}/${this.id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    const data = await response.json();
    return data.name;
  }
  async displayname(): Promise<User_DisplayName> {
    const response = await fetch(`${USERS_API_URL}/${this.id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    const data = await response.json();
    return data.displayName;
  }
  async description(): Promise<User_Description> {
    const response = await fetch(`${USERS_API_URL}/${this.id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    const data = await response.json();
    return data.description;
  }
  async fullInfo(): Promise<UserResponse[]> {
    const response = await fetch(`${USERS_API_URL}/${this.id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    const data: UserResponse[] = await response.json();
    return data;
  }

  async usernameHistory(): Promise<UsernameHistoryResponse[]> {
    const response = await fetch(
      `${USERS_API_URL}/${this.id}/username-history`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      },
    );
    const data: UsernameHistoryResponse[] = await response.json();
    return data;
  }

  async userGroups_v1(): Promise<UserGroupsResponse_v1[]> {
    const response = await fetch(
      `${GROUPS_API_URL_v1_USERS}/${this.id}/groups/roles?includeLocked=true&includeNotificationPreferences=false`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      },
    );
    const data = await response.json();
    return data.data;
  }
  async userGroups_v2(): Promise<UserGroupsResponse_v2[]> {
    const response = await fetch(
      `${GROUPS_API_URL_v2_USERS}/${this.id}/groups/roles?includeLocked=true&includeNotificationPreferences=false`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      },
    );
    const data = await response.json();
    return data.data;
  }
}
export async function searchUsers(keyword: string): Promise<UserSearch[]> {
  const response = await fetch(`${USERS_API_URL}/search?keyword=${keyword}`, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  });
  const data = await response.json();
  return data.data;
}
export async function multiUserIDRequest(
  userids: Int32Array,
  excludeBanned?: boolean,
): Promise<POST_User_UserID> {
  const response = await fetch(`${USERS_API_URL}`, {
    method: "POST",
    headers: {
      accept: "application/json",
    },
    body: JSON.stringify({
      userIds: userids,
      excludeBannedUsers: excludeBanned ?? false,
    }),
  });
  const data = await response.json();
  return data.data;
}
export async function multiUsernameRequest(
  usernames: Array<string>,
  excludeBanned?: boolean,
): Promise<POST_User_Username> {
  const response = await fetch(`${USERS_API_URL}`, {
    method: "POST",
    headers: {
      accept: "application/json",
    },
    body: JSON.stringify({
      usernames: usernames,
      excludeBannedUsers: excludeBanned ?? false,
    }),
  });
  const data = await response.json();
  return data.data;
}

export class group {
  id: number;
  constructor(id?: number) {
    this.id = id ?? 1;
  }

  async name(): Promise<GroupName> {
    const response = await fetch(`${GROUPS_API_URL_v1}/${this.id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    const data = await response.json();
    return data.name;
  }
  async description(): Promise<GroupDescription> {
    const response = await fetch(`${GROUPS_API_URL_v1}/${this.id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    const data = await response.json();
    return data.description;
  }
  async members(): Promise<GroupMemberCount> {
    const response = await fetch(`${GROUPS_API_URL_v1}/${this.id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    const data = await response.json();
    return data.memberCount;
  }
  async ownerUserID(): Promise<GroupOwnerInformation[]> {
    const response = await fetch(`${GROUPS_API_URL_v1}/${this.id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    const data = await response.json();
    return data.owner.userId;
  }
  async ownerUsername(): Promise<GroupOwnerInformation[]> {
    const response = await fetch(`${GROUPS_API_URL_v1}/${this.id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    const data = await response.json();
    return data.owner.username;
  }
  async ownerDisplayName(): Promise<User_DisplayName> {
    const response = await fetch(`${GROUPS_API_URL_v1}/${this.id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    const data = await response.json();
    return data.owner.displayName;
  }
  async ownerInformation(): Promise<GroupOwnerInformation[]> {
    const response = await fetch(`${GROUPS_API_URL_v1}/${this.id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    const data = await response.json();
    return data.owner;
  }
  async shoutBody(): Promise<GroupShoutInformation[]> {
    const response = await fetch(`${GROUPS_API_URL_v1}/${this.id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    const data = await response.json();
    return data.shout.body;
  }
  async shoutPosterUserID(): Promise<GroupShoutInformation[]> {
    const response = await fetch(`${GROUPS_API_URL_v1}/${this.id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    const data = await response.json();
    return data.shout.poster.userId;
  }
  async shoutPosterUsername(): Promise<GroupShoutInformation[]> {
    const response = await fetch(`${GROUPS_API_URL_v1}/${this.id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    const data = await response.json();
    return data.shout.poster.username;
  }
  async shoutPosterDisplayName(): Promise<User_DisplayName> {
    const response = await fetch(`${GROUPS_API_URL_v1}/${this.id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    const data = await response.json();
    return data.shout.poster.displayName;
  }
  async shoutInformation(): Promise<GroupShoutInformation[]> {
    const response = await fetch(`${GROUPS_API_URL_v1}/${this.id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    const data = await response.json();
    return data.shout;
  }
  async information(): Promise<GroupsResponse_v1[]> {
    const response = await fetch(`${GROUPS_API_URL_v1}/${this.id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    const data: GroupsResponse_v1[] = await response.json();
    return data;
  }

  async nameHistory(): Promise<GroupNameHistory[]> {
    const response = await fetch(
      `${GROUPS_API_URL_v1}/${this.id}/name-history`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      },
    );
    const data = await response.json();
    return data.data;
  }

  async roles(): Promise<GroupRoles[]> {
    const response = await fetch(`${GROUPS_API_URL_v1}/${this.id}/roles`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    const data = await response.json();
    return data.roles;
  }

  async users(): Promise<GroupUsers[]> {
    const response = await fetch(`${GROUPS_API_URL_v1}/${this.id}/users`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    const data = await response.json();
    return data.data;
  }

  async usersInRoleset(rolesetid?: number): Promise<UsersInRoleset[]> {
    rolesetid ?? 255;
    const response = await fetch(
      `${GROUPS_API_URL_v1}/${this.id}/roles/${rolesetid}/users`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      },
    );
    const data = await response.json();
    return data.data;
  }

  async relationships(enemies?: boolean): Promise<GroupRelations[]> {
    enemies ?? false;
    if (enemies == false) {
      const response = await fetch(
        `${GROUPS_API_URL_v1}/${this.id}/relationships/allies?StartRowIndex=1&MaxRows=10`,
      );
      const data = await response.json();
      return data.relatedGroups;
    } else {
      const response = await fetch(
        `${GROUPS_API_URL_v1}/${this.id}/relationships/enemies?StartRowIndex=1&MaxRows=10`,
      );
      const data = await response.json();
      return data.relatedGroups;
    }
  }

  async guestRolePermissions(): Promise<GroupRolesPermissions[]> {
    const response = await fetch(
      `${GROUPS_API_URL_v1}/${this.id}/roles/guest/permissions`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      },
    );
    const data = await response.json();
    return data.permissions;
  }
}

export class catalogInformation {
  assetId: number | null;
  bundleId: number | null;
  userId: number | null;
  subtypeId: number | null;
  constructor(
    assetId?: number | null,
    bundleId?: number | null,
    userId?: number | null,
    subtypeId?: number | null,
  ) {
    this.assetId = assetId ?? null;
    this.bundleId = bundleId ?? null;
    this.userId = userId ?? null;
    this.subtypeId = subtypeId ?? null;
  }

  async assetBundles(): Promise<AssetBundlesResponse[]> {
    const response = await fetch(
      `${CATALOG_API_URL_v1}/assets/${this.assetId}/bundles`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      },
    );
    const data = await response.json();
    return data.data;
  }
  async userFavoriteAssetModelInfo(): Promise<
    UserFavoriteModelAssetInformationResponse[]
  > {
    const response = await fetch(
      `${CATALOG_API_URL_v1}/favorites/users/${this.userId}/assets/${this.assetId}/favorite`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      },
    );
    const data = await response.json();
    return data;
  }
  async userFavoriteBundleInfo(): Promise<
    UserFavoriteBundleAssetInformationResponse[]
  > {
    const response = await fetch(
      `${CATALOG_API_URL_v1}/favorites/users/${this.userId}/bundles/${this.bundleId}/favorite`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      },
    );
    const data = await response.json();
    return data;
  }
  async userFavoriteSubtypeInfo(): Promise<
    UserFavoriteSubtypeInformationResponse[]
  > {
    const response = await fetch(
      `${CATALOG_API_URL_v1}/favorites/users/${this.userId}/favorites/${this.subtypeId}/bundles`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      },
    );
    const data = await response.json();
    return data;
  }
  async catalogItemDetails(itemsObject: {
    itemType: number;
    id: number;
  }): Promise<ItemDetailsResponse> {
    const response = await fetch(
      `${CATALOG_API_URL_v1}/catalog/items/details`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
        },
        body: JSON.stringify({
          items: [
            {
              itemType: itemsObject.itemType,
              id: itemsObject.id,
            },
          ],
        }),
      },
    );
    const data = await response.json();
    return data.data;
  }
  async getTopics(
    itemsObject: { TargetId: number; ItemType: number },
    topics: Array<string>,
    inputQuery: string,
    maxResults?: number,
  ): Promise<TopicsResponse> {
    maxResults ?? 1;
    const response = await fetch(`${CATALOG_API_URL_v1}/topic/get-topics`, {
      method: "POST",
      headers: {
        accept: "application/json",
      },
      body: JSON.stringify({
        items: [
          {
            TargetId: itemsObject.TargetId,
            ItemType: itemsObject.ItemType,
          },
        ],
        selectTopics: topics,
        inputQuery: inputQuery,
        maxResult: maxResults,
        genderType: 1,
      }),
    });
    const data = await response.json();
    return data;
  }
}
