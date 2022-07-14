import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Welcome } from "../pages/Welcome";
import { Confirmation } from "../pages/Confirmation";
import { UserIdentification } from "../pages/UserIdentification";
import { PlantSelect } from "../pages/PlantSelect";
import { PlantSave } from "../pages/PlantSave";
import { MyPlants } from "../pages/MyPlants";

import colors from "../styles/colors";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}
  >
    <stackRoutes.Screen name="Welcome" component={Welcome}></stackRoutes.Screen>
    <stackRoutes.Screen
      name="UserIdentification"
      component={UserIdentification}
    ></stackRoutes.Screen>
    <stackRoutes.Screen
      name="Confirmation"
      component={Confirmation}
    ></stackRoutes.Screen>
    <stackRoutes.Screen
      name="PlantSelect"
      component={PlantSelect}
    ></stackRoutes.Screen>
    <stackRoutes.Screen
      name="PlantSave"
      component={PlantSave}
    ></stackRoutes.Screen>
    <stackRoutes.Screen
      name="MyPlants"
      component={MyPlants}
    ></stackRoutes.Screen>
  </stackRoutes.Navigator>
);

export default AppRoutes;
