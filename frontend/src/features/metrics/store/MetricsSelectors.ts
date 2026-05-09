import type { RootState } from "@/app/store";

export const selectWeatherMetricsData = (state: RootState) => state.metrics.data;
export const selectMetrics = (state: RootState) => state.metrics;
