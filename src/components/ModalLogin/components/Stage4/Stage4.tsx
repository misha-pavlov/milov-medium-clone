import React from 'react';
import { Button, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { GithubOutlined, InstagramOutlined,
    LinkedinOutlined, TwitterOutlined, FacebookOutlined } from '@ant-design/icons';

import { messages } from '../../../../config/messages';
import { colors } from '../../../../config/colors';

type TStage4 = {
    onClick: () => void;
}

const Stage4: React.FC<TStage4> = ({ onClick }) => {
    const formik = useFormik({
        initialValues: {
            twitter: '',
            gitHub: '',
            linkedin: '',
            facebook: '',
            instagram: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            values.twitter = '';
            values.gitHub = '';
            values.linkedin = '';
            values.facebook = '';
            values.instagram = '';
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
                        children={<TwitterOutlined color="gray.300" />}
                    />
                    <Input id="twitter"
                           name="twitter"
                           type="text"
                           onChange={formik.handleChange}
                           value={formik.values.twitter}
                           placeholder={messages.stages.twitter} />
                </InputGroup>

                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        color="gray.300"
                        children={<GithubOutlined color="gray.300" />}
                    />
                    <Input id="gitHub"
                           name="gitHub"
                           type="text"
                           onChange={formik.handleChange}
                           value={formik.values.gitHub}
                           placeholder={messages.stages.gitHub} />
                </InputGroup>

                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        color="gray.300"
                        children={<LinkedinOutlined color="gray.300" />}
                    />
                    <Input id="linkedin"
                           name="linkedin"
                           type="text"
                           onChange={formik.handleChange}
                           value={formik.values.linkedin}
                           placeholder={messages.stages.linkedin} />
                </InputGroup>

                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        color="gray.300"
                        children={<FacebookOutlined color="gray.300" />}
                    />
                    <Input id="facebook"
                           name="facebook"
                           type="text"
                           onChange={formik.handleChange}
                           value={formik.values.facebook}
                           placeholder={messages.stages.facebook} />
                </InputGroup>

                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        color="gray.300"
                        children={<InstagramOutlined color="gray.300" />}
                    />
                    <Input id="instagram"
                           name="instagram"
                           type="text"
                           onChange={formik.handleChange}
                           value={formik.values.instagram}
                           placeholder={messages.stages.instagram} />
                </InputGroup>

                <Button disabled={
                    (formik.values.twitter !== '' && !formik.values.twitter.includes('twitter.com'))
                    || (formik.values.gitHub !== '' && !formik.values.gitHub.includes('github.com'))
                    || (formik.values.linkedin !== '' && !formik.values.linkedin.includes('linkedin.com'))
                    || (formik.values.facebook !== '' && !formik.values.facebook.includes('facebook.com'))
                    || (formik.values.instagram !== '' && !formik.values.instagram.includes('instagram.com'))}
                    bg={colors.specialGreen} type='submit'>
                    {messages.buttons.next}
                </Button>
            </Stack>
        </form>
    </Stack>
}

export default Stage4