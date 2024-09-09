export function calculateIPred(ip: string, networkClass: string): string {
    const parts = ip.split('.');

    if (networkClass === 'A') {
      return parseInt(parts[0]) + '.0.0.0';
    } else if (networkClass === 'B') {
      return parseInt(parts[0]) + '.' + parseInt(parts[1]) + '.0.0';
    } else if (networkClass === 'C') {
      return parseInt(parts[0]) + '.' + parseInt(parts[1]) + '.' + parseInt(parts[2]) + '.0';
    } else {
      return 'No válida';
    }
  }

export function calcularMascara(networkClass: string): string {
    if (networkClass === 'A') {
      return '8';
    } else if (networkClass === 'B') {
      return '16';
    } else if (networkClass === 'C') {
      return '24';
    } else {
      return 'No válida';
    }
  }

  export function calculateNetworkClass(ipNumber: number): string {
    if (ipNumber >= 1 && ipNumber <= 127) {
      return 'A';
    } else if (ipNumber >= 128 && ipNumber <= 191) {
      return 'B';
    } else if (ipNumber >= 192 && ipNumber <= 223) {
      return 'C';
    } else if (ipNumber >= 224 && ipNumber <= 239) {
      return 'D';
    } else {
      return 'No válida';
    }
}
export function calculateSubnetInfo(subnetBits: number, networkClass: string, mascara: string): any {
    const bits = Math.ceil(Math.log2((subnetBits+2)));
    const Nsubred = calculatesubnet(bits);
    const IPsubred = calculateIPsubnet(networkClass, bits);
    const Msubred = calculateMsubred(networkClass, bits) + '  /' + (parseInt(bits.toString()) + parseInt(mascara));
    const saltos = salto(Nsubred);

    return {
      bits,
      Nsubred,
      IPsubred,
      Msubred,
      saltos
    };
  }

export function salto(Nsubred: number): number {
    return 256 / Nsubred;
  }

export function  calculateMsubred(networkClass: string, bits: number): string {
  const bitsToBinary = (bits: any[]) => bits.join('');
  const binaryToDecimal = (binary: string) => parseInt(binary, 2);

      if (networkClass =="A") {
        const claseA = [1, 1, 1, 1, 1, 1, 1, 1];
        const claseB = [0, 0, 0, 0, 0, 0, 0, 0];
        const claseC = [0, 0, 0, 0, 0, 0, 0, 0];
        const claseD = [0, 0, 0, 0, 0, 0, 0, 0];
        for (let i = 0; i <= bits - 1; i++) {
          claseB[i] = 1;
        }
        const A = binaryToDecimal(bitsToBinary(claseA))
        const B = binaryToDecimal(bitsToBinary(claseB))
        const C = binaryToDecimal(bitsToBinary(claseC))
        const D = binaryToDecimal(bitsToBinary(claseD))
        
        return "" +A+ "."+B+"."+C+"."+D;
      } else if (networkClass=="B") {
        const claseA = [1, 1, 1, 1, 1, 1, 1, 1];
        const claseB = [1, 1, 1, 1, 1, 1, 1, 1];
        const claseC = [0, 0, 0, 0, 0, 0, 0, 0];
        const claseD = [0, 0, 0, 0, 0, 0, 0, 0];

        for (let i = 0; i <= bits - 1; i++) {
          claseC[i] = 1;
        }
        const A = binaryToDecimal(bitsToBinary(claseA))
        const B = binaryToDecimal(bitsToBinary(claseB))
        const C = binaryToDecimal(bitsToBinary(claseC))
        const D = binaryToDecimal(bitsToBinary(claseD))
        
        return "" +A+ "."+B+"."+C+"."+D;
      } else if (networkClass=="C") {
        const claseA = [1, 1, 1, 1, 1, 1, 1, 1];
        const claseB = [1, 1, 1, 1, 1, 1, 1, 1];
        const claseC = [1, 1, 1, 1, 1, 1, 1, 1];
        const claseD = [0, 0, 0, 0, 0, 0, 0, 0];
        for (let i = 0; i <= bits - 1; i++) {
          claseD[i] = 1;
        }
        const A = binaryToDecimal(bitsToBinary(claseA))
        const B = binaryToDecimal(bitsToBinary(claseB))
        const C = binaryToDecimal(bitsToBinary(claseC))
        const D = binaryToDecimal(bitsToBinary(claseD))
        
        return "" +A+ "."+B+"."+C+"."+D;

      }  else {
        return 'No válida';
      }
  
  }

export function calculatesubnet(bits: number): number {
    const Nred= Math.pow(2, bits)
     return Nred;
  }

export function calculateIPsubnet(networkClass: string, bits: number): string {
  if (networkClass =="A") {
    const   NIP= Math.pow(2, 24 - bits)
    const   CNIP=( Math.pow(2, 24 - bits))-2
      
       return NIP+" ips "+CNIP+" ips utilizable";
     } else if (networkClass=="B") {
       const  NIP= Math.pow(2, 16 - bits)
       const  CNIP=( Math.pow(2, 16 - bits))-2
      
       return NIP+" ips "+CNIP+" ips utilizable";
     } else if (networkClass=="C") {
       const   NIP= Math.pow(2, 8 - bits)
       const   CNIP=( Math.pow(2, 8 - bits))-2
      
       return NIP+" ips "+CNIP+" ips utilizable";
     }  else {
       return 'No válida';
     } 
  }

export function primernumero(ipAddress: string) {
  const parts = ipAddress.split('.');
    
  const ipNumber = parseInt(parts[0])                
  
  return ipNumber;
}
