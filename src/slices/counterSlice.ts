import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface CounterState {
    value: string,
    total: number | null,
    lastAction: string
  }

  const initialState: CounterState = {
    value: "",
    total: null,
    lastAction: ''
  }
  

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        action: (state, action: PayloadAction<string>) =>{
            switch (state.lastAction) {
                case '+':
                    state.total! += parseFloat(state.value);
                    state.value = "";
                    state.lastAction = action.payload;
                    break;

                case '-':
                    state.total! -= parseFloat(state.value);
                    state.value = "";
                    state.lastAction = action.payload;
                    break;

                case 'x':
                    state.total! *= parseFloat(state.value);
                    state.value = "";
                    state.lastAction = action.payload;
                    break;
            
                default:
                    state.total! = parseFloat(state.value);
                    state.value = "";
                    state.lastAction = action.payload;
                    break;
            }
        },
        count: (state, action: PayloadAction<string>) => {
            state.value += action.payload
        },
        display: (state)=>{
            switch (state.lastAction) {
                case '+':
                    state.value = String((state.total!) + parseFloat(state.value));
                    break;

                case '-':
                    state.value = String((state.total!) - parseFloat(state.value));
                    break;

                case 'x':
                    state.value = String((state.total!) * parseFloat(state.value));
                    break;
            
                default:
                    break;
            }
            state.lastAction = '';
            state.total = null;
            
        },
        reset: (state) =>{
            state.value = "";
            state.total = null;
            state.lastAction = '';
        },
    },
})

// Action creators are generated for each case reducer function
export const { count, reset, action, display } = counterSlice.actions
export const state = (state: RootState)=> state.counter

export default counterSlice.reducer