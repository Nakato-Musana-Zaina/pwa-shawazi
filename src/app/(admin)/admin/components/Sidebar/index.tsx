import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import { IoStatsChartSharp } from "react-icons/io5";
import { MdOutlinePayments, MdOutlineSettings } from "react-icons/md";
import { LuUsers2 } from "react-icons/lu";
import { LiaFileContractSolid } from "react-icons/lia";
import { BiLogOut } from "react-icons/bi";
import { HiMenu, HiX } from "react-icons/hi"; 
import { usePathname } from 'next/navigation';

interface SidebarProps {
    setActiveChart: (chartName: string) => void; 
}


const Sidebar: React.FC<SidebarProps> = ({ setActiveChart }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            setShowSidebar(width >= 768);
            setIsOpen(width >= 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const menuItems = [
        { name: 'Dashboard', icon: <IoStatsChartSharp className="w-8 h-8 mr-2"/>, href: '/' },
        { name: 'Agreements', icon: <LiaFileContractSolid className="w-8 h-8 mr-2"/>, href: '/components/AgreementsChart' },
        { name: 'Payments', icon: <MdOutlinePayments className="w-8 h-8 mr-2"/>, href: '/components/TransactionsChart', highlightChart: 'TransactionsChart' },
        { name: 'Users', icon: <LuUsers2 className="w-8 h-8 mr-2"/>, href: '/components/UsersCharts' },
        { name: 'Land Plots', icon: <LuUsers2 className="w-8 h-8 mr-2"/>, href: '/components/SearchLandCard' },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <div className={`fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-4 z-50 ${showSidebar ? 'ml-64' : ''}`}>
                {!showSidebar && (
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isOpen ? (
                            <HiX className="w-8 h-8 text-[#562B00]" />
                        ) : (
                            <HiMenu className="w-8 h-8 text-[#562B00]" />
                        )}
                    </button>
                )}
                <span className="ml-4 text-lg font-semibold text-[#562B00]"></span>
            </div>

           
            <div
                className={`fixed top-0 left-0 h-full bg-white transition-all duration-300 ease-in-out 
                ${showSidebar || isOpen ? 'w-72' : 'w-0'} overflow-hidden border-r border-gray-300 shadow-[4px_0px_10px_-2px_rgba(87,_50,_0,_0.5)] z-40`}
            >
                <div className="flex flex-col h-full">
                    <div className="p-6 text-center">
                       
                        <Image src="/images/shawazilogo.png" alt="Shawazi Logo" width={160} height={160} className="w-[40%] mx-auto mb-4 mt-3" />
                        <h1 className="text-2xl font-bold text-secondary"></h1>
                    </div>
                    <nav className="flex-grow">
                        <ul className="space-y-6 px-6 py-16">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <Link 
                                        href={item.href} 
                                        onClick={() => {
                                            setActiveChart(item.name);
                                            if (item.highlightChart) {
                                                setActiveChart(item.highlightChart); 
                                            }
                                        }} 
                                        className={`flex items-center px-6 py-2 text-[#562B00] hover:bg-secondary-light rounded-lg transition-colors duration-200 ${pathname === item.href ? 'bg-orange-100 text-orange-600' : ''}`}
                                    >
                                        {item.icon}
                                        <span className="text-lg font-medium">{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="mb-10 p-6">
                        <button 
                            onClick={() => setShowSettings(!showSettings)} 
                            className="flex items-center w-full px-6 py-2 text-[#562B00] hover:bg-orange-100 rounded-lg transition-colors duration-200"
                        >
                            <MdOutlineSettings className="w-6 h-6 mr-2" />
                            <span className="text-lg font-medium">Settings</span> 
                        </button>
                        {showSettings && (
                            <div className="mt-2 ml-10">
                                <Link href="/settings" className="block py-1 text-secondary hover:text-secondary transition-colors duration-200">General Settings</Link>
                                <Link href="/logout" className="block py-1 text-primary hover:text-red-600 transition-colors duration-200">
                                    <span className="flex items-center">
                                        <BiLogOut className="w-5 h-5 mr-2" />
                                        Logout
                                    </span>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className={`pt-16 ${showSidebar ? 'ml-72' : ''} transition-all duration-300`}>
               
            </div>
        </div>
    );
};

export default Sidebar;
