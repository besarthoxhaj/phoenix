module.exports = (Apn) => {
  return (req, reply) => {
    Apn.sendSplit();
    return reply({
        status: 'success',
      });
  }
}
