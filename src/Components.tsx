import React from 'react';

export const Container: React.SFC = ({ children, ...rest }) => (
    <div
        {...rest}
        className='container'
        style={{ height: '100%', border: '1px solid #00f' }}
    >
        {children}
    </div>
)

export const Row: React.SFC = ({ children, ...rest }) => (
    <div
        {...rest}
        className='row'
        style={{ height: '100%', border: '1px solid #00f' }}
    >
        {children}
    </div>
)

export const Column: React.SFC = ({ children, ...rest }) => (
    <div
        {...rest}
        className='one-half column'
        style={{ height: '100%', border: '1px solid #0f0' }}
    >
        {children}
    </div>
)