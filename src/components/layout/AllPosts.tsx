import Image from "next/image";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Posts } from "@/database/posts";
import { Pagination } from "@/functions/Pagination";

export function AllPosts() {
  return (
    <div className="py-7 space-y-8 max-[1380px]:px-7 2xl:px-0">
      <h2 className="text-2xl font-semibold">All blog posts</h2>

      <Pagination
        items={Posts.map((post, index: number) => {
          return (
            <Card
              className="w-full lg:w-[48%] min-[1384px]:w-[428px] space-y-6 overflow-hidden cursor-pointer shadow-none border-none rounded-none bg-transparent hover:scale-105 hover:transition-transform"
              key={index}
            >
              <Image
                src={post.image}
                width={900}
                height={900}
                alt="notice"
                className="object-cover w-full"
              />
              <div className="py-2 space-y-4">
                <p className="text-purple-600 text-sm">{post.date}</p>
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold truncate">
                    {post.title}
                  </h2>
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
        itemsPerPage={6}
      />
    </div>
  );
}
