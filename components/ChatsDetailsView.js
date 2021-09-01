import { Avatar, Button, ChatBubble, DetailsView, Input } from '@/elements';
import { TrashIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';

export default function ChatsDetailsView() {
  const router = useRouter();

  const handleDelete = () => {
    const basePath = router.asPath.split('/')[1];
    router.replace(`/${basePath}/chats`);
  };

  return (
    <DetailsView className="flex flex-col">
      <header className="flex items-center flex-shrink-0 h-20 px-6">
        <Avatar initials="R" size="lg" />
        <div className="ml-4">
          <h1 className="text-lg font-bold">Roger Federer</h1>
          <span className="block text-sm opacity-60">Online</span>
        </div>
        <div className="ml-auto">
          <Button type="button" onClick={handleDelete} color="red" variant="ghost">
            <TrashIcon className="w-6 h-6" />
          </Button>
        </div>
      </header>
      <main className="inline-flex flex-col flex-1 gap-4 px-6 pb-4 overflow-y-auto">
        {Array.from(Array(12)).map((x, i) => (
          <ChatBubble secondary="12 Aug 2021 12:00 AM" inverse={i % 2 === 1} key={i}>
            Lorem ipsum {i}
          </ChatBubble>
        ))}
      </main>
      <footer className="flex items-center flex-shrink-0 h-20 px-6">
        <Input type="text" className="w-full" placeholder="Write something and press enter" />
      </footer>
    </DetailsView>
  );
}
