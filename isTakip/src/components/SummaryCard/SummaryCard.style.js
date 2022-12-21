import { StyleSheet } from 'react-native';
import { colors } from '../../assets/colors';



const wpapper = {
    main: {
        padding: 10,
        borderRadius: 4,
        elevation: 20,
        shadowColor: 'black',
        marginBottom: 10
    },
    top: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    topText: {
        fontSize: 20,
        color: "white"
    },
    sum: {
        fontSize: 18,
        color: "white"
    }

}

export default StyleSheet.create({
    green: {
        container: {
            backgroundColor: colors.main_green,
            ...wpapper.main
        },
        top: {
            ...wpapper.top
        },
        topText: {
            ...wpapper.topText
        },
        sum: {
            ...wpapper.sum
        }
    },
    red: {
        container: {
            backgroundColor: "#f53b57",
            ...wpapper.main
        },
        top: {
            ...wpapper.top
        },
        topText: {
            ...wpapper.topText
        },
        sum: {
            ...wpapper.sum
        }
    },
    default: {
        container: {
            backgroundColor: colors.gray500,
            ...wpapper.main
        },
        top: {
            ...wpapper.top
        },
        topText: {
            ...wpapper.topText
        },
        sum: {
            ...wpapper.sum
        }
    },
    darkBlue: {
        container: {
            backgroundColor: "#002884",
            ...wpapper.main
        },
        top: {
            ...wpapper.top
        },
        topText: {
            ...wpapper.topText
        },
        sum: {
            ...wpapper.sum
        }
    },
    tile: {
        container: {
            backgroundColor: "#575fcf",
            ...wpapper.main
        },
        top: {
            ...wpapper.top
        },
        topText: {
            ...wpapper.topText
        },
        sum: {
            ...wpapper.sum
        }
    },

})