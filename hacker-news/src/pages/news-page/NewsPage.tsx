import { Box, Button, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Comments } from '../../components/Comments';
import { NewsCard } from '../../components/NewsCard';
import { useActions } from '../../hooks/useActions';
import { useTypesSelector } from '../../hooks/useTypedSelector';
interface ICurrentNews {
  title?: string;
  by?: string;
  time?: number;
  score?: number;
  url?: string;
  kids?: number[];
}

export const NewsPage = () => {
  const { id } = useParams<{ id?: string }>();
  const { news } = useTypesSelector((state) => state.news);
  const { fetchNewsInfo } = useActions();
  const [itemNews, setItemNews] = useState<ICurrentNews>({});
  useEffect(() => {
    news.forEach((it) => {
      if (it.id === Number(id)) {
        setItemNews(it);
      }
    });
    if (id) {
      fetchNewsInfo(Number(id));
    }
  }, []);

  return (
    <Box
      sx={{
        bgcolor: '#f1f1f1',
        pt: 8,
        pb: 6,
        height: 'calc(100vh - 180px)',
      }}
    >
      <Container maxWidth="sm">
        <Button>Back</Button>
      </Container>
      <Container
        sx={{
          py: 8,
          bgcolor: '#ffffff',
          borderRadius: 1,
          boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5);',
        }}
        maxWidth="md"
      >
        <Typography gutterBottom variant="h5" component="div">
          {itemNews['title']}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {itemNews['score']} point by {itemNews['by']} Jan 1, 2022, 13:44
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Comments></Comments>
        </Box>
      </Container>
    </Box>
  );
};
