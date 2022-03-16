import styled from 'styled-components';
import Card from '@mui/material/Card';
import {Menu } from '@material-ui/core';


export const BoardContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1rem;
  margin-left: 1rem;
`;

export const BoardDesign = styled(Card)`
  border: 2px solid red;
  // justify-content: space-around;
`;

export const Menus = styled(Menu)`
display: flex;
  flex-wrap: wrap;
  height: 15rem;
  width: 15rem;
  // justify-content: center;
  margin-left: 80px;
  // margin-bottom: 40px;
  margin-top:-80px;
`;

