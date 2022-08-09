import { Grid } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { postsState$ } from "../../redux/selectors";
import Post from "./Post/Post";

const PostLsit = () => {
  const dispatch = useDispatch();

  const posts = useSelector(postsState$);
  // console.log("👌 ~ posts", posts);

  useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest());
  }, [dispatch]);

  return (
    <Grid container spacing={2} alignItems="stretch">
      {posts &&
        posts.map((post) => {
          return (
            <Grid item xs={12} sm={6} key={post._id}>
              <Post post={post} />
            </Grid>
          );
        })}
    </Grid>
  );
};

export default PostLsit;
