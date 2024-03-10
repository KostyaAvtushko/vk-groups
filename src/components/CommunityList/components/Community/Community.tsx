import { RichCell } from "@vkontakte/vkui";
import { IGroup } from "../../../../types";
import CommunityFriends from "./components/CommunityFriends";
import CommunityAvatar from "./components/CommunityAvatar";
import { getEndingForSubscribers } from "../../../../utils/endings";


function Community (props: IGroup) {

    return (
      <RichCell
        subhead={(props.closed !== undefined) && `${props.closed ? "закрытая группа" : "открытая группа"}`}
        before={<CommunityAvatar color={props?.avatar_color || ""}/>}
        caption={!!props?.members_count && `${props.members_count} ${getEndingForSubscribers(props.members_count)}`}
        bottom={props.friends && <CommunityFriends friends={props.friends || []}/>}
        style={{ height: 'fit-content' }}
      >
        {props?.name || ""}
      </RichCell>
    );
}


export default Community;
