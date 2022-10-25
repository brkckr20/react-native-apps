import AsyncStorage from "@react-native-async-storage/async-storage"

export default function reducers(state, action) {

    AsyncStorage.setItem('@USER', JSON.stringify(user))
    switch (action.type) {
        case "SET_USER":
            const user = action.payload
            return { ...state, user }

        default:
            return state
    }
}