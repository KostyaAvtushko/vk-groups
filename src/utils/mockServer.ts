import { GetGroupsResponse, IGroup } from "../types";

export async function filterCommunities(
    communities: IGroup[],
    communityType: "all" | "open" | "closed", 
    communityColor?: string, 
    communityFriends?: "subscribed" | "unsubscribed" | null
    ): Promise<GetGroupsResponse> {

    let res = [...communities];

    await new Promise<void> (resolve => setTimeout(resolve, 1000));   
    if(communityType === "open") {
        res = res.filter(community => !community.closed);
    }
    if(communityType === "closed") {
        res = res.filter(community => community.closed);
    }
    if (communityColor) {
        res = res.filter(community => community.avatar_color?.startsWith(communityColor));
    }
    if (communityFriends === "subscribed") {
        res = res.filter(community => !!community.friends?.length);
    }
    if (communityFriends === "unsubscribed") {
        res = res.filter(community => !community.friends?.length);
    }
    const result: 0 | 1 = (Math.round(Math.random()) < 80) as any;

    return {
        result: result,
        data: res
    };
} 