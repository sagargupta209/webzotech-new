import React from 'react';
import { Smartphone, Plus, Edit, Trash2 } from 'lucide-react';
import { UPIAccount, SubAccount } from '../types';

// Mock data based on screenshot
const upiAccounts: UPIAccount[] = [
  { id: 1, name: 'Rahul', upiId: 'upi@asl', mainAccount: 'Sagar', balance: '₹ 0.00' },
];

const subAccounts: SubAccount[] = [
    { id: 1, subAccount: 'rahul', parentAccount: '-' },
    { id: 2, subAccount: 'deepak', parentAccount: '-' },
];

const AdminDemo: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 border-t-8 border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Client Dashboard Demo</h2>
            <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Preview of the powerful admin panel included in all our plans. Easily manage your payments and users without any technical knowledge.</p>
        </div>

        {/* UPI Section Clone */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 mb-12 max-w-5xl mx-auto overflow-hidden animate-fade-in-up">
             <div className="h-1.5 bg-green-500 w-full"></div>
             <div className="p-5 md:p-6 flex flex-col sm:flex-row justify-between items-center border-b border-gray-100 dark:border-gray-700 gap-4">
                 <h3 className="flex items-center gap-3 text-xl text-gray-700 dark:text-gray-200 font-semibold">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg text-green-600">
                        <Smartphone size={22} />
                    </div>
                    UPI Payment Methods
                 </h3>
                 <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-green-500/20 transition-all hover:-translate-y-1">
                    <Plus size={18} /> Add UPI
                 </button>
             </div>
             
             <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                     <thead>
                         <tr className="bg-gray-50 dark:bg-gray-700/50">
                             <th className="p-4 border-b dark:border-gray-700 text-gray-700 dark:text-gray-200 font-bold w-12 text-center">#</th>
                             <th className="p-4 border-b dark:border-gray-700 text-gray-700 dark:text-gray-200 font-bold">Name</th>
                             <th className="p-4 border-b dark:border-gray-700 text-gray-700 dark:text-gray-200 font-bold">UPI ID</th>
                             <th className="p-4 border-b dark:border-gray-700 text-gray-700 dark:text-gray-200 font-bold">Main Account</th>
                             <th className="p-4 border-b dark:border-gray-700 text-gray-700 dark:text-gray-200 font-bold">Balance</th>
                             <th className="p-4 border-b dark:border-gray-700 text-gray-700 dark:text-gray-200 font-bold">Action</th>
                         </tr>
                     </thead>
                     <tbody>
                         {upiAccounts.map((acc) => (
                             <tr key={acc.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                                 <td className="p-4 border-b dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">{acc.id}</td>
                                 <td className="p-4 border-b dark:border-gray-700 text-gray-600 dark:text-gray-400 font-medium">{acc.name}</td>
                                 <td className="p-4 border-b dark:border-gray-700 text-gray-600 dark:text-gray-400">{acc.upiId}</td>
                                 <td className="p-4 border-b dark:border-gray-700 text-gray-600 dark:text-gray-400">{acc.mainAccount}</td>
                                 <td className="p-4 border-b dark:border-gray-700 text-gray-600 dark:text-gray-400 font-bold text-green-600">{acc.balance}</td>
                                 <td className="p-4 border-b dark:border-gray-700">
                                     <div className="flex gap-2">
                                         <button className="bg-blue-500 text-white px-3 py-1.5 rounded-lg text-sm flex items-center gap-1.5 hover:bg-blue-600 transition-colors"><Edit size={14}/> Edit</button>
                                         <button className="bg-red-500 text-white px-3 py-1.5 rounded-lg text-sm flex items-center gap-1.5 hover:bg-red-600 transition-colors"><Trash2 size={14}/> Delete</button>
                                     </div>
                                 </td>
                             </tr>
                         ))}
                     </tbody>
                 </table>
             </div>
             <div className="h-4"></div>
        </div>

        {/* Sub Accounts Section Clone */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-orange-500 dark:border-orange-500/50 max-w-5xl mx-auto overflow-hidden animate-fade-in-up delay-200">
             <div className="bg-orange-500 p-4 md:p-5 text-white flex justify-between items-center">
                 <h3 className="text-xl font-bold flex items-center gap-2">
                    <span className="bg-white/20 p-1.5 rounded-lg">📋</span> Sub Accounts
                 </h3>
                 <button className="bg-white/10 hover:bg-white/20 text-white font-bold px-4 py-2 rounded-xl flex items-center gap-2 text-sm transition-all">
                    <Plus size={18} /> Add New
                 </button>
             </div>
             
             <div className="p-5 border-b border-gray-100 dark:border-gray-700 flex flex-col md:flex-row gap-4 items-center">
                 <span className="text-sm font-bold text-gray-500 dark:text-gray-400 shrink-0">Filter by Category:</span>
                 <select className="flex-1 max-w-xs bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-3 text-gray-700 dark:text-gray-200 outline-none focus:ring-2 focus:ring-orange-200 transition-all">
                     <option>- All Categories -</option>
                     <option>Business</option>
                     <option>Personal</option>
                 </select>
             </div>

             <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                     <thead>
                         <tr className="bg-gray-50 dark:bg-gray-700/50">
                             <th className="p-4 border-b dark:border-gray-700 text-gray-800 dark:text-gray-200 font-bold w-12 text-center">#</th>
                             <th className="p-4 border-b dark:border-gray-700 text-gray-800 dark:text-gray-200 font-bold">Sub Account</th>
                             <th className="p-4 border-b dark:border-gray-700 text-gray-800 dark:text-gray-200 font-bold">Parent Account</th>
                             <th className="p-4 border-b dark:border-gray-700 text-gray-800 dark:text-gray-200 font-bold">Action</th>
                         </tr>
                     </thead>
                     <tbody>
                         {subAccounts.map((acc) => (
                             <tr key={acc.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                                 <td className="p-4 border-b dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">{acc.id}</td>
                                 <td className="p-4 border-b dark:border-gray-700 text-gray-600 dark:text-gray-400 font-medium">{acc.subAccount}</td>
                                 <td className="p-4 border-b dark:border-gray-700 text-gray-600 dark:text-gray-400">{acc.parentAccount}</td>
                                 <td className="p-4 border-b dark:border-gray-700">
                                     <div className="flex gap-2">
                                         <button className="bg-blue-500 text-white px-3 py-1.5 rounded-lg text-sm flex items-center gap-1.5 hover:bg-blue-600 transition-colors"><Edit size={14}/> Edit</button>
                                         <button className="bg-red-500 text-white px-3 py-1.5 rounded-lg text-sm flex items-center gap-1.5 hover:bg-red-600 transition-colors"><Trash2 size={14}/> Delete</button>
                                     </div>
                                 </td>
                             </tr>
                         ))}
                     </tbody>
                 </table>
             </div>
        </div>

      </div>
    </section>
  );
};

export default AdminDemo;