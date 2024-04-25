import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeaderSimple } from '../components/SimpleHeader/HeaderSimple';

export default function HomePage() {
  return (
    <>
      <HeaderSimple />
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
