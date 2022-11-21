import { StyleSheet } from "react-native";
import { colors } from "../../colors";

const base = {
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10
}
const fs = { fontSize: 16 }

export default StyleSheet.create({
    secondary: {
        backgroundColor: "white",
        ...base
    },
    primary: {
        backgroundColor: colors.secondary_orange,
        ...base
    },
    button: {
        primary: {
            color: "white",
            ...fs
        },
        secondary: {
            color: colors.secondary_orange,
            ...fs,
        }
    }
})