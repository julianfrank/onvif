var cam = { hostname: "192.168.43.196", port: "3702", path: "/onvif1", username: "admin", password: "123" }

const onvif = require('node-onvif');
const fs = require('fs');

console.log('Start the discovery process.');
// Find the ONVIF network cameras.
// It will take about 3 seconds.
onvif.startProbe().then((device_info_list) => {
  console.log(device_info_list.length + ' devices were found.');
  // Show the device name and the URL of the end point.
  device_info_list.forEach((info) => {
    console.log('- ' + info.urn);
    console.log('  - ' + info.name);
    console.log('  - ' + info.xaddrs[0]);
    // Create an OnvifDevice object
    let device = new onvif.OnvifDevice({
      xaddr: info.xaddrs[0],
      user: 'admin',
      pass: 'P@SSw0rd'//'123'
    });

    // Initialize the OnvifDevice object
    device.init()
      .then((info) => {
        // Show the detailed information of the device.
        console.log("info:", JSON.stringify(info, null, '  '));
        let url = device.getUdpStreamUrl();
        console.log("streamurl:", url);
        let profile = device.getCurrentProfile();
        console.log(JSON.stringify(profile, null, '  '));
        console.log('fetching the data of the snapshot...');
        return device.fetchSnapshot();
      })
      .then((res) => {
        // Save the data to a file
        //fs.writeFileSync('snapshot.jpg', res.body, { encoding: 'binary' });
        console.log('Done!', res);
      })
      .catch((error) => {
        console.error(error);
      });
  });
}).catch((error) => {
  console.error(error);
});