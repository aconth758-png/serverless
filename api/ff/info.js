module.exports = (req, res) => {
  const { uid, region } = req.query;

  if (!uid) {
    return res.status(400).json({
      status: 'error',
      code: 400,
      message: 'UID diperlukan'
    });
  }

  // Dummy data berdasarkan UID
  const dummy = {
    uid: uid,
    region: region || 'TH',
    nickname: `Vinzz_${uid.slice(-4)}`,
    level: Math.floor(Math.random() * 80) + 20,
    rank: ['Bronze', 'Silver', 'Gold', 'Platinum', 'Heroic'][Math.floor(Math.random() * 5)],
    is_verified: true,
    last_login: new Date().toISOString()
  };

  res.json({
    status: 'success',
    code: 200,
    data: dummy,
    package: 'com.dts.freefireth'
  });
};
