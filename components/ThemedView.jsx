import { View, useColorScheme } from "react-native";
import { Colors } from "../constants/colors";

// Shorter version with children (automatically renders children)
const ThemedView = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View style={[{ backgroundColor: theme.background }, style]} {...props} />
  );
};

// Longer version with children
// const ThemedView = ({ style, children, ...props }) => {
//   const colorScheme = useColorScheme();
//   const theme = Colors[colorScheme] ?? Colors.light;

//   return (
//     <View style={[{ backgroundColor: theme.background }, style]} {...props}>
//       {children}
//     </View>
//   );
// };

export default ThemedView;
