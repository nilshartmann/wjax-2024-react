import { twMerge } from "tailwind-merge";
import React, { ReactNode, useActionState, useState } from "react";
import { LikeIndicator } from "../../components/LoadingIndicator.tsx";
import { longRunningOperation } from "./utils.ts";
import { incrementLikeOnServer } from "./increment-like-on-server.ts";

type LikesWidgetProps = {
  initialLikes: number;
};

// eb

export default function LikesWidget({ initialLikes }: LikesWidgetProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // tr1
  // ol

  const handleLikeClick = async () => {
    setIsPending(true);

    // todo: Transition
    // todo: optimistic

    try {
      const newLikes = await incrementLikeOnServer();
      setLikes(newLikes);
      setIsPending(false);
    } catch (err) {
      setError(String(err));
    }
  };

  if (error) {
    return <div>Could not like :-(</div>;
  }

  return (
    <LikeButton disabled={isPending} onClick={handleLikeClick}>
      <span>{likes}</span>
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
