import LikesWidget from "./LikesWidget.tsx";
import { getLikes } from "./increment-like-on-server.ts";

export default function TransitionApp() {
  return (
    <div className={"container mx-auto mt-10 max-w-xl"}>
      <LikesWidget initialLikes={getLikes()} />
    </div>
  );
}
