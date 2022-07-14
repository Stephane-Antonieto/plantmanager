import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackRouters from "./stack.routes";

const Routes = () => {
  return (
    <NavigationContainer>
      <StackRouters />
    </NavigationContainer>
  );
};

export default Routes;
