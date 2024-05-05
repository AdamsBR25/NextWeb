import { Button, Group } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { HeaderSimple } from '../components/SimpleHeader/HeaderSimple';

export default function HomePage() {
  return (
    <>
      <HeaderSimple />
      <Welcome />
      <Group justify="center" mt="xl">
            <Button component="a" href="/about">About</Button>
            <Button component="a" href="/projects">Projects</Button>
            <Button component="a" href="https://github.com/adamsbr25">My GitHub</Button>
      </Group>
    </>
  );
}
