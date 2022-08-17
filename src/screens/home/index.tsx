import { View , Alert} from "react-native";
import { Header } from '../../components/Header';
import { Task } from '../../components/Task';
import { List } from '../../components/List';
import { CountTask } from '../../components/CountTask';
import { styles } from './styles';

import { useState } from 'react';
import { Tasks } from '../../types/task';


export function Home(){
    const [taskList, setTaskList] = useState<Tasks[]>([])

    const addTask = (title: string ) =>{
        setTaskList(prevState => [...prevState, { title, done: false}]);
    }

    const removeTask = (title: string) => {
        Alert.alert('Deletar',`Deseja deltar a task ${title} ?`,[
        {
            text:'Não',
            
        },{
            text:'Sim',
            onPress:() =>(setTaskList(prevState => prevState.filter(task => task.title !== title)))
        }
        ])
        
    }

    const updateTaskStatus = (title: string) => {       
         
        setTaskList(prevState => prevState.map(task => {
            if(task.title=== title){
                task.done= !task.done 
                return task;
            }
               return task;
        }));    

    }

   return (
        <View style={styles.container}>
            <Header />
            <Task addTask={addTask}/>
            <CountTask taskList={taskList} />
            <List taskList={taskList} doneTask={updateTaskStatus} removeTask={removeTask} />
        </View>
   ) 
}