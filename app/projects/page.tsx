import { Title } from '@mantine/core';
import { HeaderSimple } from '@/components/SimpleHeader/HeaderSimple';
import classes from '../../components/Welcome/Welcome.module.css';

export default function Page() {
    return (
    <>
        <HeaderSimple />
        <Title className={classes.title} ta="center" mt="100">This will eventually be the page of my Projects</Title>
    </>
    );
}
