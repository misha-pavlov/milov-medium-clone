import React from 'react';
import { Button, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, Tabs, TabList, Tab, TabPanel, TabPanels, Stack } from '@chakra-ui/react';

import { messages } from '../../config/messages';
import SingInWithButtons from '../../components/SignInWithButton/SingInWithButtons'
import { constants } from '../../config/constants';

type TModalLogin = {
    isOpen: boolean;
    isSignUp?: boolean;
    onClose: () => void;
}

const ModalLogin:React.FC<TModalLogin> = ({ isOpen, onClose, isSignUp }) => {
    return <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent padding={15}>
      <Tabs variant="soft-rounded" colorScheme="green"  defaultIndex={isSignUp ? 1 : 0}>
      <ModalHeader>
        <TabList justifyContent='center'>
            <Tab>{messages.login.signIn}</Tab>
            <Tab>{messages.login.signUp}</Tab>
        </TabList>
      </ModalHeader>

      <ModalBody>
        <TabPanels>
            <TabPanel>
                <Stack align='center' paddingTop={35} paddingBottom={35}>
                    <SingInWithButtons iconType={'Google'} />
                    <SingInWithButtons iconType={'Facebook'} />
                    <SingInWithButtons iconType={'Apple'} />
                    <SingInWithButtons iconType={'Twitter'} />
                    <SingInWithButtons iconType={'email'} />
                </Stack>
            </TabPanel>
            <TabPanel>
                <Stack align='center' paddingTop={35} paddingBottom={35}>
                    <SingInWithButtons isSignUp iconType={'Google'} />
                    <SingInWithButtons isSignUp iconType={'Facebook'} />
                    <SingInWithButtons isSignUp iconType={'email'} />
                </Stack>
            </TabPanel>
        </TabPanels>
      </ModalBody>

      <ModalFooter>
        <Button mr={3} onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
      </Tabs>
    </ModalContent>
  </Modal>
};

export default ModalLogin