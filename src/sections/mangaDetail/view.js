import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  SafeAreaView
} from "react-native";
import styles from "./styles";
import _ from "lodash";
import { Button } from "../../widgets";
import { Actions } from "react-native-router-flux";

class MangaDetail extends Component {
   
  render() {
    const { mangaElement } = this.props;
    const imageUrl = _.has(mangaElement, "image_url")
      ? { uri: mangaElement.image_url }
      : null;
    const score = _.get(this.props, "mangaElement.score", "");
    const title = _.get(mangaElement, "title", "");
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
          <Image
            source={imageUrl}
            style={styles.image}
          />
          <View style={styles.infoRow}>
            <Text style={styles.label}>{"Título:"}</Text>
            <Text style={styles.value}>{title}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>{"Puntuación: "}</Text>
            <Text style={styles.value}>{score}</Text>
          </View>
        </View>
        {/* <Button
          onPress={_ =>
            Actions.MangaEdit({ mangaElement, title: `Editar ${title}` })
          }
          label={"Editar"}
          buttonStyle={{ margin: 20 }}
        /> */}
      </SafeAreaView>
    );
  }
}

export default MangaDetail;