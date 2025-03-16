import React, { useState, useEffect } from 'react';
import {
  BarChart3,
  LineChart,
  PieChart,
  Sliders,
  Download,
  HelpCircle,
  ArrowUpRight,
  TrendingUp,
  TrendingDown,
  User,
  Server,
  MessageSquare,
  CheckCircle,
  AlertTriangle,
  Loader2,
  Copy,
  Check,
  X,
  Plus,
  Edit,
  Trash2,
  Search,
  ChevronDown,
  ChevronUp,
  MoreHorizontal,
  ExternalLink,
  Settings,
  Key,
  Shield,
  Bell,
  Moon,
  Sun,
  LayoutDashboard,
  FileText,
  CreditCard,
  Users,
  Code,
  Book,
  Mail,
  LogOut,
  ArrowLeft,
  ArrowRight,
  AlertOctagon,
  RefreshCw,
  Upload,
  Save,
  Send,
  List,
  Grid,
  Calendar,
  Clock,
  MapPin,
  Image,
  Video,
  File,
  Folder,
  Archive,
  Share2,
  Printer,
  ZoomIn,
  ZoomOut,
  Eye,
  EyeOff,
  Unlock,
  Lock,
  Tag,
  ShoppingCart,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Flag,
  Bookmark,
  Link2,
  Paperclip,
  AtSign,
  Hash,
  Phone,
  Wifi,
  Bluetooth,
  BatteryCharging,
  Volume1,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  Navigation,
  Compass,
  Globe,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  SunCloud,
  MoonCloud,
  Wind,
  Umbrella,
  Thermometer,
  Droplet,
  Waves,
  Tree,
  Mountain,
  Park,
  Building,
  Home,
  Road,
  Map,
  Bus,
  Car,
  Truck,
  Motorcycle,
  Bicycle,
  Train,
  Ship,
  Plane,
  Rocket,
  Star,
  Award,
  Gift,
  Trophy,
  Puzzle,
  Dice1,
  Dice2,
  Dice3,
  Dice4,
  Dice5,
  Dice6,
  Keyboard,
  MousePointer,
  Disc,
  Headphones,
  Music,
  Film,
  Tv,
  Gamepad2,
  Vr,
  PenTool,
  Palette,
  Scissors,
  CopyPlus,
  Layout,
  Split,
  Merge,
  Columns,
  Rows,
  Grid2X2,
  Grid3X3,
  Maximize2,
  Minimize2,
  Move,
  DownloadCloud,
  UploadCloud,
  PlusCircle,
  MinusCircle,
  Info,
  AlertCircle,
  CheckCircle2,
  XCircle,
  QuestionMarkCircle,
  ShieldCheck,
  ShieldAlert,
  Zap,
  Flame,
  Package,
  Box,
  GitBranch,
  GitCommit,
  GitMerge,
  GitPullRequest,
  Github,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Dribbble,
  Behance,
  Twitch,
  Discord,
  Slack,
  Reddit,
  Medium,
  Spotify,
  Apple,
  Android,
  Windows,
  Linux,
  Chrome,
  Firefox,
  Safari,
  Ie,
  Edge,
  Opera,
  Brave,
  Vivaldi,
  Tor,
  Yandex,
  DuckDuckGo,
  Ecosia,
  Startpage,
  Qwant,
  Searx,
  Baidu,
  Sogou,
  Naver,
  Daum,
  Yippy,
  Swisscows,
  Gibiru,
  Disconnect,
  Ixquick,
  Metager,
  Mojeek,
  Oscobo,
  Peekier,
  Privatelee,
  SearchEncrypt,
  YaCy,
  ZetaAlpha,
  Etools,
  Exalead,
  Gigablast,
  Lycos,
  Mamma,
  Search,
  WebCrawler,
  WiseNut,
  WolframAlpha,
  Entireweb,
  HotBot,
  InfoSpace,
  LookSmart,
  Netscape,
  OpenText,
  Thunderstone,
  WhatUseek,
  WhoWhere,
  WorldWideWeb,
  Yahoo,
  AltaVista,
  AOLSearch,
  Ask,
  Bing,
  Cuil,
  Dogpile,
  Excite,
  Google,
  Jeeves,
  Lygo,
  MSNSearch,
  NetFind,
  NorthernLight,
  SearchCom,
  Snap,
  ArrowDownRight
} from 'lucide-react';

