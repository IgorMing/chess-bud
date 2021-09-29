import {Text} from '@ui-kitten/components';
import React from 'react';

interface TitleProps {
  children: string;
}

const Title: React.FC<TitleProps> = props => {
  return (
    <Text
      category="s1"
      style={{
        fontSize: 18,
        paddingBottom: 6,
      }}>
      {props.children}
    </Text>
  );
};

export default Title;
