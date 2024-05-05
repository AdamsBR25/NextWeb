'use client';

// import { useState } from 'react';
import { Container, Group, Burger, useMantineColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMoonStars } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import classes from './HeaderSimple.module.css';

const links = [
  { link: '/', label: 'Home' },
  { link: '/about/', label: 'About' },
  { link: '/projects', label: 'Projects' },
  { link: 'https://github.com/adamsbr25', label: 'GitHub' },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const { toggleColorScheme } = useMantineColorScheme();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Link
          href="/"
          className="link"
        >
          <Image
            src="/apple-touch-icon.png"
            width={28}
            height={28}
            alt="site icon"
          />
        </Link>
        <Group gap={5} visibleFrom="xs">
          {items}
          <IconMoonStars className="toggle" size={22} onClick={() => toggleColorScheme()} />
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
