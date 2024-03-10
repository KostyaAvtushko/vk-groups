import { Tappable, Text } from "@vkontakte/vkui";

type FriendProps = {
  firstName: string,
  lastName: string,
};

function Friend(friend: FriendProps) {
  return (
    <Tappable 
      onClick={() => {}}
      style={{ display: "flex", alignItems: "center", height: "30px", width: "100%" }}
    >
      <Text style={{ paddingLeft: "6px" }}>{friend.firstName} {friend.lastName}</Text>
    </Tappable>
  );
}

export default Friend;