import {Layout, LayoutProps} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet} from 'react-native';

const Container: React.FC<LayoutProps> = props => {
  const {children, ...layoutProps} = props;
  return (
    <Layout style={styles.container} {...layoutProps}>
      {children}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
  },
});

export default Container;
