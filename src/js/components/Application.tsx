import React, { lazy } from 'react';
import { Extension } from '../framework/Extension';
import { ExtensionProvider, extensionStore } from '../framework/ExtensionStore';
import OutputC from './extensions/ExtensionC';
import './Application.scss';

extensionStore.register('content', [
    lazy(() => import('./extensions/ExtensionA')),
    lazy(() => import('./extensions/ExtensionB')),
    OutputC
]);

export function Application() {
    return (
        <ExtensionProvider>
            <div className="application">Application</div>
            <Extension role="content" />
        </ExtensionProvider>
    );
}
