import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/auth.styles";

export default function Index () {
    return(
        <View
            style={styles.container}
        >
            <Text
                style = {styles.title}
            >
                Hello
            </Text>
            <TouchableOpacity onPress = {()=>alert("you touched")}>
                <Text>Press Me</Text>
            </TouchableOpacity>
            <Pressable onPress={()=>alert("You touched pressable")}>
                <Text>Press me - Pressable</Text>
            </Pressable>
        </View>
    )
}

