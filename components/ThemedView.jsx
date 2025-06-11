import { SafeAreaView, View, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Shorter version with children (automatically renders children)
const ThemedView = ({ style, safe = false, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  const insets = useSafeAreaInsets();

  if (!safe)
    return (
      <View style={[{ backgroundColor: theme.background }, style]} {...props} />
    );

  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        style,
      ]}
      {...props}
    />
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
