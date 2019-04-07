import { StyleSheet } from "react-native";
import * as colors from "../../commons/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main
  },
  noResultsText: {
    color: colors.white,
    padding: 20,
    fontSize: 16,
    textAlign: "center"
  }
});
