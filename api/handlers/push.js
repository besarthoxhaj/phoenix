

module.exports = (Apn) => {
  return (req, reply) => {

    const { device_token } = req.payload;

    Apn.sendNotification(device_token);
    
    return reply({
      status: 'success',
    });
  }
}
