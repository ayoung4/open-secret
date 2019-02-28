import React from 'react';

export enum TextAlignment {
    'left' = 'left',
    'center' = 'center',
    'right' = 'right',
}

type GridComponentProps = {
    textAlign?: TextAlignment;
    columnClass?: string;
};

export const Container: React.SFC<GridComponentProps> =
    ({ children, textAlign = TextAlignment.left, ...rest }) => (
        <div
            {...rest}
            className='container'
            style={{
                textAlign,
                height: '100%',
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
            }}
        >
            {children}
        </div>
    );

export const Column: React.SFC<GridComponentProps> =
    ({ children, textAlign = TextAlignment.left, columnClass, ...rest }) => (
        <div
            {...rest}
            className={`${columnClass} column`}
            style={{
                textAlign,
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {children}
        </div>
    );