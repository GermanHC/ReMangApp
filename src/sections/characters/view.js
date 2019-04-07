import React, {Component} from "react";
import {View, Text} from "react-native";

import styles from "./styles";
import * as colors from "../../commons/colors";

class Characters extends Component {
    static defaultProps = {
        manga: {}
    };

    render() {
        const { manga } = this.props;
        return (
            <View style={styles.container}>
                <Text>{"Manga:"}</Text>
                <Text>{manga.title}</Text>
            </View>
        );
    }
}

export default Characters;