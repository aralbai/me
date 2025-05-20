// @flow strict

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

function ProjectCard({ project }) {

  return (
    <div className="from-[#0d1224]  border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>
      </div>

      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 b">
        <div className='flex flex-col md:flex-row md:gap-4 md:text-center xl:text-left'>
          {/* PROJECT IMAGE  */}
          <div className='md:w-1/2 w-full flex justify-center'>
            <Image src={project.image} alt='' width={500} height={500} className='object-contain'/>
          </div>

          {/* PROJECT INFO  */}
          <div className='md:w-1/2 w-full mt-4 md:mt-0 flex flex-col gap-4'>
          <h1 className='text-2xl uppercase'>{project.name}</h1>

          <p className='text-lg text-justify'>{project.description}</p>

          <div>
            <p className='text-xl uppercase mt-8'>Used technologies:</p>
            <div className='flex gap-4 mt-4 flex-wrap md:justify-center xl:justify-start'>
              {project.tools.map(tool => (
                <p className='border border-white border-solid py-1  px-2 rounded-md' key={tool}>{tool}</p>
              ))}
            </div>
          </div>
          <Link href={project.demo} target='_blank' className='mt-8 text-xl text-[#8064C6]'>{project.url}</Link></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;