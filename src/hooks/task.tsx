import React,
    {
        ReactNode,
        createContext,
        useContext,
        useState,
        useEffect
     } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
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
    update(task:Task):Promise<void>;
    removeAll():Promise<void>;
    taskStoreIsLoading:boolean;
}

const TaskContext = createContext({} as ITaskContextData);

function TaskProvider({children}:TaskProviderProps){
    const [tasks,setTasks] = useState<Task[]>([]);
    const [taskStoreIsLoading,setTaskStoreIsLoading] = useState(false);
   
    
    async function insert(task:Task){
        try{
            await AsyncStorage.setItem(STORE.task,JSON.stringify(task));    
            setTasks(oldTask => [...oldTask,task]);
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

    async function all(){
        try {
            const responseTask =  await AsyncStorage.getItem(STORE.task);
            const tasks = responseTask ? JSON.parse(responseTask) : [];

            return tasks
          } catch(error) {
            console.log(error)
          }
    }

    async function find(id:string){
        try{
            let tasksJSON= await AsyncStorage.getItem(STORE.task);
            let tasksArray = JSON.parse(tasksJSON);

            let taskFound = tasksArray.filter(function(e){
                return e.id === id;
            });

            return taskFound[0];
        }
        catch(error){
            console.log(error)
        }
    }

    async function update(task:Task){
        try{
            let tasksJSON= await AsyncStorage.getItem(STORE.task);
            let tasksArray = JSON.parse(tasksJSON);

            let newListTask = tasksArray.filter(function(e){
                if(e.id === task.id){
                    return task;
                } else {
                    return e;
                }
            });

            setTasks(newListTask);
            await AsyncStorage.setItem(STORE.task, JSON.stringify(newListTask));
           
        }
        catch(error){
            console.log(error)
        }
    }

    async function removeAll(){
        try {
            await AsyncStorage.removeItem(STORE.task);
          } catch(error) {
            console.log(error)
          }
    }

    useEffect(() => {
       async function loadUserStorageDate() {
           setTaskStoreIsLoading(true);
           
           const taskStoraged = await AsyncStorage.getItem(STORE.task);
           
           if(taskStoraged) {
               const tasks = JSON.parse(taskStoraged) as Task[];
               console.log('TASKS: ',tasks);
               setTasks(tasks);
           }
           setTaskStoreIsLoading(false);
       }

       loadUserStorageDate();
    }, [])

    return (
        <TaskContext.Provider value={{
            tasks,
            insert,
            removeItem,
            all,
            find,
            update,
            removeAll,
            taskStoreIsLoading
        }}>
            {children}
        </TaskContext.Provider>
    )
}

function useTask(){
    const context = useContext(TaskContext);
    return context;
}

export {TaskProvider,useTask}