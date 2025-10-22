import { Text, View } from "react-native";
import { SystemBars } from 'react-native-edge-to-edge';
import { StyleSheet } from "react-native-unistyles";

export default function Index() {
  return (
    <View style={styles.container}>
      <SystemBars style={{statusBar: 'dark'}} />
      <View>
        <Text style={styles.text}>React Native Unistyles</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    padding: 16,
    paddingTop: rt.insets.top,
  },
  text: { fontSize: 20, color: '#fff' }
}))