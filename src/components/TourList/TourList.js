import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../constants/";
import axios from "axios";
import cheerio from "cheerio";

const TourList = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // Current page
  const [totalPages, setTotalPages] = useState(0); // Total number of pages on the site
  const [isFetching, setIsFetching] = useState(false); // Whether new data is being fetched
  const [showScrollToTop, setShowScrollToTop] = useState(false); // Whether to show the "scroll to top" button
  const flatListRef = useRef(null); // Ref for the FlatList component

  useEffect(() => {
    const tourDataUrl = "https://kraina-ua.com/uk/tours/tours-ukraine";
    const loadPage = async (url, pageNumber) => {
      try {
        const response = await axios.get(`${url}?p=${pageNumber}`);
        const html = response.data;
        const $ = cheerio.load(html);

        let tourBlocks = $(".tour-itm");

        const parsedTours = [];
        tourBlocks.each((index, element) => {
          const imageUrl = $(element).find(".tour-img img").attr("data-src");
          const fullImageUrl = `https://kraina-ua.com/${imageUrl}`;
          const name = $(element).find(".tour-title").text().trim();
          const priceText = $(element).find(".price").text();
          const price = parseInt(priceText.replace(/\D/g, ""));

          parsedTours.push({ imageUrl: fullImageUrl, name, price });
        });

        setTours((prevTours) => [...prevTours, ...parsedTours]);
        setIsFetching(false);
      } catch (error) {
        console.error("Error loading page:", error);
      }
    };

    const fetchTotalPages = async () => {
      try {
        const response = await axios.get(tourDataUrl);
        const html = response.data;
        const $ = cheerio.load(html);

        const lastPage = $(".last").find(".target").text();
        setTotalPages(parseInt(lastPage));
      } catch (error) {
        console.error("Error fetching total pages:", error);
      }
    };

    const fetchTourData = async () => {
      try {
        if (totalPages === 0 || page <= totalPages) {
          await loadPage(tourDataUrl, page);
          setPage((prevPage) => prevPage + 1);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching tour data:", error);
      }
    };

    if (totalPages === 0) {
      fetchTotalPages();
    } else {
      fetchTourData();
    }
  }, [page, totalPages]);

  const handleLoadMore = () => {
    setIsFetching(true);
  };

  const scrollToTop = () => {
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
  };

  const renderFooter = () => {
    return isFetching ? (
      <ActivityIndicator size="large" color="#0000ff" />
    ) : null;
  };

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY > 100) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={tours}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.tourItem}>
            <Image source={{ uri: item.imageUrl }} style={styles.tourImage} />
            <View style={styles.tourInfo}>
              <Text style={styles.tourName}>{item.name}</Text>
              <Text style={styles.tourPrice}>{item.price} грн</Text>
            </View>
          </View>
        )}
        ListFooterComponent={renderFooter}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        onScroll={handleScroll}
      />
      {showScrollToTop && (
        <TouchableOpacity
          style={styles.scrollToTopButton}
          onPress={scrollToTop}
        >
          <Ionicons
            name="arrow-up-circle-sharp"
            size={40}
            color={Colors.primary}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tourItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primaryAlpha,
    paddingBottom: 10,
  },
  tourImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  tourInfo: {
    flex: 1,
    justifyContent: "center",
  },
  tourName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  tourPrice: {
    fontSize: 14,
    color: Colors.green,
  },
  scrollToTopButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: Colors.primaryAlpha,
    borderRadius: 20,
  },
});

export default TourList;
