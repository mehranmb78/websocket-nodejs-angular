export const getDate = (req, res) => {
  res.status(200);
  res.json(new Date());
};
