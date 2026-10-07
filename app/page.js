import Link from 'next/link';
import Counter from './components/Counter';
import Message from './components/Message';

export default function Home() {
  return (
    <main>
      <h1>Tere</h1>
      <p>Väga cool</p>

      <Link href="/about">Tutvustus</Link>

      <Counter />
      <Message />
    </main>
  );
}