import { Checkbox, FormItem, FormLayoutGroup, Input, Radio, RadioGroup, Spinner } from "@vkontakte/vkui";
import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../context/FilterContext";
import { mockGroups } from "../../mockGroups";
import { filterCommunities } from "../../utils/mockServer";

function CommunityFilters() {
  const [communityType, setCommunityType] = useState<"all" | "open" | "closed">("all");
  const [communityColor, setCommunityColor] = useState<string>("");
  const [communityFriends, setCommunityFriends] = useState<"subscribed" | "unsubscribed" | null>(null);

  const [loading, setLoading] = useState<boolean>(false);

  const { dispatch } = useContext(FilterContext);

  const handleCommunityFriends = (value: "subscribed" | "unsubscribed") => {
    value === communityFriends ? setCommunityFriends(null) : setCommunityFriends(value);
  }

  useEffect(() => {
    dispatch([]);
    setLoading(true);
    const getCommunities = async () => {
      try {
        const res = await filterCommunities(mockGroups, communityType, communityColor, communityFriends);
        if (res.result) {
          dispatch(res.data || []);
        } else { 
          dispatch([]);
        }
      } catch (error) {
        dispatch([]);
      }
      
      setLoading(false);
    }

    getCommunities();
  },[communityType, communityColor, communityFriends, dispatch])

  return (
    <>
      <FormLayoutGroup>
        <FormItem top="Тип группы">
          <RadioGroup>
            <Radio defaultChecked name="type" value="all" onClick={() => setCommunityType("all")}>
              Все
            </Radio>
            <Radio name="type" value="open" onClick={() => setCommunityType("open")}>
              Открытые
            </Radio>
            <Radio name="type" value="closed" onClick={() => setCommunityType("closed")}>
              Закрытые
            </Radio>
          </RadioGroup>
        </FormItem>
        <FormItem htmlFor="community-color" top="Цвет">
          <Input
            id="community-color"
            type="text"
            defaultValue=""
            placeholder="red"
            value={communityColor}
            onChange={(e) => setCommunityColor(e.target.value)}
          />
        </FormItem>
        <FormItem top="Наличие друзей в группе">
          <Checkbox 
            checked={communityFriends === 'subscribed'}
            name="friends" 
            value="subscribed" 
            onClick={() => handleCommunityFriends('subscribed')}
          >
            Друзья подписаны
          </Checkbox>
          <Checkbox 
            checked={communityFriends === 'unsubscribed'}
            name="friends" 
            value="unsubscribed" 
            onClick={() => handleCommunityFriends('unsubscribed')}>
            Никто из друзей не подписан
          </Checkbox>
        </FormItem>
      </FormLayoutGroup>
      {loading && <Spinner size="medium" />}
    </>
  );
}

export default CommunityFilters;