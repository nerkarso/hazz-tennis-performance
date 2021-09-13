import ChatNewModal from '@/components/ChatNewModal';
import DataListContainer from '@/components/DataListContainer';
import { Avatar, Button, List, ListItem, ListItemContent, ListItemEnd, ListItemStart, MasterView, NavLink } from '@/elements';
import { useChatDelete, useChats, usePath } from '@/hooks';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline';
import { format } from 'date-fns';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ChatMasterView() {
  return (
    <MasterView title="Chats" toolbar={<MasterViewToolbar />}>
      <div className="pb-4 mx-6">
        <DataListContainer count={4} hook={useChats} query={{}}>
          {(data) => (
            <List>
              {data.map((chat, i) => (
                <ChatListItem data={chat} key={i} />
              ))}
            </List>
          )}
        </DataListContainer>
      </div>
    </MasterView>
  );
}

function MasterViewToolbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button type="button" onClick={() => setIsOpen(true)} color="neutral" variant="solid" rounded>
        <PencilAltIcon className="w-6 h-6" />
      </Button>
      <ChatNewModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

function ChatListItem({ data }) {
  const { _id, to, created_at } = data;
  const { basePath } = usePath();
  const { mutate } = useChatDelete();

  const handleDelete = () => {
    mutate(_id, {
      onSuccess: (data) => {
        if (data?.error) {
          toast.error(data.error);
        } else {
          toast.success('Chat deleted');
        }
      },
    });
  };

  return (
    <ListItem className="px-2 py-3 -mx-2 rounded-xl" component={NavLink} href={`/${basePath}/chats/${_id}`} exact>
      <ListItemStart>
        <Avatar src={to?.image_url} initials={to?.first_name[0]} size="2xl" />
      </ListItemStart>
      <ListItemContent>
        <h4 className="mb-1 text-lg font-medium">
          {to?.first_name} {to?.last_name}
        </h4>
        <p className="flex items-center gap-2 capitalize truncate opacity-60">
          <span>{to?.role}</span>
          <span>&bull;</span>
          <time>{format(new Date(created_at), 'dd MMM y')}</time>
        </p>
      </ListItemContent>
      <ListItemEnd>
        <Button type="button" onClick={handleDelete} color="red" variant="ghost" rounded>
          <TrashIcon className="w-6 h-6" />
        </Button>
      </ListItemEnd>
    </ListItem>
  );
}
