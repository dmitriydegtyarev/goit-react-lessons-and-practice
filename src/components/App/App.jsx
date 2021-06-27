import { PageTitle } from 'components/PageTitle/PageTitle';
import { Event } from 'components/Event/Event';
import upcomingEvents from '../../upcoming-events.json';

export const App = () => {
  return (
    <>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <Event />
    </>
  );
};
