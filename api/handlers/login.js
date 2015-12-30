module.exports = (req, reply) => {
  console.log(req.payload);
  return reply({
    status: 'success',
  })
}
