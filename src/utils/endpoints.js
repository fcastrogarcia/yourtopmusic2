function endpoint(type, timeRange) {
  return `/top/${type}?limit=50&time_range=${timeRange}`;
}
//endpoints array
export default [
  "/",
  endpoint("artists", "long_term"),
  endpoint("artists", "medium_term"),
  endpoint("artists", "short_term"),
  endpoint("tracks", "long_term"),
  endpoint("tracks", "medium_term"),
  endpoint("tracks", "short_term"),
];
