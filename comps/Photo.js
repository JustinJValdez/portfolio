import Image from 'next/image';

const Photo = () => {
  return ( 
    <>
      <Image src='/cat.jpg' width={2000} height={1100} />
    </>
   );
}
 
export default Photo;