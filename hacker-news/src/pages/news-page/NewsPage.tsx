import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  IconButton,
  Link,
  List,
  Skeleton,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Comments } from '../../components/Comments';
import { bull, NewsCard } from '../../components/NewsCard';
import { useActions } from '../../hooks/useActions';
import { useTypesSelector } from '../../hooks/useTypedSelector';
import { Link as RouterLink } from 'react-router-dom';
import { Refresh } from '@mui/icons-material';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

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
  const { newInfo, loading } = useTypesSelector((state) => state.infoNews);
  const { fetchNewsInfo } = useActions();
  const [loadingCommetns, setloadingCommetns] = useState(false);

  useEffect(() => {
    fetchNewsInfo(Number(id));
  }, []);

  return (
    <main>
      <Box
        sx={{
          pt: 8,
          pb: 6,
        }}
      >
        <Container>
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
          maxWidth={'xl'}
        >
          <Typography gutterBottom variant="h5" component="div" textAlign="left">
            {loading ? <Skeleton /> : newInfo['title']}
          </Typography>
          <Link href={newInfo['url']} color="inherit" underline="none" target="_blank">
            Link to news
          </Link>
          <Typography variant="subtitle1" color="text.secondary">
            {newInfo['score']} point {bull} By {newInfo['by']} {bull}
            {new Date(newInfo['time'] * 1000).toLocaleString('ru-RU')}
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Comments
              ids={newInfo['kids'] ? newInfo['kids'] : []}
              count={newInfo['descendants']}
              loading={loadingCommetns}
            />
          </Box>
        </Container>
      </Box>
    </main>
  );
};
