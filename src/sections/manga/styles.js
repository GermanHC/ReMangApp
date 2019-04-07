import { StyleSheet } from "react-native";
import * as colors from "../../commons/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lime
  },
  list: { paddingTop: 20 },
  noResults: {
    color: colors.white,
    fontSize: 16,
    margin: 10,
    textAlign: "center"
  }
});