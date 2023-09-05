// Ini import untuk router
import { RouterProvider } from 'react-router-dom'
import router from './routers'

// Ini import untuk stores (start using redux)

import { Provider } from 'react-redux'
import store from './stores'



function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )

}

export default App
