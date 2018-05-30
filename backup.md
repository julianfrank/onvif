Start the discovery process.
1 devices were found.
- urn:uuid:2419d68a-2dd2-21b2-a205-54C9DFD8F018
  - IPC 10917825
  - http://192.168.43.196:5000/onvif/device_service
info: {
  "Manufacturer": "Technology",
  "Model": "IPC",
  "FirmwareVersion": "21.00.00.42",
  "SerialNumber": "10917825",
  "HardwareId": "Ver 2.1"
}
streamurl: rtsp://192.168.43.196:554/onvif1
{
  "token": "IPCProfilesToken0",
  "name": "MainStream",
  "snapshot": "",
  "stream": {
    "udp": "rtsp://192.168.43.196:554/onvif1",
    "http": "rtsp://192.168.43.196:554/onvif1",
    "rtsp": "rtsp://192.168.43.196:554/onvif1"
  },
  "video": {
    "source": {
      "token": "VideoSourceConfigToken0",
      "name": "VideoSourceConfig0",
      "bounds": {
        "width": 720,
        "height": 1280,
        "x": 0,
        "y": 0
      }
    },
    "encoder": {
      "token": "VideoEncoderConfigToken0",
      "name": "VideoEncoderConfig0",
      "resolution": {
        "width": 960,
        "height": 960
      },
      "quality": 10,
      "framerate": 30,
      "bitrate": 1200,
      "encoding": "H264"
    }
  },
  "audio": {
    "source": {
      "token": "AudioSourceConfigToken",
      "name": "AudioSourceConfig"
    },
    "encoder": {
      "token": "AudioEncoderConfigToken",
      "name": "AudioEncoderConfig",
      "bitrate": 64,
      "samplerate": 8,
      "encoding": "G711"
    }
  },
  "ptz": {
    "range": {
      "x": {
        "min": 0,
        "max": 0
      },
      "y": {
        "min": 0,
        "max": 0
      },
      "z": {
        "min": 0,
        "max": 0
      }
    }
  }
}