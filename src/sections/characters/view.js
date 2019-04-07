import React, {Component} from "react";
import {View, Text} from "react-native";

import styles from "./styles";
import * as colors from "../../commons/colors";

class Characters extends Component {
    static defaultProps = {
        character: {}
    };

    render() {
        const {character} = this.props;
        return (
            <View style={styles.container}>
                <Text>{"Character:"}</Text>
                <Text>{character.mal_id}</Text>
                <Text>{character.name}</Text>
            </View>
        );
    }
}

export default Characters;