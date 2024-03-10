import { Avatar } from "@vkontakte/vkui";

function CommunityAvatar ({ color }: { color: string }) {
  return <Avatar style={{ backgroundColor: color, borderRadius: "50%", width: "100px", height: "100px", cursor: "pointer" }}/>
}

export default CommunityAvatar;