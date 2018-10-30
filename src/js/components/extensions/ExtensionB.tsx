import React from 'react';

export default function ExtensionB() {
    if (window.location.href.indexOf('withError') !== -1) {
        throw 'Error from extension B';
    }

    return (
        <div style={{ backgroundColor: 'blue' }}>
            <h1>Output from extension B</h1>
        </div>
    );
}
