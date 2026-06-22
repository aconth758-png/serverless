module.exports = (req, res) => {
  const servers = [
    { name: 'Asia', status: 'online', ping: 45 },
    { name: 'Europe', status: 'online', ping: 120 },
    { name: 'Americas', status: 'maintenance', ping: 0 }
  ];

  res.json({
    status: 'success',
    code: 200,
    data: {
      servers,
      global_status: 'online',
      maintenance_schedule: '2026-07-01 03:00 UTC'
    },
    package: 'com.dts.freefireth'
  });
};
