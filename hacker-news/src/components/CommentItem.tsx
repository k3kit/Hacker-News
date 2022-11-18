import { ListItem, ListItemText, List, ListItemButton, Container, Skeleton } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { getComment } from '../utils/API/news';
import './style.scss';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';

import DOMPurify from 'dompurify';

interface PropsComment {
  id: number;
}

interface IComment {
  text?: string | '';
  by?: string;
  time?: number;
  kids?: number[];
}

export const CommentItem = (props: PropsComment) => {
  const [showKids, setShowkids] = useState<boolean>(false);
  const [comment, setComment] = useState<IComment>({});
  const [isLoading, setLoading] = useState(true);

  const handleShowKids = () => {
    setShowkids(!showKids);
  };

  const text = comment.text == undefined ? '' : `${comment.text}`;
  const time =
    comment.time == undefined ? '' : new Date(+comment.time * 1000).toLocaleString('ru-RU');
  const by = comment.text == undefined ? '' : `by ${comment.by} ${time}`;

  useEffect(() => {
    setLoading(true);
    getComment(Number(props.id))
      .then((data) => setComment(data))
      .catch((err) => console.log('error: ', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={comment.kids && 'comment-item'}>
      <List
        sx={{ width: '100%', maxWidth: '80%', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItem onClick={handleShowKids}>
          {isLoading ? (
            <Skeleton variant="rounded" width={300} height={100} />
          ) : (
            <List
              component="section"
              className="comment-list"
              sx={{
                bgcolor: '#ffffff',
                borderRadius: 1,
                boxShadow: 1,
              }}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <Container>
                  <ListItemText
                    primary={
                      <div
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(text),
                        }}
                      ></div>
                    }
                    secondary={
                      <div
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(by),
                        }}
                      ></div>
                    }
                  />
                </Container>
                {comment.kids && (showKids ? <ExpandLess /> : <ExpandMore />)}
              </ListItemButton>
            </List>
          )}
        </ListItem>
      </List>
      <Container sx={{ marginLeft: '50px' }}>
        {comment.kids && showKids && comment.kids.map((it) => <CommentItem id={it} key={it} />)}
      </Container>
    </div>
  );
};
