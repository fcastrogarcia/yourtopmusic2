export const getProps = tab => index => ({
  "aria-controls": `simple-tabpanel-${index}`,
  selected: tab === index,
});
