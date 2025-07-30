import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, useWindowDimensions } from 'react-native';

const About = () => {
    const { width, height } = useWindowDimensions();

    return (
        <ScrollView contentContainerStyle={[styles.container, { minHeight: height }]}>
            <View>
                <Image
                    source={{ uri: "https://slnt2webdesign.com/img/content/band-5.jpg" }}
                    style={[styles.image, { width: width * 0.6, height: width * 0.6 }]}
                    resizeMode="contain"
                />
                <Text style={styles.description}>
                    Sri Lakshmi Narasimhan Technologies is a website designing company in Salem, Tamil Nadu,
                    specializing in innovative website design with powerful functionality for better online business.
                </Text>
                <Text style={styles.description}>
                    Getting your business online nowadays is essential — whether your business is large or small.
                    Many benefits of being online won't be obvious until you see what a website can do for you!
                </Text>
                <Text style={styles.description}>
                    We offer customized templates to help you stand out on the web. We tailor your layout, pictures,
                    logos, animations, color schemes, and content to your needs.
                </Text>
                <Text style={styles.description}>
                    <Text style={styles.highlight}>Searching for a website design? </Text>
                    Just request what you require. Ugra Technology assists clients with complete website solutions.
                </Text>

                <Text style={styles.title}>Over a Decade of Experience</Text>
                <Text style={styles.description}>
                    Build your expectations on our expertise. With a decade of experience, we have deep knowledge and
                    skilled experts in web and mobile technologies!
                </Text>

                <Text style={styles.title}>Experience the Excellence</Text>
                <Text style={styles.description}>
                    Quality comes first. Our quality assurance is backed by extensive professional experience and
                    numerous international clients!
                </Text>

                <Text style={styles.title}>Reliable Service</Text>
                <Text style={styles.description}>
                    Your website is available 24/7! Whether your current site is underperforming or you're new to the
                    web, we’re here to help.
                </Text>
            </View>
        </ScrollView>
    );
};

export default About;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    image: {
        alignSelf: "center",
        marginBottom: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: "center",
        marginTop: 20,
        marginBottom: 10,
        color: '#333',
    },
    description: {
        fontSize: 16,
        color: "#444",
        textAlign: "center",
        marginBottom: 16,
        lineHeight: 22,
    },
    highlight: {
        color: 'red',
        fontWeight: 'bold',
    },
});
