import Image from 'next/image';

const Photo = () => {
  return ( 
    <>
      <Image src='/cat.jpg' width={800} height={400} />
    </>
   );
}
 
export default Photo;