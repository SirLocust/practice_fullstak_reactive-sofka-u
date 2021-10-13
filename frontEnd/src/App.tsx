import { Provider } from 'react-redux'
import { store } from './store/store'
import PageResult from './view/pageResult'

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <PageResult />
      </div>
    </Provider>
  )
}
