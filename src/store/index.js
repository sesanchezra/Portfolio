import { configureStore } from '@reduxjs/toolkit'
import worksControllersSlice from './slices/worksControllers.slice'

export default configureStore({
  reducer: {
    worksControllersSlice
	}
})