import Image from "next/image";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { PostNotice } from "@/database/posts";
import { Fragment } from "react";

export function NoticePosts() {
  return (
    <Fragment>
      {PostNotice.map((post, index: number) => {
        return (
          <Card
            className="flex flex-col 2xl:flex-row gap-8 border-none bg-transparent shadow-none py-7 px-7 2xl:px-0"
            key={index}
          >
            <Image
              src={post.image}
              width={900}
              height={900}
              alt="notice"
              className="object-cover w-full 2xl:w-[50%] h-[210px] 2xl:h-[246px]"
            />

            <div className="flex flex-col flex-1 justify-around space-y-6">
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
    </Fragment>
  );
}
