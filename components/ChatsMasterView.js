import { Avatar, List, ListItem, ListItemContent, ListItemStart, MasterView, NavLink } from '@/elements';
import { usePath } from '@/hooks';

export default function ChatsMasterView() {
  const { basePath } = usePath();

  const chats = [
    {
      id: 1,
      primaryText: 'Roger Federer',
      secondaryText: 'Monday Aug 12, 2021 12:00 AM',
    },
    {
      id: 2,
      primaryText: 'Novak Djokovic',
      secondaryText: 'Monday Aug 12, 2021 12:00 AM',
    },
  ];

  return (
    <MasterView title="Chats">
      <List className="pb-4 mx-4">
        {chats.map(({ id, primaryText, secondaryText }, i) => (
          <ListItem className="px-4 py-3 rounded-xl" component={NavLink} href={`/${basePath}/chats/${id}`} exact key={i}>
            <ListItemStart>
              <Avatar initials={primaryText[0]} size="2xl" />
            </ListItemStart>
            <ListItemContent>
              <h4 className="text-lg font-medium">{primaryText}</h4>
              <p className="text-sm opacity-60">{secondaryText}</p>
            </ListItemContent>
          </ListItem>
        ))}
      </List>
    </MasterView>
  );
}
