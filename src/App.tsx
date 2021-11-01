import React, {FC} from 'react';
import './App.css';
import { useAppSelector, useAppDispatch } from './helper/typedHooks';
import {Alert, Search, Weather} from "./components"
import {setAlert} from "./store/actions/alertAction"
import {setError} from "./store/actions/weatherAction"


const App: FC = () => {
  const dispatch = useAppDispatch()
  const weatherData = useAppSelector((state)=> state.weather.data )
  const loading = useAppSelector((state) => state.weather.loading)
  const error = useAppSelector((state) => state.weather.error)
  const alertMessage= useAppSelector((state) => state.alert.message)




  return (
    <div className="has-text-centered">
      <Search title = " Enter a city name " />
      { loading? <h2 className="is-size-3 py-2">Loading ...</h2> : 
      weatherData && <Weather weatherData={weatherData} /> }

      {alertMessage && <Alert message={alertMessage} onClose={()=> dispatch(setAlert(""))} />}
      {error && <Alert message={error} onClose={()=> dispatch(setError())} />}

    </div>
  )


  // classNames taken from bulma css classes package

}



export default App;
