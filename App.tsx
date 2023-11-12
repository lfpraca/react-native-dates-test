/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
    en,
    registerTranslation,
    DatePickerModal,
} from "react-native-paper-dates";
registerTranslation("en", en);

export default function App() {
    const [date, setDate] = React.useState(undefined);
    const [open, setOpen] = React.useState(false);

    const onDismissSingle = React.useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const onConfirmSingle = React.useCallback(
        (params: any) => {
            setOpen(false);
            setDate(params.date);
        },
        [setOpen, setDate],
    );

    return (
        <SafeAreaProvider>
            <View
                style={{
                    justifyContent: "center",
                    flex: 1,
                    alignItems: "center",
                }}>
                <Button
                    onPress={() => setOpen(true)}
                    uppercase={false}
                    mode="outlined">
                    Pick single date
                </Button>
                <DatePickerModal
                    locale="en"
                    mode="single"
                    visible={open}
                    onDismiss={onDismissSingle}
                    date={date}
                    onConfirm={onConfirmSingle}
                />
            </View>
        </SafeAreaProvider>
    );
}
