import { Card, CardContent, Skeleton, Typography } from '@mui/material';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  item: string;
}

export const SkeletonList: FC<CardProps> = ({ item }) => {
  return (
    <Card sx={{ minWidth: 500 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Skeleton />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Skeleton />
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <Skeleton />
        </Typography>
      </CardContent>
    </Card>
  );
};
