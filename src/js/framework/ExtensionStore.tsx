import React from 'react';
import { action, observable } from 'mobx';
import { Provider } from 'mobx-react';

export type ExtensionRole = string;
export type ExtensionComponent = React.ComponentType;

export class ExtensionStore {
    @observable
    components = observable.map<ExtensionRole, ExtensionComponent[]>();

    @action
    register(role: ExtensionRole, components: ExtensionComponent[]) {
        this.components.set(role, [...(this.components.get(role) || []), ...components]);
    }
}

export const extensionStore = new ExtensionStore();

export interface ExtensionProviderProps {
    children: React.ReactNode | React.ReactNode[];
}

export const ExtensionProvider = ({ children }: ExtensionProviderProps) => (
    <Provider extensions={extensionStore}>
        <>{children}</>
    </Provider>
);
