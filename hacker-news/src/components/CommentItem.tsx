import {
  ListItem,
  IconButton,
  ListItemText,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  Container,
} from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import CommentIcon from '@mui/icons-material/Comment';
import { fetchNew, fetchNewsInfo } from '../store/action-creators';
import { getComment } from '../utils/API/news';
import ReactHtmlParser from 'react-html-parser';
import './style.scss';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
interface PropsComment {
  id: number;
}

interface IComment {
  text?: string;
  by?: string;
  time?: number;
  kids?: number[];
}

export const CommentItem = (props: PropsComment) => {
  const [showKids, setShowkids] = useState<boolean>(false);
  const [comment, setComment] = useState<IComment>({});
  const handleShowKids = () => {
    setShowkids(!showKids);
  };
  useEffect(() => {
    getComment(Number(props.id))
      .then((data) => setComment(data))
      .catch((err) => console.log('error: ', err));
  }, []);

  return (
    <div className={comment.kids && 'comment-item'}>
      <List
        sx={{ width: '100%', maxWidth: 900, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItem onClick={handleShowKids}>
          <List
            component="section"
            className="comment-list"
            sx={{
              bgcolor: '#ffffff',
              borderRadius: 1,
              paddingLeft: '3rem',
              border: 1,
            }}
          >
            <ListItemButton sx={{ pl: 4 }}>
              <Container>
                <ListItemText
                  primary={
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${comment.text}`,
                      }}
                    ></div>
                  }
                />
              </Container>
              {comment.kids && (showKids ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
          </List>
        </ListItem>
      </List>
      <Container sx={{ marginLeft: '50px' }}>
        {comment.kids && showKids && comment.kids.map((it) => <CommentItem id={it} key={it} />)}
      </Container>
    </div>
  );
};
