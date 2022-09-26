import { ScrollView, Image, StyleSheet, Dimensions } from "react-native";

const Banner = ({ bannerData }) => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {
                bannerData.map(item => (
                    <Image source={{ uri: item.imageUrl }} style={styles.banner_image} key={item.id} />
                ))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    banner_image: {
        height: Dimensions.get("window").height / 5,
        width: Dimensions.get("window").width / 2
    }
})

export default Banner;