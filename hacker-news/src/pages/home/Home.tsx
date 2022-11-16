/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Card, CardContent, Skeleton, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypesSelector } from '../../hooks/useTypedSelector';
import { getNewsId } from '../../utils/API/news';
import RefreshIcon from '@mui/icons-material/Refresh';
import { NewsCard } from '../../components/NewsCard';
import { SkeletonList } from '../../components/skeleton';
export const Home = () => {
  const { news, loading } = useTypesSelector((state) => state.news);
  const { fetchNew } = useActions();
  const skeletonArray: any[] = Array(10).fill('');
  return (
    <main>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Button variant="outlined" startIcon={<RefreshIcon />}>
            Refresh
          </Button>
        </Container>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Stack spacing={2}>
            {!loading
              ? news.map((it) => <NewsCard item={it} key={it.id} />)
              : skeletonArray.map((it) => <SkeletonList item={it} key={it.id} />)}
          </Stack>
        </Container>
      </Box>
    </main>
  );
};
