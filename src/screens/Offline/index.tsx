import {Layout, Text} from '@ui-kitten/components';
import React from 'react';

const Offline: React.FC = () => {
  return (
    <Layout style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text category="h5">Looks you are offline :(</Text>
      <Text category="p1" appearance="hint">
        Check your internet connection
      </Text>
    </Layout>
  );
};

export default Offline;
