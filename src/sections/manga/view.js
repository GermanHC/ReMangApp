import React, {Component} from "react";
import {SafeAreaView, Text, RefreshControl, FlatList} from "react-native";
import {Actions} from "react-native-router-flux";

import styles from "./styles";
import * as colors from "../../commons/colors";
import { MangaCell }  from "../../widgets";


class Manga extends Component {
    constructor(props) {
        super(props);
        props.getMangasList();
    }
   
    _onMangaTapped = mangaElement => {
        const title = mangaElement.title;
        this.props.updateMangaSelected(mangaElement);
        Actions.MangaDetail({ mangaElement , title: mangaElement.title});
    };

    _keyExtractor = (item, index) => `${item.mal_id}`;

    _renderItem = ({ item, index }) => (
        <MangaCell mangaElement={item} 
        index={index}
        onPress={this._onMangaTapped} />
    ); 
      
    
    _renderNoResultsText = isFetching => {
        if (isFetching) {
        return null;
        }

        return <Text style={styles.noResults}>{"No hay ningún manga disponible"}</Text>;
    };

    render() {
        const { mangasList , isFetching} = this.props;
        return (
            <SafeAreaView style={styles.container}>
                <FlatList 
                    data={mangasList}
                    keyExtractor={ this._keyExtractor }
                    renderItem={ this._renderItem }
                    numColumns={2}
                    ListEmptyComponent={_ => this._renderNoResultsText(isFetching)}
                    refreshControl={
                        <RefreshControl
                          onRefresh={this.props.getMangasList}
                          refreshing={isFetching}
                          tintColor={colors.white}
                          colors={[colors.white]}
                        />
                    }
                />
            </SafeAreaView>
        );
    }
}

export default Manga;