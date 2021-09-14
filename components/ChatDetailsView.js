import { Avatar, ChatBubble, DetailsView, EmptyStateTitle, EmptyStateView, Input } from '@/elements';
import { DetailsViewFooter, DetailsViewHeader, DetailsViewMain } from '@/elements/DetailsView';
import { useAuth, useChat } from '@/hooks';
import cx from 'classnames';
import { format } from 'date-fns';
import { useRouter } from 'next/router';

export default function ChatDetailsView() {
  const { query } = useRouter();

  if (query?.id) return <ChatDetailsContainer chatId={query?.id} />;

  return <SkeletonChatDetails />;
}

function ChatDetailsContainer({ chatId }) {
  const { accountId } = useAuth();
  const { data, error, isError, isLoading } = useChat(chatId);

  if (isLoading) return <SkeletonChatDetails animate />;

  if (isError) {
    return (
      <EmptyStateView fullScreen>
        <EmptyStateTitle>{error.message}</EmptyStateTitle>
      </EmptyStateView>
    );
  }

  if (data?.error) {
    return (
      <EmptyStateView fullScreen>
        <EmptyStateTitle>{data?.error}</EmptyStateTitle>
      </EmptyStateView>
    );
  }

  if (data) {
    const { from, messages, to } = data;
    const user = accountId === from?._id ? to : from;

    return (
      <DetailsView className="flex flex-col">
        <DetailsViewHeader>
          <Avatar src={user?.image_url} initials={user?.first_name[0]} size="lg" />
          <div className="ml-4">
            <h1 className="text-lg font-bold">
              {user?.first_name} {user?.last_name}
            </h1>
            <span className="block text-sm capitalize opacity-60">{user?.role}</span>
          </div>
        </DetailsViewHeader>
        {messages.length > 0 ? (
          <DetailsViewMain className="flex flex-col justify-end gap-2 px-6 pb-4">
            {messages.map(({ created_at, from, message }, i) => (
              <ChatBubble secondary={format(new Date(created_at), 'HH:mm')} inverse={accountId === from} key={i}>
                {message}
              </ChatBubble>
            ))}
          </DetailsViewMain>
        ) : (
          <DetailsViewMain>
            <EmptyStateView fullHeight>
              <EmptyStateTitle>Start writing something</EmptyStateTitle>
            </EmptyStateView>
          </DetailsViewMain>
        )}
        <DetailsViewFooter>
          <Input type="text" className="w-full" placeholder="Write something and press enter" />
        </DetailsViewFooter>
      </DetailsView>
    );
  }

  return <SkeletonChatDetails />;
}

function SkeletonChatDetails({ animate }) {
  return (
    <DetailsView className={cx('flex flex-col', { 'animate-pulse': animate })}>
      <DetailsViewHeader>
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800"></div>
        <div className="ml-4">
          <span className="block w-40 h-4 mb-2 rounded-md bg-neutral-100 dark:bg-neutral-800"></span>
          <span className="block w-24 h-4 rounded-md bg-neutral-100 dark:bg-neutral-800"></span>
        </div>
      </DetailsViewHeader>
      <DetailsViewMain className="flex flex-col justify-end gap-2 px-6 pb-4">
        <div className="w-24 h-16 rounded-bl-none rounded-2xl bg-neutral-100 dark:bg-neutral-800"></div>
        <div className="w-40 h-16 rounded-br-none rounded-2xl place-self-end bg-neutral-100 dark:bg-neutral-800"></div>
        <div className="w-48 h-16 rounded-bl-none rounded-2xl bg-neutral-100 dark:bg-neutral-800"></div>
        <div className="w-32 h-16 rounded-br-none rounded-2xl place-self-end bg-neutral-100 dark:bg-neutral-800"></div>
      </DetailsViewMain>
      <DetailsViewFooter>
        <div className="w-full h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800"></div>
      </DetailsViewFooter>
    </DetailsView>
  );
}
