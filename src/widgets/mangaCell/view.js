import React, {Component} from "react";
import {TouchableOpacity, Image} from "react-native";
import * as Animatable from "react-native-animatable";

import styles from "./styles";
 
class MangaCell extends Component {
    static defaultProps = {
        mangaElement: {},
        onPress: () => {},
        index: null
    };

    _onCellTapped = () => {
        const { mangaElement } = this.props;
        this.props.onPress(mangaElement);
    }

    render() {
        const {mangaElement} = this.props;
        const source = mangaElement && mangaElement.image_url ? {uri: mangaElement.image_url} : null;
        return  (
            <Animatable.View
            useNativeDriver={true}
            animation={index % 2 ? "bounceInRight" : "bounceInLeft"}
            >   
                <TouchableOpacity onPress={() => this._onCellTapped()} style={styles.cell}>
                    <Image source={source} style={styles.image}></Image>
                </TouchableOpacity> 
            </Animatable.View>
        );
    }

    render() {
        const { mangaElement, index } = this.props;
        const source = mangaElement && mangaElement.image_url ? {uri: mangaElement.image_url} : null;
        return (
          <Animatable.View
            useNativeDriver={true}
            animation={index % 2 ? "bounceInRight" : "bounceInLeft"}
          >
            <TouchableOpacity
              onPress={() => this._onCellTapped()}
              style={styles.cell}
            >
              <Image source={source} style={styles.image} />
            </TouchableOpacity>
          </Animatable.View>
        );
      }
}

export default MangaCell;