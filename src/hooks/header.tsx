
import React,
    {
        ReactNode,
        createContext,
        useContext,
        useState,
     } from 'react';

interface HeaderProviderProps {
    children: ReactNode;
}

interface IHeaderContext {
    visible: boolean
    toogleVisible:() => void;
}

const HeaderContext = createContext({} as IHeaderContext);

function HeaderProvider({children}:HeaderProviderProps){
    const [visible,setVisible] = useState(false); 
       
    function toogleVisible(){
        setVisible(!visible);
    }

    return (
        <HeaderContext.Provider value={{
            visible,
            toogleVisible
        }}>
            {children}
        </HeaderContext.Provider>
    )
}

function useHeader(){
    const context = useContext(HeaderContext);
    return context;
}

export {HeaderProvider,useHeader}