export class IpAddressLogic {
    public static analyzeIPAddress(ipAddress: string): string {
      if (IpAddressLogic.isValidIPAddress(ipAddress)) {
        const octets = ipAddress.split('.');
        const firstOctet = +octets[0];
        const binaryOctets: string[] = [];
  
        for (let i = 0; i < octets.length; i++) {
          binaryOctets[i] = (+octets[i]).toString(2).padStart(8, '0');
        }
  
        const firstBinaryOctets = +binaryOctets[0];
  
        let ipClass = 'N/A',
          subnetMask = 'N/A',
          networkAddress = 'N/A',
          hostAddress = 'N/A',
          networkID = 'N/A',
          hostID = 'N/A',
          networkBits = 'N/A',
          hostBits = 'N/A';
        let usableIPs = 0,
          distributedNetworks = 0;
  
        if (firstOctet >= 1 && firstOctet <= 126) {
          ipClass = 'A';
          subnetMask = '255.0.0.0 / 8';
          networkAddress = `${octets[0]}.0.0.0`;
          hostAddress = `${octets[0]}.${octets[1]}.${octets[2]}.${octets[3]}`;
          networkID = `${octets[0]}`;
          hostID = `${octets[1]}.${octets[2]}.${octets[3]}`;
          networkBits = `${binaryOctets[0]}`;
          hostBits = `${binaryOctets[1]}.${binaryOctets[2]}.${binaryOctets[3]}`;
          usableIPs = 2 ** 24 - 2;
          distributedNetworks = 2 ** 7;
        } else if (firstOctet >= 128 && firstOctet <= 191) {
          ipClass = 'B';
          subnetMask = '255.255.0.0 / 16';
          networkAddress = `${octets[0]}.${octets[1]}.0.0`;
          hostAddress = `${octets[0]}.${octets[1]}.${octets[2]}.${octets[3]}`;
          networkID = `${octets[0]}.${octets[1]}`;
          hostID = `${octets[2]}.${octets[3]}`;
          networkBits = `${binaryOctets[0]}.${binaryOctets[1]}.0.0`;
          hostBits = `${binaryOctets[2]}.${binaryOctets[3]}`;
          usableIPs = 2 ** 16 - 2;
          distributedNetworks = 2 ** 14;
        } else if (firstOctet >= 192 && firstOctet <= 223) {
          ipClass = 'C';
          subnetMask = '255.255.255.0 / 24';
          networkAddress = `${octets[0]}.${octets[1]}.${octets[2]}.0`;
          hostAddress = `${octets[0]}.${octets[1]}.${octets[2]}.${octets[3]}`;
          networkID = `${octets[0]}.${octets[1]}.${octets[2]}`;
          hostID = `${octets[3]}`;
          networkBits = `${binaryOctets[0]}.${binaryOctets[1]}.${binaryOctets[2]}.0`;
          hostBits = `${binaryOctets[3]}`;
          usableIPs = 2 ** 8 - 2;
          distributedNetworks = 2 ** 21;
        }
  
        const resultMessage =
          `IP Address: ${ipAddress}\n` +
          `IP Class: ${ipClass}\n` +
          `Subnet Mask: ${subnetMask}\n` +
          `Network Address: ${networkAddress}\n` +
          `Host Address: ${hostAddress}\n` +
          `Network ID: ${networkID}\n` +
          `Host ID: ${hostID}\n` +
          `Network Bits: ${networkBits}\n` +
          `Host Bits: ${hostBits}\n` +
          `Usable IPs: ${usableIPs}\n` +
          `Distributed Networks: ${distributedNetworks}`;
  
        return resultMessage;
      } else {
        return 'Invalid IP Address';
      }
    }
  
    private static isValidIPAddress(ipAddress: string): boolean {
      const octets = ipAddress.split('.');
      if (octets.length !== 4) {
        return false;
      }
  
      for (const octet of octets) {
        const value = +octet;
        if (isNaN(value) || value < 0 || value > 255) {
          return false;
        }
      }
  
      return true;
    }
  }
  