import { View , Text } from "react-native";
import { styles } from './styles';
import { Tasks } from '../../types/task';

type Props = {
    taskList: Tasks[]
}
export function CountTask({ taskList }: Props){
    return(
        <View style={styles.container}>
            <View style={{ flexDirection: "row"}}>
                <Text style={styles.title}>Criadas</Text>
                <Text style={styles.badge}>{taskList.length}</Text>
            </View>
            <View style={{ flexDirection: "row"}}>
                <Text style={styles.title}>Concluídas</Text>
                <Text style={styles.badge}>{taskList.filter(task => task.done).length}</Text>
            </View>
        </View>
    )
}