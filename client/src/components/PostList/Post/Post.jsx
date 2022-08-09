import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
} from "@material-ui/core";
import { FavoriteOutlined, MoreVert } from "@material-ui/icons";
import moment from "moment";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { updatePost } from "../../../redux/actions";

const Post = ({ post }) => {
  const dispatch = useDispatch();

  const onClickBtnLike = useCallback(() => {
    dispatch(
      updatePost.updatePostRequest({ ...post, likeCount: post.likeCount + 1 })
    );
  }, [dispatch, post]);

  return (
    <Card>
      <CardHeader
        avatar={<Avatar>A</Avatar>}
        title={post.author || ""}
        subheader={moment(post.createdAt).format("MMMM Do YYYY")}
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={post.attachment || ""}
        alt="Paella dish"
      />
      <CardContent>{post.title}</CardContent>
      <CardContent>{post.content}</CardContent>
      <CardActions>
        <IconButton onClick={onClickBtnLike}>
          <FavoriteOutlined />
          <p>{post.likeCount}</p>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
