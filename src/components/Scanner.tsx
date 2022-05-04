import React from 'react';

import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import { Box, Center } from 'native-base';

type ScannerProps = {
  scanned: boolean;
  onScan: (data: BarCodeScannerResult) => void;
};

export const Scanner: React.FC<ScannerProps> = ({ scanned, onScan }) => {
  return (
    <BarCodeScanner
      onBarCodeScanned={scanned ? undefined : onScan}
      barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
      style={{
        width: '100%',
        flex: 1,
      }}
    >
      <Center flex={1}>
        <Box
          height="180px"
          width="180px"
          borderWidth="2px"
          borderColor="brand.primary.500"
          borderRadius="4px"
        />
      </Center>
    </BarCodeScanner>
  );
};
