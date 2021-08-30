import { Avatar, List, ListItem, ListItemContent, ListItemStart, MasterView, NavLink } from '@/elements';

export default function ChatsMasterView() {
  const chats = [
    {
      id: 1,
      avatar: 'https://avatars.dicebear.com/api/initials/nk.svg',
      primaryText: 'Lorem ipsum',
      secondaryText: 'Aug 12, 2021 12:00',
    },
    {
      id: 2,
      avatar: 'https://avatars.dicebear.com/api/initials/az.svg',
      primaryText: 'Lorem ipsum',
      secondaryText: 'Aug 12, 2021 12:00',
    },
  ];

  return (
    <MasterView title="Chats">
      <List className="pb-4 mx-3">
        {chats.map(({ id, avatar, primaryText, secondaryText }, i) => (
          <ListItem className="p-3 rounded-lg" component={NavLink} href={`/owner/chats/${id}`} exact key={i}>
            <ListItemStart>
              <Avatar src={avatar} size="2xl" />
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
