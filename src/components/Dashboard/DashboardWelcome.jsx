import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const DashboardWelcome = ({ userEmail }) => (
  <Typography variant="h1">
    {`Welcome, ${userEmail}`}
  </Typography>
);

DashboardWelcome.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default DashboardWelcome;
