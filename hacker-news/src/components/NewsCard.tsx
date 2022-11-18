import { Card, CardContent, Typography, Box, CardActionArea } from '@mui/material';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  item: {
    id: number;
    title: string;
    by: string;
    time: number;
    score: number;
    kids: [];
  };
}
const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);
export const NewsCard: FC<CardProps> = ({ item }) => {
  return (
    <Card component={Link} to={`/news/${item.id}`} sx={{ textDecoration: 'none' }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {item.score} point by {item.by} {bull} Jan 1, 2022, 13:44 {bull}
            {item.kids}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
