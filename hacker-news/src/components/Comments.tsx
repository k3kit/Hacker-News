import { ListItem, IconButton, ListItemText, Typography, List } from '@mui/material';
import React, { FC } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';

import { Container } from '@mui/system';
import { CommentItem } from './CommentItem';
interface CommentProps {
  kids: number[];
  descendants: number;
  onClick?: React.MouseEventHandler;
}
export const Comments: FC<CommentProps> = ({ kids, descendants, onClick }) => {
  return (
    <>
      <Container>
        <Container sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6">{descendants} comment</Typography>
          <IconButton color="primary" aria-label="Refresh Commetnts">
            <RefreshIcon />
          </IconButton>
        </Container>

        {kids.map((it) => (
          <CommentItem id={it} key={it} />
        ))}
      </Container>
    </>
  );
};
