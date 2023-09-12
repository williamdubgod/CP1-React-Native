import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";

import Bookmark from "../../assets/Bookmark.svg";
import Comment from "../../assets/Comment.svg";
import user from "../../assets/user.png";
import foto from "../../assets/foto.png";
import foto2 from "../../assets/foto2.png";
import foto3 from "../../assets/foto3.png";
import foto4 from "../../assets/foto4.png";
import Heart from "../../assets/Heart.svg";
import image from "../../assets/cristo.png";
import image2 from "../../assets/image2.png";
import Logo from "../../assets/logo.svg";
import Message from "../../assets/message.svg";
import Points from "../../assets/points.svg";
import Share from "../../assets/Share.svg";
import Stroke from "../../assets/stroke.svg";

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
  const [showComments, setShowComments] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Logo width={127} height={49} />
        <View style={styles.headerOptions}>
          <TouchableOpacity>
            <Stroke />
          </TouchableOpacity>
          <TouchableOpacity>
            <Message />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        <View style={styles.stores}>
          <FlatList
            data={DATA}
            horizontal={true}
            keyExtractor={(item) => item.id}
            renderItem={(item) => (
              <LinearGradient
                colors={["#D52865", "#F7B55A"]}
                style={styles.storesCard}
                key={item.item.id}
              >
                <TouchableOpacity>
                  <Image
                    style={styles.storesCardImage}
                    source={item.item.pathURL}
                  />
                </TouchableOpacity>
              </LinearGradient>
            )}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image
                style={styles.contentHeaderLeftImage}
                source={{
                  uri: "https://github.com/williamdubgod.png",
                }}
              />
              <Text style={styles.contentHeaderLeftText}>William Vulcano</Text>
            </View>
            <Points />
          </View>
          <View style={styles.contentImage}>
            <Image source={image} />
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
              <Bookmark />
            </View>

            <View style={styles.contentFooterTexts}>
              <Text
                style={[styles.contentFooterText1, styles.contentFooterText]}
              >
                Visita ao Cristo Redentor!
              </Text>
              <Text
                style={[styles.contentFooterText2, styles.contentFooterText]}
                onPress={() => setShowComments(!showComments)}
              >
                View all 3 comments
              </Text>
              {showComments && (
                <View>
                  {mockComments.map((comment) => (
                    <View key={comment.id}>
                      <Text style={{ color: "#fff" }}>{comment.username}: {comment.text}</Text>
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
              <Text style={styles.contentHeaderLeftText}>Gustavo Guarnieri</Text>
            </View>
            <Points />
          </View>
          <View style={styles.contentImage}>
            <Image source={image2} />
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
              <Bookmark />
            </View>

            <View style={styles.contentFooterTexts}>
              <Text
                style={[styles.contentFooterText1, styles.contentFooterText]}
              >
                Minha faculdade
              </Text>
              <Text
                style={[styles.contentFooterText2, styles.contentFooterText]}
              >
                No comments
              </Text>
              <Text
                style={[styles.contentFooterText3, styles.contentFooterText]}
              >
                3 hours ago See Translation
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
  header: {
    width: "100%",
    height: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 20,
  },
  headerOptions: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    gap: 20,
  },
  stores: {
    height: 104,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingVertical: 10,
  },
  storesCard: {
    borderRadius: 50,
    marginRight: 14,
  },
  storesCardImage: {
    width: 64,
    height: 64,
    borderRadius: 50,
    margin: 2,
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
    paddingLeft: 20,
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
