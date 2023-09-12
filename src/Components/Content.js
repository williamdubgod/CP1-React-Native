import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Points, Heart, Comment, Share, Bookmark } from "./Icons";

const Content = ({ username, imageURL, contentImage, caption, commentCount, timeAgo }) => {
  return (
    <View style={styles.content}>
      <View style={styles.contentHeader}>
        <View style={styles.contentHeaderLeft}>
          <Image style={styles.contentHeaderLeftImage} source={{ uri: imageURL }} />
          <Text style={styles.contentHeaderLeftText}>{username}</Text>
        </View>
        <Points />
      </View>
      <View style={styles.contentImage}>
        <Image source={contentImage} />
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
          <Text style={[styles.contentFooterText1, styles.contentFooterText]}>
            {caption}
          </Text>
          <Text style={[styles.contentFooterText2, styles.contentFooterText]}>
            View all {commentCount} comments
          </Text>
          <Text style={[styles.contentFooterText3, styles.contentFooterText]}>
            {timeAgo}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = {
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
};

export default Content;
