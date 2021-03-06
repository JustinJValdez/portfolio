import Link from 'next/link';

const NotFound = () => {
  return ( 
    <div className="not-found">
      <h1>Uh-Oh...</h1>
      <h2>This page cannot be found.</h2>
      <h4>Go back to the <Link href="/"><a>Homepage</a></Link></h4>
    </div>
   );
}
export default NotFound;