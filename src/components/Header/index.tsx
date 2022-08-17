import { View, Image } from 'react-native';
import { styles } from './styles';
import logo from '../../../assets/Logo.png';

export function Header (){
    return(
        <View style={styles.constainer}>
            <Image style={styles.image} source={logo}/>
        </View>
    )
}