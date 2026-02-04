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
    <section className="py-16 bg-white border-t-8 border-gray-200">
      <div className="container mx-auto px-4">
        
        <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800">Client Dashboard Demo</h2>
            <p className="text-gray-500">Preview of the admin panel included in our plans (as seen in screenshots)</p>
        </div>

        {/* UPI Section Clone */}
        <div className="bg-white rounded shadow border border-gray-200 mb-12 max-w-5xl mx-auto">
             <div className="h-1 bg-green-500 w-full rounded-t"></div>
             <div className="p-4 flex justify-between items-center border-b border-gray-100">
                 <h3 className="flex items-center gap-2 text-xl text-gray-700 font-normal">
                    <Smartphone size={20} className="text-gray-600" /> UPI Payment Methods
                 </h3>
                 <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm font-bold flex items-center gap-1">
                    <Plus size={16} /> Add UPI
                 </button>
             </div>
             
             <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                     <thead>
                         <tr>
                             <th className="p-3 border-b text-gray-700 font-bold w-12 text-center">#</th>
                             <th className="p-3 border-b text-gray-700 font-bold">Name</th>
                             <th className="p-3 border-b text-gray-700 font-bold">UPI ID</th>
                             <th className="p-3 border-b text-gray-700 font-bold">Main Account</th>
                             <th className="p-3 border-b text-gray-700 font-bold">Balance</th>
                             <th className="p-3 border-b text-gray-700 font-bold">Action</th>
                         </tr>
                     </thead>
                     <tbody>
                         {upiAccounts.map((acc) => (
                             <tr key={acc.id} className="hover:bg-gray-50">
                                 <td className="p-3 border-b text-center text-gray-600">{acc.id}</td>
                                 <td className="p-3 border-b text-gray-600">{acc.name}</td>
                                 <td className="p-3 border-b text-gray-600">{acc.upiId}</td>
                                 <td className="p-3 border-b text-gray-600">{acc.mainAccount}</td>
                                 <td className="p-3 border-b text-gray-600">{acc.balance}</td>
                                 <td className="p-3 border-b">
                                     <div className="flex gap-1">
                                         <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm flex items-center gap-1 hover:bg-blue-600"><Edit size={14}/> Edit</button>
                                         <button className="bg-red-500 text-white px-3 py-1 rounded text-sm flex items-center gap-1 hover:bg-red-600"><Trash2 size={14}/> Delete</button>
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
        <div className="bg-white rounded shadow border border-orange-500 max-w-5xl mx-auto overflow-hidden">
             <div className="bg-orange-400 p-3 text-white flex justify-between items-center">
                 <h3 className="text-lg font-medium">Sub Accounts (Display Name)</h3>
                 <button className="text-white font-bold flex items-center gap-1 text-sm"><Plus size={16} /> Add</button>
             </div>
             
             <div className="p-4 border-b border-gray-200">
                 <select className="w-full border border-gray-300 rounded p-2 text-gray-600 outline-none">
                     <option>-All Categories-</option>
                 </select>
             </div>

             <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                     <thead>
                         <tr className="bg-gray-50">
                             <th className="p-3 border-b text-gray-800 font-bold w-12 text-center">#</th>
                             <th className="p-3 border-b text-gray-800 font-bold">Sub Account</th>
                             <th className="p-3 border-b text-gray-800 font-bold">Parent Account</th>
                             <th className="p-3 border-b text-gray-800 font-bold">Action</th>
                         </tr>
                     </thead>
                     <tbody>
                         {subAccounts.map((acc) => (
                             <tr key={acc.id} className="hover:bg-gray-50">
                                 <td className="p-3 border-b text-center text-gray-600">{acc.id}</td>
                                 <td className="p-3 border-b text-gray-600">{acc.subAccount}</td>
                                 <td className="p-3 border-b text-gray-600">{acc.parentAccount}</td>
                                 <td className="p-3 border-b">
                                     <div className="flex gap-1">
                                         <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm flex items-center gap-1 hover:bg-blue-600"><Edit size={14}/> Edit</button>
                                         <button className="bg-red-500 text-white px-3 py-1 rounded text-sm flex items-center gap-1 hover:bg-red-600"><Trash2 size={14}/> Delete</button>
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