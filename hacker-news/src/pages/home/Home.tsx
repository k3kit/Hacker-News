import { Box, Button, Stack } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypesSelector } from '../../hooks/useTypedSelector';
import { getNewsId } from '../../utils/API/news';
import RefreshIcon from '@mui/icons-material/Refresh';
import { NewsCard } from '../../components/NewsCard';
export const Home = () => {
  const { news } = useTypesSelector((state) => state.news);
  const { fetchNew } = useActions();

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
            {news.map((it) => (
              <NewsCard item={it} key={it.id} />
            ))}
          </Stack>
        </Container>
      </Box>
    </main>
  );
};
