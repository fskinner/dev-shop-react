import React from 'react';
import routes from './routes';
import { Router } from 'react-router';

const container = document.getElementById('app-container');

React.render(<Router>{routes}</Router>, container)
