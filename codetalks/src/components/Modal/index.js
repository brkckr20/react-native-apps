import { View } from "react-native";
import Modal from "react-native-modal";
import styles from './Modal.style'

const CustomModal = (props) => {
    return (

        <Modal isVisible={props.visible} onSwipeComplete={props.modalShow} onBackdropPress={props.modalShow} onBackButtonPress={props.modalShow} swipeDirection="down" >
            <View style={styles.container}>
                {props.children}
            </View>
        </Modal>

    )
}
export default CustomModal;