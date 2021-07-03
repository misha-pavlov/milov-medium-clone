import React, { useState } from 'react';
import { Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody, Tabs, TabList, Tab, TabPanel, TabPanels, Stack } from '@chakra-ui/react';

import { messages } from '../../config/messages';
import SingInWithButtons from '../../components/SignInWithButton/SingInWithButtons';
import Stage2 from './components/Stage2/Stage2';
import BackButton from './components/BackButton/BackButton';
import Stage3 from './components/Stage3/Stage3';
import Stage4 from './components/Stage4/Stage4';

type TModalLogin = {
    isOpen: boolean;
    isSignUp?: boolean;
    onClose: () => void;
}

const ModalLogin:React.FC<TModalLogin> = ({ isOpen, onClose, isSignUp }) => {
    const [stage, setStage] = useState<number>(1)
    return <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent padding={15}>
      <Tabs variant="soft-rounded" colorScheme="green"  defaultIndex={isSignUp ? 1 : 0}>
          {stage === 1 && <ModalHeader>
              <TabList justifyContent='center'>
                  <Tab>{messages.login.signIn}</Tab>
                  <Tab>{messages.login.signUp}</Tab>
              </TabList>
          </ModalHeader>}

          {stage === 1 && <ModalBody>
              <TabPanels>
                  <TabPanel>
                      <Stack align='center' paddingTop={35} paddingBottom={35}>
                          <SingInWithButtons disabled={true} iconType={'Google'} />
                          <SingInWithButtons disabled={true} iconType={'Facebook'} />
                          <SingInWithButtons onClick={() => setStage(2)} iconType={'userName'} />
                      </Stack>
                  </TabPanel>
                  <TabPanel>
                      <Stack align='center' paddingTop={35} paddingBottom={35}>
                          <SingInWithButtons disabled={true} isSignUp iconType={'Google'} />
                          <SingInWithButtons disabled={true} isSignUp iconType={'Facebook'} />
                          <SingInWithButtons onClick={() => setStage(3)} isSignUp iconType={'userName'} />
                      </Stack>
                  </TabPanel>
              </TabPanels>
          </ModalBody>}

          {stage === 2 && <ModalBody>
              <BackButton onClick={() => setStage(1) }/>
              <Stack>
                <Stage2 onClick={() => setStage(4)} />
              </Stack>
          </ModalBody>}

          {stage === 3 && <ModalBody>
              <BackButton onClick={() => setStage(1) }/>
              <Stack>
                  <Stage3 onClick={() => setStage(4)} />
              </Stack>
          </ModalBody>}

          {stage === 4 && <ModalBody>
              <BackButton onClick={() => setStage(1) }/>
              <Stack>
                  <Stage4 onClick={() => setStage(1)} />
              </Stack>
          </ModalBody>}
      </Tabs>
    </ModalContent>
  </Modal>
};

export default ModalLogin