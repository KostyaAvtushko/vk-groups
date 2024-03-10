import { Card, Spinner } from "@vkontakte/vkui";
import Community from "./components/Community/Community";
import { IGroup } from "../../types";
import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";


function CommunityList () {
    const communitiesContext= useContext(FilterContext);
    const communities = communitiesContext?.state;

    return (
      <>
        {!!communities.length &&
          <Card mode="outline" style={{ width: '360px' }}>
            {communities?.map((community: IGroup) => (
              <Community key={community.id} {...community} />
            ))}
          </Card>
        }
      </>
    );
}

export default CommunityList