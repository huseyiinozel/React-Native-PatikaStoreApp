
import styles from "./searchbar.style";
import { View ,TextInput, Text} from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";


function Search(){
    return (
<View style={styles.searchcontainer}>
    <TextInput style={styles.searchtext} placeholder="Search" placeholderTextColor={"gray"}></TextInput>
    
      
      
    
  </View>
    );
}

export default Search; 