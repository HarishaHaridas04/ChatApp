/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const InputField = ({
    label,
    iconName,
    error,
    isPassword,
    isTitle,
    isLoginDetails,
    isMultiline,
    onFocus = () => { },
    ...props
}) => {
    const [hidePassword, setHidePassword] = React.useState(isPassword);
    const [isFocused, setIsFocused] = React.useState(false);
    return (
        <View style={{ margin: 16 }}>
            {isTitle ? <Text style={style.label}>{label}</Text> : null}
            <View
                style={[
                    style.inputContainer,
                    {
                        backgroundColor: '#FFFFFF',
                        borderColor: isFocused
                            ? '#000000'
                            : '#FFFFFF',
                        height: isMultiline ? 116 : 48,
                    },
                ]}>
                {isLoginDetails && (<Icon
                    name={iconName}
                    style={{
                        color: '#1C1243',
                        fontSize: 22,
                        marginRight: 10,
                    }}
                />)}
                <TextInput
                    autoCorrect={false}
                    onFocus={() => {
                        onFocus();
                        setIsFocused(true);
                    }}
                    onBlur={() => setIsFocused(false)}
                    secureTextEntry={hidePassword}
                    style={{ color: '#1C1243', flex: 1, fontSize: 16 }}
                    {...props}
                />
                {isPassword && (
                    <Icon
                        onPress={() => setHidePassword(!hidePassword)}
                        name={hidePassword ? 'visibility_off' : 'visibility'}
                        style={{ color: '#1C1243', fontSize: 22 }}
                    />
                )}
            </View>
            {error && (
                <Text style={{ marginTop: 7, color: 'red', fontSize: 12 }}>
                    {error}
                </Text>
            )}
        </View>
    );
};

const style = StyleSheet.create({
    label: {
        marginVertical: 5,
        fontSize: 14,
        color: '#1C1243',
    },
    inputContainer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        elevation: 8,
        borderRadius:16,
        borderWidth:2,
          alignItems: 'center',
          shadowColor: '#000000',
          shadowOpacity: 0.08,
          shadowOffset: {
            width: 2,
            height: 4,
          },
          shadowRadius: 8,
    },
});

export default InputField;
