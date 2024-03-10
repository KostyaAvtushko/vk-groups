import '@vkontakte/vkui/dist/vkui.css';
import CommunityList from './components/CommunityList/CommunityList';
import CommunityFilters from './components/CommunityFilters/CommunityFilter';
import { FilterProvider } from './context/FilterContext';

function App() {

  return (
    <FilterProvider>
      <CommunityFilters />
      <CommunityList />
    </FilterProvider>
  );
}

export default App;
