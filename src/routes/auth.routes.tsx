import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../screens/SignIn';
import { TaskRegister } from '../screens/TaskRegister';
import { Tasks } from '../screens/Tasks';

const { Navigator,Screen } = createNativeStackNavigator();

export function AuthRoutes(){
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen 
                name="SignIn"
                component={SignIn}
            />
             <Screen 
                name="TaskRegister"
                component={TaskRegister}
            />
            <Screen 
                name="TaskList"
                component={Tasks}
            />
        </Navigator>
    )
}


