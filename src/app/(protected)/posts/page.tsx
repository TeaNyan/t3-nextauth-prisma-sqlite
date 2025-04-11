import { ClientPage } from "./client-page";

const PostsPage = async () => {
  return (
    <div>
      <h1>Posts</h1>
      <p>Protected content</p>
      <ClientPage />
    </div>
  );
};
export default PostsPage;
