import { useContext, useRef } from "react";
import { PostList } from "../store/Post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const ReactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const Reactions = ReactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    ReactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, Reactions, tags);
  };

  return (
    <form className="Post" onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="userId" class="form-label">
          Enter Your User Id Here
        </label>
        <input
          type="text"
          ref={userIdElement}
          class="form-control"
          id="userId"
          placeholder="Your user id"
        />
      </div>

      <div class="mb-3">
        <label for="title" class="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          class="form-control"
          id="title"
          placeholder="How are you feeling today!"
        />
      </div>

      <div class="mb-3">
        <label for="body" class="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          rows="4"
          class="form-control"
          id="body"
          placeholder="Tell us more about it..."
        />
      </div>

      <div class="mb-3">
        <label for="reactions" class="form-label">
          No Of Reactions
        </label>
        <input
          type="text"
          ref={ReactionsElement}
          class="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>

      <div class="mb-3">
        <label for="tags" class="form-label">
          Hashtags
        </label>
        <input
          type="text"
          ref={tagsElement}
          class="form-control"
          id="tags"
          placeholder="Enter hashtag here"
        />
      </div>

      <button type="submit" class="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
