import { createSlice } from '@reduxjs/toolkit'

export enum LayoutEnum {
  side = 1,
  top,
  mix,
  fullPage
}

interface GlobalState {
  showHeader: boolean
  showFooter: boolean
  showBreadcrumb: boolean
  layout: LayoutEnum
  fullPage:boolean
  collapsed: boolean
}
const initialState:GlobalState = {
  showHeader:true,
  showFooter: true,
  showBreadcrumb: true,
  layout: LayoutEnum.side,
  fullPage: false,
  collapsed: true
}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleHeader (state, action) {
      state.showHeader = !state.showHeader
    },

    toggleFooter (state, action) {
      state.showFooter = !state.showFooter
    },

    switchMenu (state, action) {
      if (action.payload) {
        state.layout = action.payload
      }
    },

    toggleCollapsed (state, action) {
      if (action.payload === null) {
        state.collapsed = !state.collapsed
      } else {
        state.collapsed = !!action.payload
      }
    },

    switchFullPage (state, action) {
      state.fullPage = !!action?.payload
    },

    switchLayout (state, action) {
      if (action?.payload) {
        state.layout = action?.payload
      }
    }
  },
  extraReducers: {}
})

export const { toggleHeader, toggleFooter, toggleCollapsed, switchFullPage, switchMenu, switchLayout } = globalSlice.actions

export default globalSlice.reducer