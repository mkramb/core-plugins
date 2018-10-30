import React from 'react';

declare module 'react' {
    function lazy<P, Component extends React.ComponentType<P>>(
        importFn: () => Promise<Component | { default: Component }>
    ): Component;

    const Suspense: React.ComponentType<{ fallback?: React.ReactNode }>;
}
