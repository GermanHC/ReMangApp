import React, {Component} from "react";
import {TouchableOpacity, Image} from "react-native";

import styles from "./styles";
 
class MangaCell extends Component {
    static defaultProps = {
        mangaElement: {},
        onPress: () => {}
    };

    _onCellTapped = () => {
        const { mangaElement } = this.props;
        this.props.onPress(mangaElement);
    }

    render() {
        const {mangaElement} = this.props;
        const source = mangaElement && mangaElement.image_url ? {uri: mangaElement.image_url} : null;
        return  (
        <TouchableOpacity onPress={() => this._onCellTapped()} style={styles.cell}>
            <Image source={source} style={styles.image}></Image>
        </TouchableOpacity> 
        );
    }
}

export default MangaCell;