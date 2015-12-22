module.exports = (Apn) => {
  return (req, reply) => {
    const { device_token } = req.payload;

    Apn.sendNotification(device_token || undefined, (error, reponse) => {
      if (error) {
        return reply({
          status: 'error',
          errorCode: error.errorCode
        });
      } else {
        return reply({
          status: 'success',
        });
      }
    });
  }
}
