import React, { useState } from 'react';

import { MainLayout } from './src/MainLayout';
import { TodoState } from './src/context/todo/TodoState';

// async function loadApplication() {
//   await Font.loadAsync({
//     'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
//     'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf')
//   })
// }

export default function App() {
  // готово ли приложение к отрисовке
  const [isReady, setIsReady] = useState(false)

  // обработка загрузки приложения
  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={this._cacheResourcesAsync}
  //       onFinish={() => setIsReady(true)}
  //       onError={console.warn}
  //     />
  //   ); 
  // }

  return (
    <TodoState>
      <MainLayout />
    </TodoState>
  )
}

