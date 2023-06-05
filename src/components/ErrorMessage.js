import React from 'react';

const ErrorMessage = ({ error }) => {
    return <div style={{ fontSize: '18px', paddingTop: '20px', color: 'red' }}>{error}</div>;
};

export default ErrorMessage;
