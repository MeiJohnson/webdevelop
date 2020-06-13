import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import { Avatar, IconButton, CardMedia } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

const FoxCard = props => {
  const { avatarSrc, title, subtitle, description, imgSrc } = props;
  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={avatarSrc} />}
        action={
          <IconButton aria-label="like">
            <FavoriteIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia style={{ height: "150px" }} image={imgSrc} />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to friends</Button>
        <Button size="small">Hide</Button>
      </CardActions>
    </Card>
  );
};
export default FoxCard;
