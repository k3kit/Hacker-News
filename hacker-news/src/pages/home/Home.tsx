import { Box, Button, Stack } from '@mui/material';
import { Container } from '@mui/system';
import React, { FC, memo, useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypesSelector } from '../../hooks/useTypedSelector';
import RefreshIcon from '@mui/icons-material/Refresh';
import { NewsCard } from '../../components/NewsCard';
import { SkeletonList } from '../../components/skeleton';

export const Home: FC = memo(() => {
  const { news, loading } = useTypesSelector((state) => state.news);
  const skeletonArray = Array(10).fill('');
  const { fetchNew } = useActions();
  const handleRefresNews = () => {
    fetchNew();
  };

  useEffect(() => {
    fetchNew();
    const fetchInterval = setInterval(() => fetchNew(), 60000);
    return () => {
      clearInterval(fetchInterval);
    };
  }, []);

  return (
    <main>
      <Box
        sx={{
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Button variant="contained" startIcon={<RefreshIcon />} onClick={handleRefresNews}>
            Refresh
          </Button>
        </Container>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Stack spacing={2}>
            {!loading
              ? news.map((it) => <NewsCard item={it} key={it.id} />)
              : skeletonArray.map((it, idx) => <SkeletonList item={it} key={idx} />)}
          </Stack>
        </Container>
      </Box>
    </main>
  );
});
