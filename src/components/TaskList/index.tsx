import React, { useState } from 'react';
import { CheckBox } from '../Forms/CheckBox';
import { IconButtom } from '../Forms/IconButtom';

import {
    TaskFlatList,
    TaskWrapper,
    TaskName
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
            <TaskWrapper>
                  <CheckBox checked={item.done} onPress={() => handleChecked(item.id)}/>
                  <TaskName>{item.name}</TaskName>
                  <IconButtom iconType='trash' />
                  <IconButtom iconType='edit' />
            </TaskWrapper>
        }
        />
  );
}