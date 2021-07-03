import React from 'react';
import { Button, Input, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react';
import { AtSignIcon, LockIcon } from '@chakra-ui/icons';
import { useFormik } from 'formik';

import { messages } from '../../../../config/messages';
import { colors } from '../../../../config/colors';

type TStage2 = {
    onClick: () => void;
}

const Stage2: React.FC<TStage2> = ({ onClick }) => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    const formik = useFormik({
        initialValues: {
            userName: '',
            password: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            values.userName = '';
            values.password = '';
            onClick();
        },
    });
    return <Stack>
        <form onSubmit={formik.handleSubmit}>
            <Stack spacing={4} mt={25} mb={25}>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        color="gray.300"
                        children={<AtSignIcon color="gray.300" />}
                    />
                    <Input id="userName"
                           name="userName"
                           type="text"
                           onChange={formik.handleChange}
                           value={formik.values.userName}
                           placeholder={messages.stages.userName} />
                </InputGroup>

                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        color="gray.300"
                        children={<LockIcon color="gray.300"/>}
                    />
                    <Input id="password"
                           name="password"
                           type={show ? "text" : "password"}
                           onChange={formik.handleChange}
                           value={formik.values.password}
                           placeholder={messages.stages.password} />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" disabled={formik.values.password === ''}
                                onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>

                <Button disabled={formik.values.password.length < 5 || formik.values.userName === ''}
                        bg={colors.specialGreen} type='submit'>
                    {messages.buttons.next}
                </Button>
            </Stack>
        </form>
    </Stack>
}

export default Stage2