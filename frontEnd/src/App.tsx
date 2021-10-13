import { Provider } from 'react-redux'
import { store } from './store/store'
import { PageRange } from './view/pageRange'
import PageResult from './view/pageResult'

export const App = () => {
  return (
    <Provider store={store}>
      <div className="container ">
        <div
          className="row   d-flex  align-items-center justify-content-center"
          style={{ minHeight: '100vh' }}
        >
          <div className="col-12 align-self-center">
            <PageResult />
          </div>
          <div className="col-12">
            <PageRange />
          </div>
        </div>
      </div>
    </Provider>
  )
}
