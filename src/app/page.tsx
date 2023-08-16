import { AllPosts } from "@/components/layout/AllPosts";
import { HighlightsPosts } from "@/components/layout/HighlightsPosts";
import { NoticePosts } from "@/components/layout/NoticePost";
import { Title } from "@/components/layout/Title";

export default function Home() {
  return (
    <main className="w-full">
      <Title />

      <HighlightsPosts />

      <NoticePosts />

      <AllPosts />
    </main>
  );
}
