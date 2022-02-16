import React, { useState } from 'react';
import { TaskCard } from '../TaskCard';

import {
    TaskFlatList,
    TaskName,
    TitleWrapper,
    TaskSubtitle
} from './styles';

export interface Task{
    id:string;
    name:string;
    done:boolean;
    urgent:boolean;
}

export interface Props {
    tasks: Task[];
}

export function TaskList({ tasks 
} : Props){

  const [formattedTask,setFormattedTask] = useState<Task[]>(tasks);

  function handleChecked(id:string) {
   
    let newTask = formattedTask.map((item) => {
        if(item.id === id){
            item.done = !item.done;
        }
        return item;
    });

    setFormattedTask(newTask);
  }

  return (
    <TaskFlatList
        data={formattedTask}
        keyExtractor={(item:Task) => String(item.id)}
        renderItem={({ item }: { item: Task }) =>
            <TaskCard>
              <TitleWrapper>
                <TaskName>{item.name}</TaskName>
                <TaskSubtitle>{item.name}</TaskSubtitle>
              </TitleWrapper>    
            </TaskCard>
        }
        />
  );
}