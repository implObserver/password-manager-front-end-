export { pairsReducer, pairsActions } from './slice/pair/slice'
export { addPair } from './slice/pair/thunks/post/addPair'
export { deletePair } from './slice/pair/thunks/delete/deletePair'
export { editPair } from './slice/pair/thunks/put/editPair'
export { selectCurrentPage, selectItemsPerPage, selectPairs } from './slice/pair/selectors'
export { openedPairActions, openedPairReducer } from './slice/openedPair/slice'