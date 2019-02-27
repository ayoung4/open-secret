import * as R from 'ramda';
import React from 'react';
import { Page, Box } from 'react-layout-components';
import { Route, BrowserRouter, withRouter, Switch, Link } from 'react-router-dom';
import { compose, mapProps } from 'recompose';

import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';
import './App.css';

import { Column, Container, Row, TextAlignment } from './Components';

const debug = (s = 'DEBUG') =>
    mapProps((props: any) => {
        console.log(s, props);
        return props;
    });

const LandingPage: React.SFC = () => (
    <Container textAlign={TextAlignment.center}>
        <img
            src={`${process.env.PUBLIC_URL}/images/title-white.jpg`}
            style={{ maxWidth: '100%', maxHeight: '65vh' }}
        />
        <br />
        <Link to='/page/1'>
            <button>
                Open
            </button>
        </Link>
    </Container>
);

const toPage = R.pipe(
    R.prop<any, any>('match'),
    R.prop('params'),
    R.pick(['page']),
);

const imageUrl = (page: number) =>
    `${process.env.PUBLIC_URL}/images/pages/${page}`;

const enhance = compose(
    withRouter,
    mapProps(toPage),
    debug(),
    mapProps(({ page }: any) => ({
        leftSrc: `${imageUrl(page)}/l.jpg`,
        rightSrc: `${imageUrl(page)}/r.jpg`,
    })),
    debug(),
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

const imageStyle = {
    maxWidth: '100%',
    maxHeight: '65vh',
    marginLeft: 'auto',
    marginRight: 'auto',
};

const BookPage = enhance(({ leftSrc, rightSrc }: any) => (
    <Page>
        <Box fit column>
            <Box column flex={8}>
                <Container>
                    <Row>
                        <Column textAlign={TextAlignment.center}>
                            <img
                                style={imageStyle}
                                src={leftSrc}
                            />
                        </Column>
                        <Column textAlign={TextAlignment.center}>
                            <img
                                style={imageStyle}
                                src={rightSrc}
                            />
                        </Column>
                    </Row>
                </Container>
            </Box>
            <Box row flex={1}>
                <Container>
                    <div style={{ width: '100%' }}>
                        <p style={{ wordBreak: 'break-word', whiteSpace: 'normal' }}>
                            <Link
                                to='/'
                                style={{ marginRight: '1rem' }}
                            >
                                Cover
                            </Link>
                            {R.map(
                                pageLink,
                                R.range(1, 40),
                            )}
                        </p>
                    </div>
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
