import React from "react";
import VcsLogo from '@/assets/vcs.png'

import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { PiBagSimpleFill } from "react-icons/pi";
import { MdPeopleAlt } from "react-icons/md";
import { SiFiles } from "react-icons/si";
import { FaCalendarAlt } from "react-icons/fa";


const Sidebar = () => {
  return (
    <aside
      className="w-[120px] bg-blue-950 h-screen text-gray-300"
    >
      <nav className="p-4">
          <Link to='/'><img className="w-24 h-16 mx-auto" src={VcsLogo} alt="vcslogo" /></Link>
        <ul className="flex flex-col items-center mt-8 space-y-2">
          <li>
            <NavLink
              to="/dashboard/home"
              className=" py-2 px-4  flex flex-col items-center"
              activeClassName="bg-gray-700 "
            >
              <FaHome className="text-2xl" />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/jobs"
              className=" py-2 px-4  flex flex-col items-center"
              activeClassName="bg-gray-700 "
            >
              <PiBagSimpleFill className="text-2xl" />
              <span>Jobs</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/candidate"
              className=" py-2 px-4  flex flex-col items-center"
              activeClassName="bg-gray-700 "
            >
              <MdPeopleAlt className="text-2xl" />
              <span>Candidate</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/report"
              className=" py-2 px-4  flex flex-col items-center"
              activeClassName="bg-gray-700 "
            >
              <SiFiles className="text-2xl" />
              <span>Reports</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/calender"
              className=" py-2 px-4  flex flex-col items-center"
              activeClassName="bg-gray-700 "
            >
              <FaCalendarAlt className="text-2xl" />
              <span>Calender</span>
            </NavLink>
          </li>
         
          {/* Add more links as needed */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
