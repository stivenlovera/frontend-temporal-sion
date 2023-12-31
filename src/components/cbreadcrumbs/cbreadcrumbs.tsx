import React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}) as typeof Chip; // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event: React.MouseEvent<Element, MouseEvent>) {
  event.preventDefault();

  console.info('You clicked a breadcrumb.');
}

interface CBreadcrumbsProps {
  icon: React.ReactElement;
  nombreRoute: string;
  route: string;
  nombresRoutes: string[];
  routes: string[];

};
export const Cbreadcrumbs = ({ icon, nombreRoute, route, nombresRoutes, routes }: CBreadcrumbsProps) => {
  return (
    <div role="presentation" style={{ marginBottom: '15px' }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to={route}>
          <StyledBreadcrumb
            label={nombreRoute}
            icon={icon} />
        </Link>
        {routes.map((value, i) => {
          return (
            <Link to={value} key={i}>
              <StyledBreadcrumb label={nombresRoutes[i]} />
            </Link>
          )
        })}
      </Breadcrumbs>
    </div>
  );
}
