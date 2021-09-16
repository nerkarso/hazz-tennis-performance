import { Avatar, DataListContainer, List, ListItem, ListItemContent, ListItemStart, Modal, ModalHeader } from '@/elements';
import { useAuth, useChatCreate, usePath, useUsers } from '@/hooks';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

export default function ChatNewModal({ isOpen, onClose }) {
  const router = useRouter();
  const { basePath } = usePath();
  const { accountId } = useAuth();
  const { mutate } = useChatCreate();

  const handleNewChat = (toId) => {
    mutate(
      {
        from: accountId,
        to: toId,
      },
      {
        onSuccess: (data) => {
          if (data?.error) {
            toast.error(data.error);
          } else {
            router.push(`/${basePath}/chats/${data?._id}`);
          }
          onClose();
        },
      },
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalHeader title="New chat" onClose={onClose} />
      <div className="px-4 pt-2 pb-4 overflow-y-auto max-h-80">
        <DataListContainer
          count={4}
          hook={useUsers}
          query={{
            filter: {
              _id: { $ne: accountId },
            },
            sort: { first_name: 1 },
          }}>
          {(data) => (
            <List>
              {data.map(({ _id, first_name, image_url, last_name, role }, i) => (
                <ListItem
                  type="button"
                  component="button"
                  onClick={() => handleNewChat(_id)}
                  className="flex items-center w-full gap-4 px-2 py-3 text-left transition duration-200 bg-black bg-opacity-0 rounded-xl hover:bg-opacity-10 focus:bg-opacity-20 dark:bg-white dark:bg-opacity-0 focus:outline-none"
                  key={i}>
                  <ListItemStart>
                    <Avatar src={image_url} initials={first_name[0]} size="xl" />
                  </ListItemStart>
                  <ListItemContent>
                    <h4 className="text-lg font-medium">
                      {first_name} {last_name}
                    </h4>
                    <p className="text-sm capitalize opacity-60">{role}</p>
                  </ListItemContent>
                </ListItem>
              ))}
            </List>
          )}
        </DataListContainer>
      </div>
    </Modal>
  );
}
