import { Title, Text } from '@mantine/core';
import { HeaderSimple } from '@/components/SimpleHeader/HeaderSimple';
import classes from '../../components/Welcome/Welcome.module.css';

export default function Page() {
  return (
    <>
      <HeaderSimple />
      <Title className={classes.title} ta="center" mt={100}>
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          About
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This is a starter page for my new web project where I will be exploring the world of web
        development and the like{' '}
      </Text>
    </>
  );
}
