import { Card, CardContent, Typography } from '@mui/material';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  item: {
    id: number;
    title: string;
    by: string;
    time: number;
    score: number;
  };
}

export const NewsCard: FC<CardProps> = ({ item }) => {
  return (
    // <Link to={`/news/${item.id}`}>
    <Card sx={{ minWidth: 500 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.by}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {item.score}
        </Typography>
      </CardContent>
    </Card>
    // </Link>
  );
};
