import { IGroup } from "./IGroup";

export interface GetGroupsResponse {
    result: 1 | 0,
    data?: IGroup[]
}
