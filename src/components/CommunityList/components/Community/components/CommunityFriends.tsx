import { useState } from "react";
import { User } from "../../../../../types";
import { Div, Tappable, Text } from "@vkontakte/vkui";
import { Icon16DropdownFlipped, Icon16Dropdown } from "@vkontakte/icons";
import Friend from "./Friend";
import { getEndingForFriendsSubscribed } from "../../../../../utils/endings";

function CommunityFriends ({ friends }: { friends: User[] }) {
  const [shown, setShown] = useState(false);

  return (
    <Div style={{ paddingLeft: "0"}}>
      <Tappable
        onClick={() => setShown(!shown)}
        style={{ display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: "4px"}}
      >
        {shown ? <Icon16DropdownFlipped/> : <Icon16Dropdown />}
        <Text style={{ padding: "0 3px" }}>{friends.length} {getEndingForFriendsSubscribed(friends.length)}</Text>
      </Tappable>
      {shown &&
        <Div 
          style={{ marginTop: "5px", display: "flex", justifyContent: "center", flexDirection: "column" }}
        >
          {friends.map(friend => 
            <Friend 
              key={crypto.randomUUID()} 
              firstName={friend.first_name} 
              lastName={friend.last_name} 
            />
          )}
        </Div>
      }
    </Div>
  );
}

export default CommunityFriends;