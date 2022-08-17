import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles  } from './styles';
import { useState } from 'react';

type Props = {
    addTask(title:string): void
}

export function Task ({ addTask }: Props){
    const [task, setTask] = useState('');

    const newTask = ()=>{
        addTask(task);
        setTask('')
    }
    return (
        <View style={styles.container}>
            <TextInput 
                value={task}
                onChangeText={setTask}
                placeholderTextColor='#808080'
                style={styles.input}
                placeholder='Adicione uma tarefa'/>
            <TouchableOpacity 
                onPress={newTask}
                style={ styles.addButton }>                
                    <AntDesign  name='pluscircleo' size={20} color="white"/>
            </TouchableOpacity>
        </View>
    )
}