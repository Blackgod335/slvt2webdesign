import { StyleSheet, ScrollView, Text, View, Image, Dimensions } from 'react-native'

const { height } = Dimensions.get("window");

const about = () => {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Image source={{ uri: "https://slnt2webdesign.com/img/content/band-5.jpg" }} style={styles.image} />
                <Text style={styles.description}>Sri lakshmi narasimhan technologies is a web site designing company in Salem, Tamilnadu specialising in innovative website design with powerful functionality for better online business.</Text>
                <Text style={styles.description}>Getting your business online now a days is essential - whether your business is large or small. Many of the benefits of being online will not be obvious till you see what a website can do for you!</Text>
                <Text style={styles.description}>We offer you Customize templates to get yourself a unique on web. We customize your layout, pictures, logos, flash elements, color scheme and the content. We design websites at your request,</Text>
                <Text style={styles.description}> <Text style={{ color: 'red' }}>Searching for a website design?</Text>Just request us for what you require. Ugra Tehnology think in assisting our clients with entire website results. Just contact us for what you require</Text>
                <Text style={styles.title}>Over a Decade of Experience</Text>
                <Text style={styles.description}>Build your Expectation over our Expertise. With a decade of experience, we have in-depth knowledge and skilled experts in web and mobile technologies!</Text>
                <Text style={styles.title} >Experience the Excellence</Text>
                <Text style={styles.description}>Quality comes first. Our Quality assurance is backed with lasting professional experience and innumerable international clients!</Text>
                <Text style={styles.title}>Reliable Service</Text>
                <Text style={styles.description}>Customers from all over the world can see your product or service online straight away, a web site never sleeps - it is open 24/7! Whether you currently have a web site that is under-performing or you are completely new to the web we can help you.</Text>
            </View>
        </ScrollView>
    )
}

export default about

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: height,
        margin: 20
    },
    image: {
        width: 200,
        height: 200,
        alignSelf: "center",
        marginBottom: 20,

    },
    title: {
        fontSize: 20
    },
    description: {
        fontSize: 16,
        color: "#444",
        textAlign: "center",
        margin: 20,
    },
})