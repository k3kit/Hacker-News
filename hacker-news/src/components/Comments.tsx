import { ListItem, IconButton, ListItemText, Typography, List } from '@mui/material';
import React, { FC, useEffect } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';

import { Container } from '@mui/system';
import { CommentItem } from './CommentItem';
import { useActions } from '../hooks/useActions';
import { useParams } from 'react-router';
interface CommentsProps {
  ids: number[];
}
export const Comments = (props: CommentsProps) => {
  const { id } = useParams<{ id?: string }>();
  const { fetchNewsInfo, fetchComments } = useActions();

  const handleRefresh = () => {
    fetchComments(Number(id));
  };
  return (
    <>
      <Container>
        <Container sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6">comment</Typography>
          <IconButton color="primary" aria-label="Refresh Commetnts">
            <RefreshIcon onClick={handleRefresh} />
          </IconButton>
        </Container>
        {props.ids.map((id) => (
          <CommentItem id={id} key={id} />
        ))}
      </Container>
    </>
  );
};
