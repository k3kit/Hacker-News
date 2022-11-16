import { Box, Button, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NewsCard } from '../../components/NewsCard';
import { useActions } from '../../hooks/useActions';
import { useTypesSelector } from '../../hooks/useTypedSelector';

export const NewsPage = () => {
  const { id } = useParams<{ id?: string }>();
  const { newInfo } = useTypesSelector((state) => state.infoNews);
  const { fetchNewsInfo } = useActions();

  useEffect(() => {
    if (id) {
      fetchNewsInfo(Number(id));
    }
  }, []);

  return (
    <main>
      <Box
        sx={{
          bgcolor: '#f1f1f1',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Button>Back</Button>
        </Container>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {newInfo['title']}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {} point by {} Jan 1, 2022, 13:44
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Container>
      </Box>
    </main>
  );
};