const Dashboard = () => {
  const [data, setData] = useState([
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 200 },
    { name: 'Apr', value: 278 },
    { name: 'May', value: 189 },
    { name: 'Jun', value: 239 },
    { name: 'Jul', value: 349 },
    { name: 'Aug', value: 400 },
    { name: 'Sep', value: 300 },
    { name: 'Oct', value: 200 },
    { name: 'Nov', value: 278 },
    { name: 'Dec', value: 189 },
  ]);

  const [pieData, setPieData] = useState([
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Editor', status: 'Inactive' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'Viewer', status: 'Active' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newUser, setNewUser] = useState({ id: 0, name: '', email: '', role: 'Viewer', status: 'Inactive' });

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      // In a real application, you would fetch data from an API here
    };

    fetchData();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (column: string) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (sortColumn) {
      const order = sortOrder === 'asc' ? 1 : -1;
      if (a[sortColumn] < b[sortColumn]) return -order;
      if (a[sortColumn] > b[sortColumn]) return order;
    }
    return 0;
  });

  const filteredUsers = sortedUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const openModal = (user: any, editing: boolean = false) => {
    setSelectedUser(user);
    setIsEditing(editing);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
    setIsEditing(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setSelectedUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleNewInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setNewUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const saveUser = () => {
    if (selectedUser) {
      const updatedUsers = users.map(user =>
        user.id === selectedUser.id ? selectedUser : user
      );
      setUsers(updatedUsers);
      closeModal();
    }
  };

  const deleteUser = () => {
    if (selectedUser) {
      const updatedUsers = users.filter(user => user.id !== selectedUser.id);
      setUsers(updatedUsers);
      closeModal();
    }
  };

  const openNewUserModal = () => {
    setIsEditing(false);
    setNewUser({ id: users.length + 1, name: '', email: '', role: 'Viewer', status: 'Inactive' });
    setSelectedUser(null);
    setIsModalOpen(true);
  };

  const createUser = () => {
    setUsers([...users, newUser]);
    closeModal();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <div className="bg-white dark:bg-gray-800 shadow rounded-md p-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                <User className="inline-block mr-1" size={20} />
                Users
              </h2>
              <TrendingUp className="text-green-500" size={20} />
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">3,456</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <ArrowUpRight className="inline-block mr-1 text-green-500" size={16} />
              12% increase from last month
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow rounded-md p-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                <Server className="inline-block mr-1" size={20} />
                Servers
              </h2>
              <TrendingDown className="text-red-500" size={20} />
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">128</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <ArrowDownRight className="inline-block mr-1 text-red-500" size={16} />
              3% decrease from last month
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow rounded-md p-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                <MessageSquare className="inline-block mr-1" size={20} />
                Messages
              </h2>
              <TrendingUp className="text-green-500" size={20} />
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">1,245</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <ArrowUpRight className="inline-block mr-1 text-green-500" size={16} />
              8% increase from last month
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <div className="bg-white dark:bg-gray-800 shadow rounded-md p-4">
            <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">Monthly Revenue</h2>
            <div className="h-64 flex items-center justify-center text-gray-400">
              Line Chart Placeholder - Data Visualization Component
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow rounded-md p-4">
            <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">Sales by Category</h2>
            <div className="h-64 flex items-center justify-center text-gray-400">
              Pie Chart Placeholder - Data Visualization Component
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-md p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">User Management</h2>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={openNewUserModal}
            >
              <Plus className="inline-block mr-1" size={16} />
              Add New User
            </button>
          </div>

          <div className="mb-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="text-gray-500 dark:text-gray-400" size={16} />
              </div>
              <input
                type="text"
                placeholder="Search users..."
                className="pl-10 w-full py-2 border rounded-md text-gray-700 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:border-blue-500"
                onChange={handleSearch}
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider dark:bg-gray-600 dark:text-gray-300 dark:border-gray-500"
                    onClick={() => handleSort('name')}
                  >
                    Name
                    {sortColumn === 'name' && (sortOrder === 'asc' ? <ChevronUp className="inline-block ml-1" size={16} /> : <ChevronDown className="inline-block ml-1" size={16} />)}
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider dark:bg-gray-600 dark:text-gray-300 dark:border-gray-500"
                    onClick={() => handleSort('email')}
                  >
                    Email
                    {sortColumn === 'email' && (sortOrder === 'asc' ? <ChevronUp className="inline-block ml-1" size={16} /> : <ChevronDown className="inline-block ml-1" size={16} />)}
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider dark:bg-gray-600 dark:text-gray-300 dark:border-gray-500"
                    onClick={() => handleSort('role')}
                  >
                    Role
                    {sortColumn === 'role' && (sortOrder === 'asc' ? <ChevronUp className="inline-block ml-1" size={16} /> : <ChevronDown className="inline-block ml-1" size={16} />)}
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider dark:bg-gray-600 dark:text-gray-300 dark:border-gray-500"
                    onClick={() => handleSort('status')}
                  >
                    Status
                    {sortColumn === 'status' && (sortOrder === 'asc' ? <ChevronUp className="inline-block ml-1" size={16} /> : <ChevronDown className="inline-block ml-1" size={16} />)}
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider dark:bg-gray-600 dark:text-gray-300 dark:border-gray-500">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map(user => (
                  <tr key={user.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-700 dark:border-gray-600">
                      <p className="text-gray-900 whitespace-no-wrap dark:text-gray-300">{user.name}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-700 dark:border-gray-600">
                      <p className="text-gray-900 whitespace-no-wrap dark:text-gray-300">{user.email}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-700 dark:border-gray-600">
                      <p className="text-gray-900 whitespace-no-wrap dark:text-gray-300">{user.role}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-700 dark:border-gray-600">
                      <span className={`relative inline-block px-3 py-1 font-semibold text-sm rounded-full ${user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} dark:text-gray-300`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-700 dark:border-gray-600">
                      <div className="flex items-center">
                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                          <Edit className="cursor-pointer" size={16} onClick={() => openModal(user, true)} />
                        </div>
                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                          <Trash2 className="cursor-pointer" size={16} onClick={() => openModal(user)} />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="py-2">
            <nav className="block">
              <ul className="flex pl-0 rounded list-none flex-wrap">
                <li>
                  <button
                    className="bg-gray-300 border border-gray-300 text-gray-500 hover:bg-gray-400 hover:text-gray-700 font-bold py-2 px-4 rounded-l"
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Prev
                  </button>
                </li>
                {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, i) => i + 1).map(number => (
                  <li key={number}>
                    <button
                      className={`border border-gray-300 ${currentPage === number ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'} font-bold py-2 px-4`}
                      onClick={() => paginate(number)}
                    >
                      {number}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    className="bg-gray-300 border border-gray-300 text-gray-500 hover:bg-gray-400 hover:text-gray-700 font-bold py-2 px-4 rounded-r"
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === Math.ceil(filteredUsers.length / usersPerPage)}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full dark:bg-gray-800">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 dark:bg-gray-800">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10 dark:bg-gray-700">
                    {isEditing ? <Edit className="h-6 w-6 text-red-600 dark:text-red-500" aria-hidden="true" /> : <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-500" aria-hidden="true" />}
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-300">
                      {isEditing ? 'Edit User' : 'Delete User'}
                    </h3>
                    <div className="mt-2">
                      {isEditing ? (
                        <div>
                          <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                              Name:
                            </label>
                            <input
                              type="text"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500"
                              id="name"
                              name="name"
                              value={selectedUser?.name || ''}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                              Email:
                            </label>
                            <input
                              type="email"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500"
                              id="email"
                              name="email"
                              value={selectedUser?.email || ''}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="mb-4">
                            <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                              Role:
                            </label>
                            <select
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500"
                              id="role"
                              name="role"
                              value={selectedUser?.role || ''}
                              onChange={handleInputChange}
                            >
                              <option>Admin</option>
                              <option>Editor</option>
                              <option>Viewer</option>
                            </select>
                          </div>
                          <div className="mb-4">
                            <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                              Status:
                            </label>
                            <select
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500"
                              id="status"
                              name="status"
                              value={selectedUser?.status || ''}
                              onChange={handleInputChange}
                            >
                              <option>Active</option>
                              <option>Inactive</option>
                            </select>
                          </div>
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Are you sure you want to delete this user?
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse dark:bg-gray-700">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-400"
                  onClick={isEditing ? saveUser : deleteUser}
                >
                  {isEditing ? 'Save' : 'Delete'}
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:bg-gray-600 dark:text-gray-300 dark:border-gray-500 dark:hover:bg-gray-500 dark:focus:ring-indigo-400"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* New User Modal */}
      {isModalOpen && selectedUser === null && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full dark:bg-gray-800">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 dark:bg-gray-800">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10 dark:bg-gray-700">
                    <Plus className="h-6 w-6 text-green-600 dark:text-green-500" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-300">
                      Add New User
                    </h3>
                    <div className="mt-2">
                      <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                          Name:
                        </label>
                        <input
                          type="text"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500"
                          id="name"
                          name="name"
                          value={newUser.name}
                          onChange={handleNewInputChange}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                          Email:
                        </label>
                        <input
                          type="email"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500"
                          id="email"
                          name="email"
                          value={newUser.email}
                          onChange={handleNewInputChange}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                          Role:
                        </label>
                        <select
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500"
                          id="role"
                          name="role"
                          value={newUser.role}
                          onChange={handleNewInputChange}
                        >
                          <option>Admin</option>
                          <option>Editor</option>
                          <option>Viewer</option>
                        </select>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                          Status:
                        </label>
                        <select
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500"
                          id="status"
                          name="status"
                          value={newUser.status}
                          onChange={handleNewInputChange}
                        >
                          <option>Active</option>
                          <option>Inactive</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse dark:bg-gray-700">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-400"
                  onClick={createUser}
                >
                  Create
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:bg-gray-600 dark:text-gray-300 dark:border-gray-500 dark:hover:bg-gray-500 dark:focus:ring-indigo-400"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
