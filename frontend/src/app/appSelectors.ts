import type { RootState } from "@/app/store";

export const selectActiveView = (state: RootState) => state.app.activeView;
export const selectCity = (state: RootState) => state.app.city;
