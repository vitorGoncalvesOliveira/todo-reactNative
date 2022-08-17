import { View , FlatList, Text, Image, TouchableOpacity } from "react-native";
import CheckBox from 'expo-checkbox';
import { EmptyList } from '../EmptList';
import Trash from '../../../assets/trash.png';
import { styles } from './styles';
import { Tasks } from '../../types/task';

type Props = {
    taskList: Tasks[],
    doneTask(title:string): void
    removeTask(title: string): void
}

export function List({ taskList, doneTask, removeTask }: Props){

    
    return(
        <View>
            <FlatList 
                data={taskList}
                renderItem={({item}) => (
                    <View style={styles.container}>
                        <TouchableOpacity 
                            style={styles.touchCheck}
                            onPress={()=> doneTask(item.title)}>
                                <View style={{flexDirection:'row'}}>
                                    <CheckBox 
                                        style={styles.checkbox}
                                        value={item.done}       
                                        color={item.done ? '#1E6F9F': undefined}/>
                                    <Text style={item.done ? styles.textChecked : styles.text}>{ item.title } </Text>
                                </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnDelete}
                            onPress={() => removeTask(item.title)}>
                            <Image style={styles.trashIcon} source={Trash}/>
                        </TouchableOpacity>
                    </View>
                    ) }                
                keyExtractor={item => item.title }
                ListEmptyComponent={<EmptyList/>}
                />
        </View>
    )
}