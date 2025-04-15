import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import SidebarLinkGroup from './SidebarLinkGroup';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <NavLink to="/">
          <div className="flex items-center">
            <div className="rounded-lg bg-primary p-2">
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 21C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V19C19 20.1046 18.1046 21 17 21H7Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M9 7L15 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="ml-2 text-2xl font-bold text-white">
              AgroB2B Hub
            </span>
          </div>
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              Meni
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/' || pathname.includes('dashboard')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          (pathname === '/' ||
                            pathname.includes('dashboard')) &&
                          'bg-graydark dark:bg-meta-4'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.10322 0.956299H2.53135C1.5751 0.956299 0.787598 1.7438 0.787598 2.70005V6.27192C0.787598 7.22817 1.5751 8.01567 2.53135 8.01567H6.10322C7.05947 8.01567 7.84697 7.22817 7.84697 6.27192V2.72817C7.8751 1.7438 7.0876 0.956299 6.10322 0.956299ZM6.60947 6.30005C6.60947 6.5813 6.38447 6.8063 6.10322 6.8063H2.53135C2.2501 6.8063 2.0251 6.5813 2.0251 6.30005V2.72817C2.0251 2.44692 2.2501 2.22192 2.53135 2.22192H6.10322C6.38447 2.22192 6.60947 2.44692 6.60947 2.72817V6.30005Z"
                            fill=""
                          />
                          <path
                            d="M15.4689 0.956299H11.8971C10.9408 0.956299 10.1533 1.7438 10.1533 2.70005V6.27192C10.1533 7.22817 10.9408 8.01567 11.8971 8.01567H15.4689C16.4252 8.01567 17.2127 7.22817 17.2127 6.27192V2.72817C17.2127 1.7438 16.4252 0.956299 15.4689 0.956299ZM15.9752 6.30005C15.9752 6.5813 15.7502 6.8063 15.4689 6.8063H11.8971C11.6158 6.8063 11.3908 6.5813 11.3908 6.30005V2.72817C11.3908 2.44692 11.6158 2.22192 11.8971 2.22192H15.4689C15.7502 2.22192 15.9752 2.44692 15.9752 2.72817V6.30005Z"
                            fill=""
                          />
                          <path
                            d="M6.10322 9.92822H2.53135C1.5751 9.92822 0.787598 10.7157 0.787598 11.672V15.2438C0.787598 16.2001 1.5751 16.9876 2.53135 16.9876H6.10322C7.05947 16.9876 7.84697 16.2001 7.84697 15.2438V11.7001C7.8751 10.7157 7.0876 9.92822 6.10322 9.92822ZM6.60947 15.272C6.60947 15.5532 6.38447 15.7782 6.10322 15.7782H2.53135C2.2501 15.7782 2.0251 15.5532 2.0251 15.272V11.7001C2.0251 11.4188 2.2501 11.1938 2.53135 11.1938H6.10322C6.38447 11.1938 6.60947 11.4188 6.60947 11.7001V15.272Z"
                            fill=""
                          />
                          <path
                            d="M15.4689 9.92822H11.8971C10.9408 9.92822 10.1533 10.7157 10.1533 11.672V15.2438C10.1533 16.2001 10.9408 16.9876 11.8971 16.9876H15.4689C16.4252 16.9876 17.2127 16.2001 17.2127 15.2438V11.7001C17.2127 10.7157 16.4252 9.92822 15.4689 9.92822ZM15.9752 15.272C15.9752 15.5532 15.7502 15.7782 15.4689 15.7782H11.8971C11.6158 15.7782 11.3908 15.5532 11.3908 15.272V11.7001C11.3908 11.4188 11.6158 11.1938 11.8971 11.1938H15.4689C15.7502 11.1938 15.9752 11.4188 15.9752 11.7001V15.272Z"
                            fill=""
                          />
                        </svg>
                        Početna
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && 'rotate-180'
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </NavLink>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/dashboard/current"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Cene Proizvoda
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/dashboard"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Statistika Izvoza 2024
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/dashboard/transactions"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Izvoz pregled
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Dashboard --> */}
              <li>
                <NavLink
                  to="/sell-offers"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('marketplace') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 18C15.89 18 15 18.89 15 20C15 21.11 15.89 22 17 22C18.11 22 19 21.11 19 20C19 18.89 18.11 18 17 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.11 5.89 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 21.11 5.89 22 7 22C8.11 22 9 21.11 9 20C9 18.89 8.11 18 7 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  Prodaja Ponuda
                </NavLink>
              </li>
              {/* New Nav Item for Creating Sell Offer */}
              <li>
                <NavLink
                  to="/sell-offers/new"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('sell-offers/create') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1v16M1 9h16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Oglasi Prodaju
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/buy-offers"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('marketplace') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 9H13V6H16V4H13V1H11V4H8V6H11V9M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18M17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18ZM7.2 14.63L7.17 14.75C7.17 14.89 7.28 15 7.42 15H19V17H7C5.89 17 5 16.1 5 15C5 14.65 5.09 14.32 5.24 14.04L6.6 11.59L3 4H1V2H4.27L5.21 4H20C20.55 4 21 4.45 21 5C21 5.17 20.95 5.34 20.88 5.48L17.3 11.97C16.96 12.59 16.3 13 15.55 13H8.1L7.2 14.63Z"
                      fill="currentColor"
                    />
                  </svg>
                  Kupovina Ponuda
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/buy-offers/new"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('buy-offers/new') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 2H6C4.89 2 4 2.89 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M18 20H6V4H13V9H18V20M15 13H11V11H9V13H5V15H9V17H11V15H15V13Z"
                      fill="currentColor"
                    />
                  </svg>
                  Oglasi Kupovinu
                </NavLink>
              </li>
              {/* <!-- Menu Item Calendar --> */}

              {/* <!-- Menu Item Profile --> */}
              <li>
                <NavLink
                  to="/profile"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('profile') && 'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.0002 7.79065C11.0814 7.79065 12.7689 6.1594 12.7689 4.1344C12.7689 2.1094 11.0814 0.478149 9.0002 0.478149C6.91895 0.478149 5.23145 2.1094 5.23145 4.1344C5.23145 6.1594 6.91895 7.79065 9.0002 7.79065ZM9.0002 1.7719C10.3783 1.7719 11.5033 2.84065 11.5033 4.16252C11.5033 5.4844 10.3783 6.55315 9.0002 6.55315C7.62207 6.55315 6.49707 5.4844 6.49707 4.16252C6.49707 2.84065 7.62207 1.7719 9.0002 1.7719Z"
                      fill=""
                    />
                    <path
                      d="M10.8283 9.05627H7.17207C4.16269 9.05627 1.71582 11.5313 1.71582 14.5406V16.875C1.71582 17.2125 1.99707 17.5219 2.3627 17.5219C2.72832 17.5219 3.00957 17.2407 3.00957 16.875V14.5406C3.00957 12.2344 4.89394 10.3219 7.22832 10.3219H10.8564C13.1627 10.3219 15.0752 12.2063 15.0752 14.5406V16.875C15.0752 17.2125 15.3564 17.5219 15.7221 17.5219C16.0877 17.5219 16.3689 17.2407 16.3689 16.875V14.5406C16.2846 11.5313 13.8377 9.05627 10.8283 9.05627Z"
                      fill=""
                    />
                  </svg>
                  Profil
                </NavLink>
              </li>
              {/*<SidebarLinkGroup*/}
              {/*    activeCondition={*/}
              {/*        pathname === '/pages' || pathname.includes('pages')*/}
              {/*    }*/}
              {/*>*/}
              {/*  {(handleClick, open) => {*/}
              {/*    return (*/}
              {/*        <React.Fragment>*/}
              {/*          <NavLink*/}
              {/*              to="#"*/}
              {/*              className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${*/}
              {/*                  (pathname === '/pages' ||*/}
              {/*                      pathname.includes('pages')) &&*/}
              {/*                  'bg-graydark dark:bg-meta-4'*/}
              {/*              }`}*/}
              {/*              onClick={(e) => {*/}
              {/*                e.preventDefault();*/}
              {/*                sidebarExpanded*/}
              {/*                    ? handleClick()*/}
              {/*                    : setSidebarExpanded(true);*/}
              {/*              }}*/}
              {/*          >*/}
              {/*            <svg*/}
              {/*                className="fill-current"*/}
              {/*                width="16"*/}
              {/*                height="18"*/}
              {/*                viewBox="0 0 16 18"*/}
              {/*                fill="none"*/}
              {/*                xmlns="http://www.w3.org/2000/svg"*/}
              {/*            >*/}
              {/*              <path*/}
              {/*                  d="M13.2875 0.506226H2.7125C1.75625 0.506226 0.96875 1.29373 0.96875 2.24998V15.75C0.96875 16.7062 1.75625 17.5219 2.74063 17.5219H13.3156C14.2719 17.5219 15.0875 16.7344 15.0875 15.75V2.24998C15.0313 1.29373 14.2438 0.506226 13.2875 0.506226ZM13.7656 15.75C13.7656 16.0312 13.5406 16.2562 13.2594 16.2562H2.7125C2.43125 16.2562 2.20625 16.0312 2.20625 15.75V2.24998C2.20625 1.96873 2.43125 1.74373 2.7125 1.74373H13.2875C13.5688 1.74373 13.7938 1.96873 13.7938 2.24998V15.75H13.7656Z"*/}
              {/*                  fill=""*/}
              {/*              />*/}
              {/*              <path*/}
              {/*                  d="M11.7965 2.6156H8.73086C8.22461 2.6156 7.80273 3.03748 7.80273 3.54373V7.25623C7.80273 7.76248 8.22461 8.18435 8.73086 8.18435H11.7965C12.3027 8.18435 12.7246 7.76248 12.7246 7.25623V3.5156C12.6965 3.03748 12.3027 2.6156 11.7965 2.6156ZM11.4309 6.8906H9.06836V3.88123H11.4309V6.8906Z"*/}
              {/*                  fill=""*/}
              {/*              />*/}
              {/*              <path*/}
              {/*                  d="M3.97773 4.35938H6.03086C6.36836 4.35938 6.67773 4.07812 6.67773 3.7125C6.67773 3.34687 6.39648 3.09375 6.03086 3.09375H3.94961C3.61211 3.09375 3.30273 3.375 3.30273 3.74063C3.30273 4.10625 3.61211 4.35938 3.97773 4.35938Z"*/}
              {/*                  fill=""*/}
              {/*              />*/}
              {/*              <path*/}
              {/*                  d="M3.97773 7.9312H6.03086C6.36836 7.9312 6.67773 7.64995 6.67773 7.28433C6.67773 6.9187 6.39648 6.63745 6.03086 6.63745H3.94961C3.61211 6.63745 3.30273 6.9187 3.30273 7.28433C3.30273 7.64995 3.61211 7.9312 3.97773 7.9312Z"*/}
              {/*                  fill=""*/}
              {/*              />*/}
              {/*              <path*/}
              {/*                  d="M12.0789 10.2374H3.97891C3.64141 10.2374 3.33203 10.5187 3.33203 10.8843C3.33203 11.2499 3.61328 11.5312 3.97891 11.5312H12.0789C12.4164 11.5312 12.7258 11.2499 12.7258 10.8843C12.7258 10.5187 12.4164 10.2374 12.0789 10.2374Z"*/}
              {/*                  fill=""*/}
              {/*              />*/}
              {/*              <path*/}
              {/*                  d="M12.0789 13.8093H3.97891C3.64141 13.8093 3.33203 14.0906 3.33203 14.4562C3.33203 14.8218 3.61328 15.1031 3.97891 15.1031H12.0789C12.4164 15.1031 12.7258 14.8218 12.7258 14.4562C12.7258 14.0906 12.4164 13.8093 12.0789 13.8093Z"*/}
              {/*                  fill=""*/}
              {/*              />*/}
              {/*            </svg>*/}
              {/*            Pages*/}
              {/*            <svg*/}
              {/*                className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${*/}
              {/*                    open && 'rotate-180'*/}
              {/*                }`}*/}
              {/*                width="20"*/}
              {/*                height="20"*/}
              {/*                viewBox="0 0 20 20"*/}
              {/*                fill="none"*/}
              {/*                xmlns="http://www.w3.org/2000/svg"*/}
              {/*            >*/}
              {/*              <path*/}
              {/*                  fillRule="evenodd"*/}
              {/*                  clipRule="evenodd"*/}
              {/*                  d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"*/}
              {/*                  fill=""*/}
              {/*              />*/}
              {/*            </svg>*/}
              {/*          </NavLink>*/}
              {/*          /!* <!-- Dropdown Menu Start --> *!/*/}
              {/*          <div*/}
              {/*              className={`translate transform overflow-hidden ${*/}
              {/*                  !open && 'hidden'*/}
              {/*              }`}*/}
              {/*          >*/}
              {/*            <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">*/}
              {/*              <li>*/}
              {/*                <NavLink*/}
              {/*                    to="/pages/settings"*/}
              {/*                    className={({isActive}) =>*/}
              {/*                        'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +*/}
              {/*                        (isActive && '!text-white')*/}
              {/*                    }*/}
              {/*                >*/}
              {/*                  Settings*/}
              {/*                </NavLink>*/}
              {/*              </li>*/}
              {/*              <li>*/}
              {/*                <NavLink*/}
              {/*                    to="/pages/file-manager"*/}
              {/*                    className={({isActive}) =>*/}
              {/*                        'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +*/}
              {/*                        (isActive && '!text-white')*/}
              {/*                    }*/}
              {/*                >*/}
              {/*                  File Manager*/}
              {/*                  <span*/}
              {/*                      className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">*/}
              {/*                  Pro*/}
              {/*                </span>*/}
              {/*                </NavLink>*/}
              {/*              </li>*/}
              {/*              <li>*/}
              {/*                <NavLink*/}
              {/*                    to="/pages/data-tables"*/}
              {/*                    className={({isActive}) =>*/}
              {/*                        'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +*/}
              {/*                        (isActive && '!text-white')*/}
              {/*                    }*/}
              {/*                >*/}
              {/*                  Data Tables*/}
              {/*                  <span*/}
              {/*                      className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">*/}
              {/*                  Pro*/}
              {/*                </span>*/}
              {/*                </NavLink>*/}
              {/*              </li>*/}
              {/*              <li>*/}
              {/*                <NavLink*/}
              {/*                    to="/pages/pricing-tables"*/}
              {/*                    className={({isActive}) =>*/}
              {/*                        'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +*/}
              {/*                        (isActive && '!text-white')*/}
              {/*                    }*/}
              {/*                >*/}
              {/*                  Pricing Tables*/}
              {/*                  <span*/}
              {/*                      className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">*/}
              {/*                  Pro*/}
              {/*                </span>*/}
              {/*                </NavLink>*/}
              {/*              </li>*/}
              {/*              <li>*/}
              {/*                <NavLink*/}
              {/*                    to="/pages/error-page"*/}
              {/*                    className={({isActive}) =>*/}
              {/*                        'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +*/}
              {/*                        (isActive && '!text-white')*/}
              {/*                    }*/}
              {/*                >*/}
              {/*                  Error Page*/}
              {/*                  <span*/}
              {/*                      className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">*/}
              {/*                  Pro*/}
              {/*                </span>*/}
              {/*                </NavLink>*/}
              {/*              </li>*/}
              {/*              <li>*/}
              {/*                <NavLink*/}
              {/*                    to="/pages/faq"*/}
              {/*                    className={({isActive}) =>*/}
              {/*                        'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +*/}
              {/*                        (isActive && '!text-white')*/}
              {/*                    }*/}
              {/*                >*/}
              {/*                  Faq's*/}
              {/*                  <span*/}
              {/*                      className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">*/}
              {/*                  Pro*/}
              {/*                </span>*/}
              {/*                </NavLink>*/}
              {/*              </li>*/}
              {/*              <li>*/}
              {/*                <NavLink*/}
              {/*                    to="/pages/team"*/}
              {/*                    className={({isActive}) =>*/}
              {/*                        'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +*/}
              {/*                        (isActive && '!text-white')*/}
              {/*                    }*/}
              {/*                >*/}
              {/*                  Teams*/}
              {/*                  <span*/}
              {/*                      className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">*/}
              {/*                  Pro*/}
              {/*                </span>*/}
              {/*                </NavLink>*/}
              {/*              </li>*/}
              {/*              <li>*/}
              {/*                <NavLink*/}
              {/*                    to="/pages/terms-conditions"*/}
              {/*                    className={({isActive}) =>*/}
              {/*                        'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +*/}
              {/*                        (isActive && '!text-white')*/}
              {/*                    }*/}
              {/*                >*/}
              {/*                  Terms & Conditions*/}
              {/*                  <span*/}
              {/*                      className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">*/}
              {/*                  Pro*/}
              {/*                </span>*/}
              {/*                </NavLink>*/}
              {/*              </li>*/}
              {/*              <li>*/}
              {/*                <NavLink*/}
              {/*                    to="/pages/mail-success"*/}
              {/*                    className={({isActive}) =>*/}
              {/*                        'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +*/}
              {/*                        (isActive && '!text-white')*/}
              {/*                    }*/}
              {/*                >*/}
              {/*                  Mail Success*/}
              {/*                  <span*/}
              {/*                      className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">*/}
              {/*                  Pro*/}
              {/*                </span>*/}
              {/*                </NavLink>*/}
              {/*              </li>*/}
              {/*            </ul>*/}
              {/*          </div>*/}
              {/*          /!* <!-- Dropdown Menu End --> *!/*/}
              {/*        </React.Fragment>*/}
              {/*    );*/}
              {/*  }}*/}
              {/*</SidebarLinkGroup>*/}
              {/* <!-- Menu Item Pages --> */}
            </ul>
          </div>

          {/* <!-- Support Group --> */}

          {/* <!-- Others Group --> */}
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
