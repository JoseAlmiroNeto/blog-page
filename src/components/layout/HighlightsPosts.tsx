import Image from "next/image";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { PostHighlight, PostSubHighlights } from "@/database/posts";

export function HighlightsPosts() {
  return (
    <div className="space-y-8 py-7 px-7 2xl:px-0">
      <h2 className="text-2xl font-semibold">Recent blog posts</h2>

      <div className="flex flex-col xl:flex-row gap-8">
        {PostHighlight.map((post, index: number) => {
          return (
            <Card
              className="w-full space-y-6 overflow-hidden bg-transparent border-none shadow-none rounded-none"
              key={index}
            >
              <Image
                src={post.image}
                width={900}
                height={900}
                alt="notice"
                className="object-cover w-full h-[228px]"
              />

              <div className="py-2 space-y-4 2xl:space-y-6">
                <p className="text-purple-600 text-sm">{post.date}</p>
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold">{post.title}</h2>
                  <p className="text-zinc-400">{post.description}</p>
                </div>
                <div className="flex gap-2">
                  {post.tags.map((tag, index: number) => {
                    return (
                      <Badge className="px-3 py-1" key={index}>
                        {tag}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            </Card>
          );
        })}

        <div className="w-full  flex flex-col justify-center gap-8">
          {PostSubHighlights.map((post, index: number) => {
            return (
              <Card
                className="overflow-hidden md:flex gap-4 bg-transparent border-none shadow-none rounded-none"
                key={index}
              >
                <Image
                  src={post.image}
                  width={900}
                  height={900}
                  alt="notice"
                  className="object-cover w-full h-[228px] md:max-w-[50%] md:h-full max-h-[228px]"
                />
                <div className="space-y-4 flex flex-col justify-around py-2">
                  <p className="text-purple-600 text-sm">{post.date}</p>
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold">{post.title}</h2>
                    <p className="text-zinc-400">{post.description}</p>
                  </div>
                  <div className="flex gap-2">
                    {post.tags.map((tag, index: number) => {
                      return (
                        <Badge className="px-3 py-1" key={index}>
                          {tag}
                        </Badge>
                      );
                    })}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
