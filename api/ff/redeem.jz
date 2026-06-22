module.exports = (req, res) => {
  const { code, uid } = req.body || {};

  if (!code || !uid) {
    return res.status(400).json({
      status: 'error',
      code: 400,
      message: 'Parameter code dan uid wajib diisi'
    });
  }

  // Simulasi validasi kode
  const validCodes = ['FFVINZZ01', 'FFGOLD2026', 'FFTHAILAND'];
  const isValid = validCodes.includes(code.toUpperCase());

  if (!isValid) {
    return res.json({
      status: 'failed',
      code: 403,
      message: 'Kode redeem tidak valid atau sudah kadaluarsa',
      package: 'com.dts.freefireth'
    });
  }

  const rewards = ['Diamond 50', 'Emote Bot', 'Skin M1887', 'Magic Cube'];
  const reward = rewards[Math.floor(Math.random() * rewards.length)];

  res.json({
    status: 'success',
    code: 200,
    data: {
      uid,
      code,
      reward,
      claimed_at: new Date().toISOString()
    },
    package: 'com.dts.freefireth'
  });
};
