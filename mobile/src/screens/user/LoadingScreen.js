import React from "react";
import {ActivityIndicator, View} from "react-native";

const LoadingScreen = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
            }}
        >
            <ActivityIndicator size="small" color="#000"/>
        </View>
    );
};

export default LoadingScreen;
