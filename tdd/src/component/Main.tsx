import React from 'react';
import { Alert, Button } from 'react-native';

type Props = {

};

const Main: React.FC<Props> = (): JSX.Element => {
  return (
    <>
      <Button 
        title={"hey"}
        onPress={() => {
          window.alert('hello, world!');
        }}
      />
    </>
  );
};

export default Main;