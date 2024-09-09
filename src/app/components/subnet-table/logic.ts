// table-logic.ts

export interface Subnet {
    i: number;
    Ipsubred: string;
    Ipconf: string;
    Broadcast: string;
  }
  
  export const calculateSubnets = (ipAddress: string, saltos: number, Nsubred: number, networkClass: string): Subnet[] => {
    const ipParts = ipAddress.split('.');
    const newCalculatedSubnets = [];
  
    for (let index = 0; index < Nsubred; index++) {
      const subnetNumber = index + 1;
      let baseNetworkAddress;
      let networkAddress;
      let broadcastAddress;
      let rango;
  
      if (networkClass === "A") {
        baseNetworkAddress = ipParts.slice(0, 1).join('.');
        networkAddress = `${baseNetworkAddress}.${saltos * index}.0.0`;
        rango = `${baseNetworkAddress}.${saltos * index}.0.1 - ${baseNetworkAddress}.${(saltos * subnetNumber) - 1}.255.254`;
        broadcastAddress = `${baseNetworkAddress}.${(saltos * subnetNumber) - 1}.255.255`;
      } else if (networkClass === "B") {
        baseNetworkAddress = ipParts.slice(0, 2).join('.');
        networkAddress = `${baseNetworkAddress}.${saltos * index}.0`;
        rango = `${baseNetworkAddress}.${saltos * index}.1 - ${baseNetworkAddress}.${(saltos * subnetNumber) - 1}.254`;
        broadcastAddress = `${baseNetworkAddress}.${(saltos * subnetNumber) - 1}.255`;
      } else if (networkClass === "C") {
        baseNetworkAddress = ipParts.slice(0, 3).join('.');
        networkAddress = `${baseNetworkAddress}.${saltos * index}`;
        rango = `${baseNetworkAddress}.${(saltos * index) + 1} - ${baseNetworkAddress}.${(saltos * subnetNumber) - 2}`;
        broadcastAddress = `${baseNetworkAddress}.${(saltos * subnetNumber) - 1}`;
      } else {
        return [];
      }
  
      newCalculatedSubnets.push({
        i: subnetNumber,
        Ipsubred: networkAddress,
        Ipconf: rango,
        Broadcast: broadcastAddress
      });
    }
  
    return newCalculatedSubnets;
  };
  