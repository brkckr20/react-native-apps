import { View } from "react-native";
import Modal from "react-native-modal";
import styles from './Modal.style'

const CustomModal = (props) => {
    return (

        <Modal isVisible={props.visible}>
            <View style={styles.container}>
                {props.children}
            </View>
        </Modal>

    )
}
export default CustomModal;