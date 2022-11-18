import React from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";
//imported the @material-ui styles
import useStyles from "./styles";
//pagination comonent that uses the @material-ui styles
const Paginate = () => {
  const classes = useStyles();

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={5}
      page={1}
      variant="outlined"
      //we're going to use the imported Link for routing.
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/post?page=${1}`} />
      )}
    />
  );
};

export default Paginate;