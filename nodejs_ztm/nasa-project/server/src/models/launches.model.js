const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: 'Kepler exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  destination: 'Keplet-442 b',
  customers: ['ZTM', 'NASA'],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

module.exports = { launches };