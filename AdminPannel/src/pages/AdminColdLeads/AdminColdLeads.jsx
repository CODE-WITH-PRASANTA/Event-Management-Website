import React, { useEffect, useState } from "react";
import API from "../../api/axios";
import { FaTrash } from "react-icons/fa";

const AdminColdLeads = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    const res = await API.get("/leads");
    setLeads(res.data.data || []);
  };

  const updateStatus = async (id, status) => {
    await API.patch(`/leads/${id}`, { status });
    fetchLeads();
  };

  const deleteLead = async (id) => {
    if (!window.confirm("Delete this lead?")) return;
    await API.delete(`/leads/${id}`);
    fetchLeads();
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6">
        Consultation Leads
      </h2>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden lg:block overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Service</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead) => (
              <tr key={lead._id} className="border-b hover:bg-gray-50">
                <td className="p-3">{lead.fullName}</td>
                <td>{lead.email}</td>
                <td>{lead.phone}</td>
                <td>{lead.service}</td>

                <td>
                  <select
                    value={lead.status}
                    onChange={(e) =>
                      updateStatus(lead._id, e.target.value)
                    }
                    className="border p-1 rounded text-xs"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="converted">Converted</option>
                  </select>
                </td>

                <td>
                  <button
                    onClick={() => deleteLead(lead._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {!leads.length && (
          <p className="text-gray-400 text-center py-6">
            No leads yet.
          </p>
        )}
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="lg:hidden space-y-4">
        {leads.map((lead) => (
          <div
            key={lead._id}
            className="bg-white shadow rounded-lg p-4 space-y-3"
          >
            <div>
              <p className="text-xs text-gray-500">Name</p>
              <p className="font-semibold">{lead.fullName}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p>{lead.email}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Phone</p>
              <p>{lead.phone}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Service</p>
              <p>{lead.service}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500 mb-1">Status</p>
              <select
                value={lead.status}
                onChange={(e) =>
                  updateStatus(lead._id, e.target.value)
                }
                className="border p-2 rounded w-full text-sm"
              >
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="converted">Converted</option>
              </select>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => deleteLead(lead._id)}
                className="text-red-500 text-lg"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}

        {!leads.length && (
          <p className="text-gray-400 text-center">
            No leads yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default AdminColdLeads;