// import * as React from 'react';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

//CUSTOM IMPORTS
import GettingStarted from "./TodoMobileapp/src/screens/GettingStartedContainer/GettingStarted";
import registerScreen from "./TodoMobileapp/src/screens/RegisterContainer/Register";
import LoginScreen from "./TodoMobileapp/src/screens/LoginContainer/Login";
import DashboardScreen from "./TodoMobileapp/src/screens/DashboardContainer/Dashboard";
import { store, persistor } from "./TodoMobileapp/src/redux/store";
import { Authentication } from "./TodoMobileapp/src/components/validations/Authentication";



const Stack = createStackNavigator();
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen
              name="Auth"
              component={Authentication}
              options={{ headerShown: false, gestureEnabled: false }}
              initialRoutes={true}
            />
            <Stack.Screen
              name="GettingStarted"
              component={GettingStarted}
              options={{ headerShown: false, gestureEnabled: false }}
            />
            <Stack.Screen
              name="Register"
              component={registerScreen}
              options={{ headerShown: false, gestureEnabled: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false, gestureEnabled: false }}
            />
            <Stack.Screen
              name="Dashboard"
              component={DashboardScreen}
              options={{ headerShown: false, gestureEnabled: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
