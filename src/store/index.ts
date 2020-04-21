import Vue from 'vue'
import Vuex from 'vuex'
import { IAppState } from './modules/app'
import { UserState } from './modules/user'

Vue.use(Vuex)

export interface RootState {
  app: IAppState
  user: UserState
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<RootState>({})
