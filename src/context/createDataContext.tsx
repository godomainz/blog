import React, { useReducer } from 'react';

export default (reducer: (state:any, action:any) => any , actions: any, initialState: any) => {
    const Context = React.createContext({});

    const Provider = ({children}: any) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        // actions === { addBlogPost:(dispatch) => { return () => {} } }
        const boundActions:any = {};
        
        for (let key in actions){
            boundActions[key] = actions[key](dispatch);
        }

        return <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>
    }

    return { Context, Provider }
}