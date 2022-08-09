import { useEffect, useState } from "react";
import { Spinner } from "../../components/Spinner";
import { api } from "../../lib/axios";
import { PostsList } from "./components/PostsList";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

export function Blog() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getPosts(query: string = "") {
    try {
      setIsLoading(true);
      const response = await api.get(
        `/search/issues?q=${query}%20label:published%20repo:${username}/${repoName}`
      );

      setPosts(response.data.items);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Profile />
      <SearchInput postsLength={posts.length} getPosts={getPosts} />
      {isLoading ? <Spinner /> : <PostsList posts={posts} />}
    </>
  );
}
