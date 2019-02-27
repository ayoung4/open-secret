import React from 'react';

export enum TextAlignment {
    'left' = 'left',
    'center' = 'center',
    'right' = 'right',
}

type GridComponentProps = {
    textAlign?: TextAlignment;
};

export const Container: React.SFC<GridComponentProps> =
    ({ children, textAlign = TextAlignment.left, ...rest }) => (
        <div
            {...rest}
            className='container'
            style={{
                textAlign,
                height: '100%',
                border: '1px solid #00f'
            }}
        >
            {children}
        </div>
    );

export const Row: React.SFC<GridComponentProps> =
    ({ children, textAlign = TextAlignment.left, ...rest }) => (
        <div
            {...rest}
            className='row'
            style={{
                textAlign,
                height: '100%',
                border: '1px solid #00f',
            }}
        >
            {children}
        </div>
    );

export const Column: React.SFC<GridComponentProps> =
    ({ children, textAlign = TextAlignment.left, ...rest }) => (
        <div
            {...rest}
            className='one-half column'
            style={{
                textAlign,
                height: '100%',
                border: '1px solid #0f0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {children}
        </div>
    );