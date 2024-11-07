import { Sidebar } from "../Sidebar.tsx";
import { H2 } from "../Heading.tsx";
import FeedbackList from "./FeedbackList.tsx";
import { Feedback } from "../api-types.ts";

type FeedbackSidebarProps = {
  feedbacks: Feedback[];
};

export default function FeedbackSidebar({ feedbacks }: FeedbackSidebarProps) {
  return (
    <div className={"mt-28 pe-4 md:w-1/3"}>
      <Sidebar>
        <H2>Feedback</H2>
        <FeedbackList feedbacks={feedbacks} />
      </Sidebar>
    </div>
  );
}
