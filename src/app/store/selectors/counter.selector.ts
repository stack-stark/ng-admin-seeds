
import { createSelector } from '@ngrx/store';
const selectCunterStates = (state: number) => state;

export const getCounter = createSelector(selectCunterStates, (state: number) => state);
