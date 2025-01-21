import { IProps } from '@/types';
import React from 'react';
import { Provider } from 'react-redux'
import { store } from '@/redux/store.ts'
import { ThemeProvider } from './theme-provider';
const Providers:React.FC<IProps> = ({children}) => {
    return (
        <ThemeProvider>
            <Provider store={store}>
                {children}
            </Provider>
        </ThemeProvider>
    );
};

export default Providers;