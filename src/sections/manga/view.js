import React, {Component} from "react";
import {SafeAreaView, Text, TouchableOpacity,FlatList} from "react-native";
import {Actions} from "react-native-router-flux";

import styles from "./styles";
import * as api from "../../api";
import * as colors from "../../commons/colors";
import { MangaCell }  from "../../widgets";


class Manga extends Component {
    constructor(props) {
        super(props);
        this.state = { mangasList: [] };
        this._fetchMangasList();
    }

    _fetchMangasList() {
        api
        .fetchMangas()
        .then(res => {
            this.setState({ mangasList: res.data.top})
        })
        .catch(err => {
            console.log("fetchMangas res:", err);
        });
    }
    
    _onMangaTapped = mangaElement => {
        Actions.Characters({ mangaElement , title: mangaElement.title});
    };

    _keyExtractor = (item, index) => `${item.mal_id}`;

    _renderItem = ({ item, index }) => (
        <MangaCell mangaElement={item} onPress={this._onMangaTapped} />
    ); 
      
    render() {
        const { mangasList } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <FlatList 
                    data={mangasList}
                    keyExtractor={ this._keyExtractor }
                    renderItem={ this._renderItem }
                    numColumns={2}
                />
            </SafeAreaView>
        );
    }
}

export default Manga;