import { twMerge } from "tailwind-merge";
import React, {
  ReactNode,
  useActionState,
  useOptimistic,
  useState,
  useTransition,
} from "react";
import { LikeIndicator } from "../../components/LoadingIndicator.tsx";
import { longRunningOperation } from "./utils.ts";
import { incrementLikeOnServer } from "./increment-like-on-server.ts";
import { ErrorBoundary } from "react-error-boundary";

type LikesWidgetProps = {
  initialLikes: number;
};

// eb
export default function LikesWidgetWrapper({ initialLikes }: LikesWidgetProps) {
  return (
    <ErrorBoundary fallback={"Could not like"}>
      <LikesWidget initialLikes={initialLikes} />
    </ErrorBoundary>
  );
}

export function LikesWidget({ initialLikes }: LikesWidgetProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [isPending, startTransition] = useTransition();

  const [optimisticLikes, setOptimisticLikes] = useOptimistic(likes);

  // tr1
  // ol

  const handleLikeClick = async () => {
    startTransition(async () => {
      setOptimisticLikes(likes + 1);
      const newLikes = await incrementLikeOnServer();
      setLikes(newLikes);
    });
  };

  return (
    <LikeButton disabled={isPending} onClick={handleLikeClick}>
      <span>{optimisticLikes}</span>
      {isPending ? <LikeIndicator /> : <HeartIcon />}
    </LikeButton>
  );
}

type LikeButtonProps = {
  disabled: boolean;
  children: ReactNode;
  onClick(): void;
};

function LikeButton({ disabled, children, onClick }: LikeButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={twMerge(
        "me-2 flex space-x-2 rounded border border-orange_2 bg-white p-2 text-[15px] text-orange_2 hover:cursor-pointer hover:bg-orange_2 hover:text-white disabled:cursor-default disabled:border-gray-900 disabled:bg-gray-300 disabled:text-gray-900 disabled:hover:text-gray-900",
      )}
    >
      {children}
    </button>
  );
}

function HeartIcon() {
  return (
    <span>
      <i className="fa-regular fa-heart mr-2"></i>
    </span>
  );
}
