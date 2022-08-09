import { IPost } from "../..";
import { Post } from "../Post";
import { PostsListContainer } from "./styles";

interface PostListProps {
  posts: IPost[];
}

export function PostsList({ posts }: PostListProps) {
  return (
    <PostsListContainer>
      {posts.map((post) => (
        <Post key={post.number} post={post} />
      ))}
    </PostsListContainer>
  );
}
