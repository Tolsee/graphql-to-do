import React, {createContext, useState} from 'react';

export const AppContext = createContext({ mode: 'day', toggleMode: () => {} });

type appProps = {
    children: React.ReactNode
}

interface Mode {
   mode: 'day' | 'night'
}

export function AppStore({ children }: appProps) {
    const defaultValue: Mode = { mode: 'day' };
    const [store, changeStore] = useState(defaultValue);
    const [sideBarCollapsed, changeSideBar] = useState(true);

    const toggleModeText = (mode: 'day' | 'night') => mode === 'day' ? 'night' : 'day';
    const toggleMode = () => changeStore({ mode: toggleModeText(store.mode)});

    const toggleSideBar = () => changeSideBar(!sideBarCollapsed);

    return (
        <AppContext.Provider value={{ mode: store.mode, toggleMode, toggleSideBar }}>
            {children}
        </AppContext.Provider>
    )
}

