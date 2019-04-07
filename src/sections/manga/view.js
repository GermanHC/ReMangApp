import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {Actions} from "react-native-router-flux";

import styles from "./styles";
import * as api from "../../api";
import * as colors from "../../commons/colors";

class Manga extends Component {
    constructor(props) {
        super(props);
        api.fetchMangas()
        .then(res => {
            console.log("fetchMangas res:", res);
        })
        .catch(err => {
            console.log("fetchMangas res:", err);
        });
      }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() =>
                        Actions.Characters({
                            title:"German",
                            character: { mal_id:12, name="German Hernandez"}
                        })
                    }
                    ><Text>Ir a Characters</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Manga;