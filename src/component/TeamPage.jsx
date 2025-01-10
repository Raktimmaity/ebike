import React from 'react';
import raktim from '../assets/raktim.png';
import soumyadip from '../assets/soumyadip.jpg';
import risav from '../assets/risav.jpg';
import pooja from '../assets/pooja.jpg';

const TeamPage = () => {
  return (
    <>
      <section className="w-full bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto p-5">
          <h1 className="text-center text-4xl font-bold text-zinc-700 mb-10">Meet Our Team</h1>
          <div className="grid grid-cols-1 gap-10">
            {/* Team Member 1 */}
            <div className="w-full bg-white shadow-xl p-5 text-center rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <img src={raktim} alt="Member 1" className="rounded-full w-32 h-32 mx-auto mb-5 border-2 border-blue-600 p-1"/>
              <p className="font-bold text-zinc-700 text-lg">Raktim Maity</p>
              <p className="text-zinc-700">Web Developer</p>
            </div>
            {/* Team Member 2 */}
            <div className="w-full bg-white shadow-xl p-5 text-center rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <img src={soumyadip} alt="Member 2" className="rounded-full w-32 h-32 mx-auto mb-5 border-2 border-blue-600 p-1"/>
              <p className="font-bold text-zinc-700 text-lg">Soumyadip Maity</p>
              <p className="text-zinc-700">Data Analyst</p>
            </div>
            {/* Team Member 3 */}
            <div className="w-full bg-white shadow-xl p-5 text-center rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <img src={risav} alt="Member 3" className="rounded-full w-32 h-32 mx-auto mb-5 border-2 border-blue-600 p-1"/>
              <p className="font-bold text-zinc-700 text-lg">Risav Chatterjee</p>
              <p className="text-zinc-700">Database Administrator</p>
            </div>
            {/* Team Member 4 */}
            <div className="w-full bg-white shadow-xl p-5 text-center rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <img src={pooja} alt="Member 4" className="rounded-full w-32 h-32 mx-auto mb-5 border-2 border-blue-600 p-1"/>
              <p className="font-bold text-zinc-700 text-lg">Pooja Maity</p>
              <p className="text-zinc-700">Developer</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamPage;
