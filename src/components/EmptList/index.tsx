import { View, Text, Image } from 'react-native';
import EmptyListIcon from '../../../assets/clipboard.png';

import { styles } from './styles';

export function EmptyList() :JSX.Element {
    return(
        <View style={styles.emptyContainer}>
            <Image source={EmptyListIcon}/>
            <Text style={styles.emptyTextTitle}>Você ainda não tem tarefas cadastradas </Text>
            <Text style={styles.emptyText}>Crie tarefas e organize seus itens a fazer </Text>
        </View>
    )
}