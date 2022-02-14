import React,
    {
        ReactNode,
        createContext,
        useContext,
        useState,
        useEffect
     } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { SimpleTask } from 'react-native';

import { STORE } from '../const/store';

interface TaskProviderProps {
    children: ReactNode;
}

interface Task {
    id:string;
    name:string;
    done:boolean;
    urgent:boolean;
    date_start:string;
    date_finish:string;
}

interface ITaskContextData {
    tasks: Task[];
    insert(task:Task): Promise<void>;
    removeItem(id:string):Promise<void>;
    all():Promise<void>;
    find(id:string):Promise<void>;
    update(task:SimpleTask):Promise<void>;
    taskStoreIsLoading:boolean;
}

/*
   const response =  await AsyncStorage.getItem(dataKey);
   const transaction = response ? JSON.parse(response) : [];
*/

const TaskContext = createContext({} as ITaskContextData);

function TaskProvider({children}:TaskProviderProps){
    const [tasks,setTasks] = useState<Task[]>([]);
    const [taskStoreIsLoading,setTaskStoreIsLoading] = useState(false);
   
    
    async function insert(task:Task){
        try{
            await AsyncStorage.setItem(STORE.task,JSON.stringify(task));      
        }catch (error){
            throw new Error(error as string);
        }
    }

   
    async function removeItem(id:string){
        try{
            let tasksJSON= await AsyncStorage.getItem(STORE.task);
            let tasksArray = JSON.parse(tasksJSON);

            let allTasks = tasksArray.filter(function(e){
                return e.id !== id;
            });

            await AsyncStorage.setItem(STORE.task, JSON.stringify(allTasks));
            setTasks(allTasks);
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
       async function loadUserStorageDate() {
           setUserStoreIsLoading(true);
           const userStoraged = await AsyncStorage.getItem(userStorageKey);

           if(userStoraged) {
               const userLogged = JSON.parse(userStoraged) as User;
               setUser(userLogged);
           }
           setUserStoreIsLoading(false);
       }

       loadUserStorageDate();
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            signInWithGoogle,
            signOut,
            userStoreIsLoading
        }}>
            {children}
        </AuthContext.Provider>
    )
}