import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  IconButton,
  Link,
  List,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Comments } from '../../components/Comments';
import { NewsCard } from '../../components/NewsCard';
import { useActions } from '../../hooks/useActions';
import { useTypesSelector } from '../../hooks/useTypedSelector';
import { Link as RouterLink } from 'react-router-dom';
import { Refresh } from '@mui/icons-material';
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

  // useEffect(() => {
  //   news.forEach((it) => {
  //     if (it.id === Number(id)) {
  //       setItemNews(it);
  //     }
  //   });
  // }, []);

  // const handeleRefreshComments = () => {
  //   fetchNewsInfo(Number(id));
  // };
  return (
    <Box
      sx={{
        bgcolor: '#f1f1f1',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        {/* <Link to={'/'}>
          <Button variant="contained" />
        </Link> */}
        <Link component={RouterLink} to="/">
          <Button variant="contained" sx={{ marginBottom: '20px' }}>
            Back
          </Button>
        </Link>
      </Container>
      <Container
        sx={{
          py: 8,
          bgcolor: '#ffffff',
          borderRadius: 1,
          boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5);',
          overflowX: 'auto',
        }}
        maxWidth="lg"
      >
        <Typography gutterBottom variant="h5" component="div" textAlign="left">
          {itemNews['title']}
        </Typography>
        <Link href={itemNews.url} color="inherit" underline="none">
          Link to news
        </Link>
        <Typography variant="subtitle1" color="text.secondary">
          {itemNews['score']} point. By {itemNews['by']} Jan 1, 2022, 13:44
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Comments
            kids={itemNews.kids ? itemNews.kids : []}
            descendants={itemNews.kids ? itemNews.kids.length : 0}
            // onClick={handeleRefreshComments}
          />
        </Box>
      </Container>
    </Box>
  );
};
