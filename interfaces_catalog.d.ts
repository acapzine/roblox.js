import { ISODateTimeString } from './interfaces_universal.js';
interface AssetBundlesData {
    id: number | bigint;
    name: string;
    description: string;
    bundleType: string;
    items: [
        {
            owned: boolean;
            id: number | bigint;
            name: string;
            type: string;
        }
    ];
    creator: {
        id: number | bigint;
        name: string;
        type: string;
        hasVerifiedBadge: boolean;
    };
    product: {
        id: number | bigint;
        type: string;
        isPublicDomain: boolean;
        isForSale: boolean;
        priceInRobux: number;
        isFree: boolean;
        noPriceText: string;
        premiumPricing: {
            premiumDiscountPercentage: number;
            premiumPriceRobux: number;
        };
    };
    itemRestrictions: Int32Array;
    collectibleItemDetail: {
        collectibleItemId: string;
        collectibleProductId: string;
        price: number;
        lowestPrice: number;
        lowestResalePrice: number;
        totalQuantity: number;
        unitsAvailable: number;
        saleLocation: {
            saleLocationType: number;
            saleLocationTypeId: number;
            universeIds: Int32Array;
            enabledUniverseIds: Int32Array;
        };
        hasResellers: boolean;
        saleStatus: number;
        quantityLimitPerUser: number;
        offSaleDeadline: ISODateTimeString;
        collectibleItemType: number;
        lowestAvailableResaleProductId: string;
        lowestAvailableResaleItemInstanceId: string;
        resaleRestriction: number;
    };
}
export interface AssetBundlesResponse {
    previousPageCursor: string;
    nextPageCursor: string;
    data: [
        AssetBundlesData
    ];
}
export interface UserFavoriteModelAssetInformationResponse {
    assetId: number | bigint;
    userId: number | bigint;
    created: ISODateTimeString;
}
export interface UserFavoriteBundleAssetInformationResponse {
    bundleId: number | bigint;
    userId: number | bigint;
    created: ISODateTimeString;
}
interface UserFavoriteSubtypeIDResponseInformation {
    id: number | bigint;
    name: string;
    description: string;
    bundleType: string;
    items: [
        {
            owned: boolean;
            id: number | bigint;
            name: string;
            type: string;
        }
    ];
    creator: {
        id: number | bigint;
        name: string;
        type: string;
        hasVerifiedBadge: boolean;
    };
    product: {
        id: number | bigint;
        type: string;
        isPublicDomain: boolean;
        isForSale: boolean;
        priceInRobux: number;
        isFree: boolean;
        noPriceText: string;
        premiumPricing: {
            premiumDiscountPercentage: number;
            premiumPriceInRobux: number;
        };
    };
    itemRestrictions: Int32Array;
    collectibleItemDetail: {
        collectibleItemId: string;
        collectibleProductId: string;
        price: number | bigint;
        lowestPrice: number;
        lowestResalePrice: number;
        totalQuantity: number;
        unitsAvailable: number;
        saleLocation: {
            saleLocationType: number;
            saleLocationTypeId: number | bigint;
            universeIds: [Int32Array];
            enabledUniverseIds: [Int32Array];
        };
        hasResellers: boolean;
        saleStatus: number;
        quantityLimitPerUsers: number;
        offSaleDeadline: ISODateTimeString;
        collectibleItemType: number;
        lowestAvailableResaleProductId: string;
        lowestAvailableResaleItemInstanceId: string;
        resaleRestriction: number;
    };
}
export interface UserFavoriteSubtypeInformationResponse {
    favorites: readonly [
        UserFavoriteSubtypeIDResponseInformation
    ];
    moreFavorites: boolean;
    nextCursor: string;
    previousCursor: string;
}
interface ItemDetails {
    id: number | bigint;
    itemType: number;
    assetType: number;
    bundleType: number;
    name: string;
    description: string;
    productId: number | bigint;
    bundledItems: [
        {
            owned: boolean;
            id: number | bigint;
            name: string;
            type: string;
        }
    ];
    itemStatus: [Int32Array];
    itemRestrictions: [Int32Array];
    creatorHasVerifiedBadge: boolean;
    creatorType: number;
    creatorName: string;
    price: number;
    premiumPricing: {
        premiumDiscountPercentage: number;
        premiumPriceInRobux: number;
    };
    lowestPrice: number;
    lowestResalePrice: number;
    unitsAvailableForConsumption: number;
    purchaseCount: number;
    favoriteCount: number;
    offSaleDeadline: ISODateTimeString;
    collectibleItemId: string;
    totalQuantity: number;
    saleLocationType: number;
    hasResellers: boolean;
    isOffSale: boolean;
    quantityLimitPerUser: number;
}
export interface ItemDetailsResponse {
    data: [
        ItemDetails
    ];
}
export interface TopicsResponse {
    topics: [
        {
            displayName: string;
            originalTopicName: string;
        }
    ];
    error: {
        Message: string;
        Code: number;
    };
}
export {};
