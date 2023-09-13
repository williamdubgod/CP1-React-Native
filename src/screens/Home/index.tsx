import React, { useState } from "react";

import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Bookmark from "../../assets/Bookmark.svg";
import Comment from "../../assets/Comment.svg";
import user from "../../assets/user.png";
import foto from "../../assets/foto.png";
import foto2 from "../../assets/foto2.png";
import foto3 from "../../assets/foto3.png";
import foto4 from "../../assets/foto4.png";
import foto5 from "../../assets/foto5.png";
import Heart from "../../assets/Heart.svg";
import Points from "../../assets/points.svg";
import Share from "../../assets/Share.svg";
import Header from "../../Components/Header";
import PhotoList from "../../Components/PhotoList";

const DATA = [
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto2,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto3,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto4,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto5,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: user,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: user,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: user,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: user,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: user,
  },
];

const mockComments = [
  {
    id: 1,
    username: "Vinicius",
    text: "Linda foto!",
  },
  {
    id: 2,
    username: "Gustavo",
    text: "Adorei essa vista!",
  },
  {
    id: 3,
    username: "Larissa",
    text: "Que lugar incrível!",
  },
];

export function Home() {
  const [showComments, setShowComments] = useState({});
  const [likes, setLikes] = useState(145); 
  const [liked, setLiked] = useState(false);

  const toggleComments = (itemId) => {
    setShowComments((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const toggleLike = () => {
    if (liked) {
      // Se já foi curtido, diminua o número de likes
      setLikes(likes - 1);
    } else {
      // Se ainda não foi curtido, aumente o número de likes
      setLikes(likes + 1);
    }
    // Inverta o estado de liked
    setLiked(!liked);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} style={{ width: "100%" }}>
        <PhotoList data={DATA} />
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image
                style={styles.contentHeaderLeftImage}
                source={{
                  uri: "https://github.com/williamdubgod.png",
                }}
              />
              <Text style={styles.contentHeaderLeftText}>
                William Vulcano
              </Text>
            </View>
            <Points />
          </View>
          <View style={styles.contentImage}>
            <Image source={require("../../assets/cristo.png")} />
          </View>

          <View style={styles.contentFooter}>
            <View style={styles.contentFooterOptions}>
              <View style={styles.contentFooterOptionsButton}>
              <TouchableOpacity onPress={toggleLike}>
                <Heart />
              </TouchableOpacity>
                <TouchableOpacity>
                  <Comment />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Share />
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Bookmark />
              </TouchableOpacity>
            </View>

            <View style={styles.contentFooterTexts}>
            <Text style={[styles.contentFooterText1, styles.contentFooterText]}>
              {likes} Likes
            </Text>
              <Text
                style={[styles.contentFooterText1, styles.contentFooterText]}
              >
                Visita ao Cristo Redentor!
              </Text>
              <TouchableOpacity
                style={styles.showCommentsButton}
                onPress={() => toggleComments(DATA[0].id)}
              >
                <Text style={{ color: "#fff" }}>
                  View Comments ({mockComments.length})
                </Text>
              </TouchableOpacity>
              {showComments[DATA[0].id] && (
                <View>
                  {mockComments.map((comment) => (
                    <View key={comment.id}>
                      <Text style={{ color: "#fff" }}>
                        {comment.username}: {comment.text}
                      </Text>
                    </View>
                  ))}
                </View>
              )}
              <Text
                style={[styles.contentFooterText3, styles.contentFooterText]}
              >
                3 hours ago See Translation
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image
                style={styles.contentHeaderLeftImage}
                source={{
                  uri: "https://github.com/gustavo-guarnieri-de-melo.png",
                }}
              />
              <Text style={styles.contentHeaderLeftText}>
                Gustavo Guarnieri
              </Text>
            </View>
            <Points />
          </View>
          <View style={styles.contentImage}>
            <Image source={require("../../assets/image2.png")} />
          </View>

          <View style={styles.contentFooter}>
            <View style={styles.contentFooterOptions}>
              <View style={styles.contentFooterOptionsButton}>
                <TouchableOpacity>
                  <Heart />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Comment />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Share />
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Bookmark />
              </TouchableOpacity>
            </View>

            <View style={styles.contentFooterTexts}>
            <Text style={[styles.contentFooterText1, styles.contentFooterText]}>25 Likes</Text>
              <Text
                style={[styles.contentFooterText1, styles.contentFooterText]}
              >
                Minha faculdade!
              </Text>
              <TouchableOpacity
                style={styles.showCommentsButton}
                onPress={() => toggleComments(DATA[1].id)}
              >
                <Text style={{ color: "#fff" }}>
                  No comments
                </Text>
              </TouchableOpacity>
              
              <Text
                style={[styles.contentFooterText3, styles.contentFooterText]}
              >
                5 hours ago See Translation
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
  },
  content: {
    width: "100%",
    marginBottom: 20,
  },
  contentHeader: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  contentHeaderLeft: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  contentHeaderLeftImage: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },
  contentHeaderLeftText: {
    color: "#fff",
  },
  contentImage: {
    width: "100%",
    height: 355,
  },
  showCommentsButton: {
    color: "#fff",
    marginTop: 10,
    textDecorationLine: "underline",
  },
  contentFooter: {},
  contentFooterOptions: {
    height: 40,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contentFooterOptionsButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  contentFooterText: {
    color: "#fff",
  },
  contentFooterTexts: {
    paddingLeft: 10,
    gap: 10,
  },
  contentFooterText1: {
    fontSize: 14,
  },
  contentFooterText2: {
    fontSize: 14,
  },
  contentFooterText3: {
    fontSize: 10,
  },
});

export default Home;
