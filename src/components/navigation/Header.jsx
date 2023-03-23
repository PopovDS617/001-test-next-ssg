import React from 'react';
import Link from 'next/link';

export const Header = () => {
  return (<header className= '  bg-white sticky-nav justify-between flex align-top items-center'>

<Link href='/' legacyBehavior>
<a   className='top-logo ml-10'> </a>
</Link>
<div className='text-blue-900 hover:text-yellow-400 text-2xl font-bold cursor-pointer mr-10'>

{`(866)678-8505`}
</div>

  </header>)
};

export default Header;
