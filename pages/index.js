import Head from 'next/head';
import Counter from '../components/Counter';

export default function Home() {
  return (
    <>
      <div className="container">
        <h2>Home page </h2>
        <Counter />
      </div>
    </>
  );
}
