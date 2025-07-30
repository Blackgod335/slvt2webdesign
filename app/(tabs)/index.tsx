import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

// Get screen dimensions
const { height } = Dimensions.get("window");

const slntServicesImages = [
  { title: "Website Designing", uri: "https://via.placeholder.com/100x80?text=Website+Design" },
  { title: "Responsive Web Designing", uri: "https://via.placeholder.com/100x80?text=Responsive+Design" },
  { title: "Ecommerce Websites", uri: "https://via.placeholder.com/100x80?text=Ecommerce" },
  { title: "SEO", uri: "https://via.placeholder.com/100x80?text=SEO" },
  { title: "Google Adwords", uri: "https://via.placeholder.com/100x80?text=Adwords" },
  { title: "Payment Gateway", uri: "https://via.placeholder.com/100x80?text=Payment+Gateway" },
  { title: "Classified Websites", uri: "https://via.placeholder.com/100x80?text=Classified" },
  { title: "Video Portals", uri: "https://via.placeholder.com/100x80?text=Video+Portals" },
];


export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sri Lakshmi Narasimhan Technology</Text>

      <Image
        source={{ uri: "https://via.placeholder.com/150" }}
        style={styles.image}
      />
      <Text style={styles.services} >Who we are</Text>
      <Text style={styles.description}>
        Sri Lakshmi Narasimhan Technology is a leading professional web design and
        web development company in Salem offering various services such as Web
        Designing, Development, Ecommerce, SEO services and Online Works.
      </Text>

      <Text style={styles.descri}>
        We offer customized web templates to create a unique web presence. We
        tailor layout, content, logos, and color schemes as per your need.
      </Text>
      <Text style={styles.descri}>
        Contact us now to discover why we're your best choice for professional web
        design and development services.
      </Text>
      <Text style={styles.descri}>
        We offer complete support from start to finish-helping your business stay
        ahead always!
      </Text>

      <Text style={styles.services}>SLNT Services</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.clientsContainer}
      >
        {slntServicesImages.map(({ title, uri }, index) => (
          <View key={index} style={styles.serviceCard}>
            <Image source={{ uri }} style={styles.serviceImage} resizeMode="contain" />
            <Text style={styles.serviceText}>{title}</Text>
          </View>
        ))}
      </ScrollView>


      <View style={styles.banner}>
        <Text style={styles.bannerText}>
          Build your expectation over our expertise! With a decade of experience,
          we have in-depth knowledge in web and mobile technologies.
        </Text>
      </View>

      <Text style={styles.services}>SLNT Clients</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.clientsContainer}
      >
        {[
          "https://slnt2webdesign.com/img/clients/kumar.jpg",
          "https://slnt2webdesign.com/img/clients/hotel.jpg",
          "https://slnt2webdesign.com/img/clients/valueindia.jpg",
          "https://slnt2webdesign.com/img/clients/littlegenius.jpg",
          "https://slnt2webdesign.com/img/clients/nutri.jpg",
          "https://slnt2webdesign.com/img/clients/fresh.jpg",
          "https://slnt2webdesign.com/img/clients/ck.jpg",
          "https://slnt2webdesign.com/img/clients/sumangali.jpg",
        ].map((uri, index) => (
          <Image
            key={index}
            source={{ uri }}
            style={styles.clientImage}
            resizeMode="contain"
          />
        ))}
      </ScrollView>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingBottom: 40,
    minHeight: height,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 20,
    textAlign: "center",
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#444",
    textAlign: "center",
    margin: 20,
  },
  descri: {
    fontSize: 14,
    paddingHorizontal: 20,
    color: "#444",
    textAlign: "center",
    marginBottom: 10,
  },
  serviceCard: {
    width: 120,
    marginRight: 15,
    alignItems: "center",
  },
  serviceImage: {
    width: 100,
    height: 80,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
  },
  serviceText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },

  services: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 20,
    textAlign: "left",
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#007bff",
    borderRadius: 10,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  cardAlt: {
    backgroundColor: "#28a745",
    borderRadius: 10,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  cardText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  banner: {
    backgroundColor: "red",
    margin: 10,
    padding: 10,
    borderRadius: 6,
  },
  bannerText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
  },
  clientsContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  clientImage: {
    width: 100,
    height: 50,
    marginRight: 10,
    borderRadius: 6,
    backgroundColor: "#f0f0f0",
  },

});
