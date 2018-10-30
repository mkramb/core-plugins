import React, { ErrorInfo, Suspense } from 'react';
import { inject, observer } from 'mobx-react';
import { ExtensionStore } from './ExtensionStore';

export interface ExtensionProps {
    role: string;
    fallback?: JSX.Element;
    extensions?: ExtensionStore;
}

export interface ExtensionState {
    hasError: boolean;
}

@inject('extensions')
@observer
export class Extension extends React.Component<ExtensionProps, ExtensionState> {
    state: Readonly<ExtensionState> = {
        hasError: false
    };

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({
            hasError: true
        });
    }

    render() {
        const { role, extensions, fallback } = this.props;

        return (
            !this.state.hasError && (
                <Suspense fallback={fallback || <ExtensionLoader />}>
                    {(extensions!.components.get(role) || []).map((Extension, index) => {
                        return <Extension key={`role-${index}`} />;
                    })}
                </Suspense>
            )
        );
    }
}

export function ExtensionLoader() {
    return <div>Loading...</div>;
}
