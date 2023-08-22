import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from './styles.module.css';
import palette from '../../utils/palette.json'
import { FaStar } from 'react-icons/fa';

const List = ({ ImageConfig, data }) => {

  return (
    <div className={styles.ListContainer}>
      {data?.map((item, index) => (
        <Card className={styles.Card} key={index}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={ImageConfig?.images?.base_url + ImageConfig?.images?.poster_sizes[3] + item?.poster_path}
              alt={item?.title}
            />
            <CardContent>
              <div className={styles.ListItemHead}>
                <Typography
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "1",
                    WebkitBoxOrient: "vertical",
                    fontWeight: 'bold',
                    color: palette?.Gray
                  }}
                  variant="h7" component="div">
                  {item?.title}
                </Typography>
                <div className={styles.Ratings}>
                  <FaStar color={palette?.Amber} />
                  <Typography
                    sx={{ color: palette?.LightGray, marginBottom: '-2px' }}
                    variant="p" component="div">{item?.vote_average}/10
                  </Typography>
                </div>
              </div>
              <Typography
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                }}
                variant="body2" color="text.secondary">
                {item?.overview}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  )
}

export default List