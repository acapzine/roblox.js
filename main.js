var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const USERS_API_URL = 'https://users.roblox.com/v1/users';
const GROUPS_API_URL_v1_USERS = 'https://groups.roblox.com/v1/users';
const GROUPS_API_URL_v2_USERS = 'https://groups.roblox.com/v2/users';
const GROUPS_API_URL_v1 = 'https://groups.roblox.com/v1/groups';
const CATALOG_API_URL_v1 = 'https://catalog.roblox.com/v1';
export class user {
    constructor(id) {
        this.id = id !== null && id !== void 0 ? id : 1;
    }
    username() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${USERS_API_URL}/${this.id}`, {
                method: "GET",
                headers: {
                    'accept': 'application/json'
                }
            });
            const data = yield response.json();
            return data.name;
        });
    }
    displayname() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${USERS_API_URL}/${this.id}`, {
                method: "GET",
                headers: {
                    'accept': 'application/json'
                }
            });
            const data = yield response.json();
            return data.displayName;
        });
    }
    description() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${USERS_API_URL}/${this.id}`, {
                method: "GET",
                headers: {
                    'accept': 'application/json'
                }
            });
            const data = yield response.json();
            return data.description;
        });
    }
    fullInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${USERS_API_URL}/${this.id}`, {
                method: "GET",
                headers: {
                    'accept': 'application/json'
                }
            });
            const data = yield response.json();
            return data;
        });
    }
    usernameHistory() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${USERS_API_URL}/${this.id}/username-history`, {
                method: "GET",
                headers: {
                    'accept': 'application/json',
                },
            });
            const data = yield response.json();
            return data;
        });
    }
    userGroups_v1() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${GROUPS_API_URL_v1_USERS}/${this.id}/groups/roles?includeLocked=true&includeNotificationPreferences=false`, {
                method: "GET",
                headers: {
                    'accept': 'application/json',
                },
            });
            const data = yield response.json();
            return data.data;
        });
    }
    userGroups_v2() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${GROUPS_API_URL_v2_USERS}/${this.id}/groups/roles?includeLocked=true&includeNotificationPreferences=false`, {
                method: "GET",
                headers: {
                    'accept': 'application/json',
                },
            });
            const data = yield response.json();
            return data.data;
        });
    }
}
export function searchUsers(keyword) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${USERS_API_URL}/search?keyword=${keyword}`, {
            method: "GET",
            headers: {
                'accept': 'application/json',
            },
        });
        const data = yield response.json();
        return data.data;
    });
}
export function multiUserIDRequest(userids, excludeBanned) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${USERS_API_URL}`, {
            method: "POST",
            headers: {
                'accept': 'application/json',
            },
            body: JSON.stringify({
                userIds: userids,
                excludeBannedUsers: excludeBanned !== null && excludeBanned !== void 0 ? excludeBanned : false,
            }),
        });
        const data = yield response.json();
        return data.data;
    });
}
export function multiUsernameRequest(usernames, excludeBanned) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${USERS_API_URL}`, {
            method: "POST",
            headers: {
                'accept': 'application/json',
            },
            body: JSON.stringify({
                usernames: usernames,
                excludeBannedUsers: excludeBanned !== null && excludeBanned !== void 0 ? excludeBanned : false,
            }),
        });
        const data = yield response.json();
        return data.data;
    });
}
export class group {
    constructor(id) {
        this.id = id !== null && id !== void 0 ? id : 1;
    }
    name() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${GROUPS_API_URL_v1}/${this.id}`, {
                method: "GET",
                headers: {
                    'accept': 'application/json',
                },
            });
            const data = yield response.json();
            return data.name;
        });
    }
    description() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${GROUPS_API_URL_v1}/${this.id}`, {
                method: "GET",
                headers: {
                    'accept': 'application/json',
                },
            });
            const data = yield response.json();
            return data.description;
        });
    }
    members() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${GROUPS_API_URL_v1}/${this.id}`, {
                method: "GET",
                headers: {
                    'accept': 'application/json',
                },
            });
            const data = yield response.json();
            return data.memberCount;
        });
    }
    ownerUserID() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${GROUPS_API_URL_v1}/${this.id}`, {
                method: "GET",
                headers: {
                    'accept': 'application/json',
                },
            });
            const data = yield response.json();
            return data.owner.userId;
        });
    }
    ownerUsername() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${GROUPS_API_URL_v1}/${this.id}`, {
                method: "GET",
                headers: {
                    'accept': 'application/json',
                },
            });
            const data = yield response.json();
            return data.owner.username;
        });
    }
    ownerDisplayName() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${GROUPS_API_URL_v1}/${this.id}`, {
                method: "GET",
                headers: {
                    'accept': 'application/json',
                },
            });
            const data = yield response.json();
            return data.owner.displayName;
        });
    }
    ownerInformation() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${GROUPS_API_URL_v1}/${this.id}`, {
                method: "GET",
                headers: {
                    'accept': 'application/json',
                },
            });
            const data = yield response.json();
            return data.owner;
        });
    }
    shoutBody() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${GROUPS_API_URL_v1}/${this.id}`, {
                method: "GET",
                headers: {
                    'accept': 'application/json',
                },
            });
            const data = yield response.json();
            return data.shout.body;
        });
    }
    shoutPosterUserID() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${GROUPS_API_URL_v1}/${this.id}`, {
                method: "GET",
                headers: {
                    'accept': 'application/json',
                },
            });
            const data = yield response.json();
            return data.shout.poster.userId;
        });
    }
    shoutPosterUsername() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${GROUPS_API_URL_v1}/${this.id}`, {
                method: "GET",
                headers: {
                    'accept': 'application/json',
                },
            });
            const data = yield response.json();
            return data.shout.poster.username;
        });
    }
    shoutPosterDisplayName() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${GROUPS_API_URL_v1}/${this.id}`, {
                method: "GET",
                headers: {
                    'accept': 'application/json',
                },
            });
            const data = yield response.json();
            return data.shout.poster.displayName;
        });
    }
    shoutInformation() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${GROUPS_API_URL_v1}/${this.id}`, {
                method: "GET",
                headers: {
                    'accept': 'application/json',
                },
            });
            const data = yield response.json();
            return data.shout;
        });
    }
    information() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${GROUPS_API_URL_v1}/${this.id}`, {
                method: "GET",
                headers: {
                    'accept': 'application/json',
                },
            });
            const data = yield response.json();
            return data;
        });
    }
    nameHistory() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${GROUPS_API_URL_v1}/${this.id}/name-history`, {
                method: "GET",
                headers: {
                    'accept': 'application/json',
                },
            });
            const data = yield response.json();
            return data.data;
        });
    }
    roles() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${GROUPS_API_URL_v1}/${this.id}/roles`, {
                method: "GET",
                headers: {
                    'accept': 'application/json',
                },
            });
            const data = yield response.json();
            return data.roles;
        });
    }
    users() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${GROUPS_API_URL_v1}/${this.id}/users`, {
                method: "GET",
                headers: {
                    'accept': 'application/json',
                },
            });
            const data = yield response.json();
            return data.data;
        });
    }
    usersInRoleset(rolesetid) {
        return __awaiter(this, void 0, void 0, function* () {
            rolesetid !== null && rolesetid !== void 0 ? rolesetid : 255;
            const response = yield fetch(`${GROUPS_API_URL_v1}/${this.id}/roles/${rolesetid}/users`, {
                method: "GET",
                headers: {
                    'accept': 'application/json',
                },
            });
            const data = yield response.json();
            return data.data;
        });
    }
    relationships(enemies) {
        return __awaiter(this, void 0, void 0, function* () {
            enemies !== null && enemies !== void 0 ? enemies : false;
            if (enemies == false) {
                const response = yield fetch(`${GROUPS_API_URL_v1}/${this.id}/relationships/allies?StartRowIndex=1&MaxRows=10`);
                const data = yield response.json();
                return data.relatedGroups;
            }
            else {
                const response = yield fetch(`${GROUPS_API_URL_v1}/${this.id}/relationships/enemies?StartRowIndex=1&MaxRows=10`);
                const data = yield response.json();
                return data.relatedGroups;
            }
        });
    }
    guestRolePermissions() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${GROUPS_API_URL_v1}/${this.id}/roles/guest/permissions`, {
                method: "GET",
                headers: {
                    'accept': 'application/json',
                },
            });
            const data = yield response.json();
            return data.permissions;
        });
    }
}
export class catalogInformation {
    constructor(assetId, bundleId, userId, subtypeId) {
        this.assetId = assetId !== null && assetId !== void 0 ? assetId : null;
        this.bundleId = bundleId !== null && bundleId !== void 0 ? bundleId : null;
        this.userId = userId !== null && userId !== void 0 ? userId : null;
        this.subtypeId = subtypeId !== null && subtypeId !== void 0 ? subtypeId : null;
    }
    assetBundles() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${CATALOG_API_URL_v1}/assets/${this.assetId}/bundles`, {
                method: "GET",
                headers: {
                    'accept': 'application/json',
                },
            });
            const data = yield response.json();
            return data.data;
        });
    }
    userFavoriteAssetModelInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${CATALOG_API_URL_v1}/favorites/users/${this.userId}/assets/${this.assetId}/favorite`, {
                method: "GET",
                headers: {
                    'accept': 'application/json',
                },
            });
            const data = yield response.json();
            return data;
        });
    }
    userFavoriteBundleInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${CATALOG_API_URL_v1}/favorites/users/${this.userId}/bundles/${this.bundleId}/favorite`, {
                method: "GET",
                headers: {
                    'accept': 'application/json',
                },
            });
            const data = yield response.json();
            return data;
        });
    }
    userFavoriteSubtypeInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${CATALOG_API_URL_v1}/favorites/users/${this.userId}/favorites/${this.subtypeId}/bundles`, {
                method: "GET",
                headers: {
                    'accept': 'application/json',
                },
            });
            const data = yield response.json();
            return data;
        });
    }
    catalogItemDetails(itemsObject) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${CATALOG_API_URL_v1}/catalog/items/details`, {
                method: "POST",
                headers: {
                    'accept': 'application/json',
                },
                body: JSON.stringify({
                    items: [
                        {
                            itemType: itemsObject.itemType,
                            id: itemsObject.id,
                        },
                    ],
                }),
            });
            const data = yield response.json();
            return data.data;
        });
    }
    getTopics(itemsObject, topics, inputQuery, maxResults) {
        return __awaiter(this, void 0, void 0, function* () {
            maxResults !== null && maxResults !== void 0 ? maxResults : 1;
            const response = yield fetch(`${CATALOG_API_URL_v1}/topic/get-topics`, {
                method: "POST",
                headers: {
                    'accept': 'application/json',
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
            const data = yield response.json();
            return data;
        });
    }
}
//# sourceMappingURL=main.js.map