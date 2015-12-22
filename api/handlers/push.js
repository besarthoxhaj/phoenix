module.exports = (Apn) => {
  return (req, reply) => {

    Apn.sendNotification(undefined, (error, reponse) => {
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
