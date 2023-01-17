import { createSlice } from '@reduxjs/toolkit';


export const worksControllers = createSlice({
    name: 'worksControllers',
    initialState: 
        {
            title: 'TechShop',
            isActive: true
        }
    ,
    reducers: {
        setWorksControllers: (state, action) => action.payload
    }
})

export const {setWorksControllers} = worksControllers.actions;

export default worksControllers.reducer;