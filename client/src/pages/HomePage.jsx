import { Container, Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import CreatePostModal from "../components/CreatePostModal";
import Header from "../components/Header/Header";
import PostLsit from "../components/PostList/PostLsit";
import { showModal } from "../redux/actions";
import useStyles from "./style";

const HomePage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const openCreatePostModal = useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <PostLsit />
      <CreatePostModal />
      <Fab
        color="primary"
        className={classes.fab}
        onClick={openCreatePostModal}
      >
        <Add />
      </Fab>
    </Container>
  );
};

export default HomePage;
