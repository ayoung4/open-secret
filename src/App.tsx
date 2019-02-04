import * as R from 'ramda';
import React from 'react';
import { Page, Box } from 'react-layout-components';
import { Route, BrowserRouter, withRouter, Switch, Link } from 'react-router-dom';
import { compose, mapProps } from 'recompose';

import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';
import './App.css';

import { Column, Container, Row } from './Components';

const debug = (s: string) =>
    mapProps((props: any) => {
        console.log(s, props);
        return props;
    });

const LandingPage: React.SFC = () => (
    <Container>
        LANDING
        <Link to='/page/1'>
            <button>
                START
            </button>
        </Link>
    </Container>
);

const enhance = compose(
    withRouter,
);

const pageLink = (i: number) => (
    <Link
        key={i}
        to={`/page/${i}`}
        style={{ marginRight: '1rem' }}
    >
        {i}
    </Link>
);

const BookPage = enhance(({ match }: any) => (
    <Page>
        <Box fit column>
            <Box column flex={8}>
                <Container>
                    <Row>
                        <Column>
                            <img
                                style={{ width: '100%', height: 'auto' }}
                                src='https://via.placeholder.com/150'
                            />
                            Page {match.params.page}
                        </Column>
                        <Column>
                            <img
                                style={{ width: '100%', height: 'auto' }}
                                src='https://via.placeholder.com/150'
                            />
                            Page {match.params.page}
                        </Column>
                    </Row>
                </Container>
            </Box>
            <Box row flex={1}>
                <Container>
                    {R.map(
                        pageLink,
                        R.range(1, 40),
                    )}
                </Container>
            </Box>
        </Box>
    </Page>
));

export const App: React.SFC = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact>
                <LandingPage />
            </Route>
            <Route path='/page/:page'>
                <BookPage />
            </Route>
            <Route path='*'>
                <div>
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                </div>
            </Route>
        </Switch>
    </BrowserRouter>
);
