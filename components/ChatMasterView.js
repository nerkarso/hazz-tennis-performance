import ChatNewModal from '@/components/ChatNewModal';
import { Avatar, Button, DataListContainer, List, ListItem, ListItemContent, ListItemEnd, ListItemStart, MasterView, NavLink } from '@/elements';
import { useAuth, useChatDelete, useChats, usePath } from '@/hooks';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ChatMasterView() {
  const { accountId } = useAuth();

  return (
    <MasterView title="Chats" toolbar={<MasterViewToolbar />}>
      <div className="pb-4 mx-6">
        <DataListContainer
          count={4}
          hook={useChats}
          query={{
            filter: { $or: [{ from: accountId }, { to: accountId }] },
            sort: { created_at: -1 },
          }}>
          {(data) => (
            <List>
              {data.map(({ from, to, ...data }, i) => (
                <ChatListItem data={data} user={accountId === from?._id ? to : from} key={i} />
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

function ChatListItem({ data, user }) {
  const { _id, created_at } = data;
  const router = useRouter();
  const { basePath } = usePath();
  const { mutate } = useChatDelete();

  const handleDelete = () => {
    mutate(_id, {
      onSuccess: (data) => {
        if (data?.error) {
          toast.error(data.error);
        } else {
          toast.success('Chat deleted');
          router.replace(`/${basePath}/chats`);
        }
      },
    });
  };

  return (
    <ListItem className="px-2 py-3 -mx-2 rounded-xl" component={NavLink} href={`/${basePath}/chats/${_id}`} exact>
      <ListItemStart>
        <Avatar src={user?.image_url} initials={user?.first_name[0]} size="2xl" />
      </ListItemStart>
      <ListItemContent>
        <h4 className="mb-1 text-lg font-medium">
          {user?.first_name} {user?.last_name}
        </h4>
        <p className="flex items-center gap-2 capitalize truncate opacity-60">
          <span>{user?.role}</span>
          <span>&bull;</span>
          <time>{format(new Date(created_at), 'MMM dd, y')}</time>
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
