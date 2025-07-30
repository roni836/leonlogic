'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/libs/supabase';

interface CalculatorResult {
  id: string;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  message: string | null;
  selections: any;
  estimated_price: number;
  status: string;
  created_at: string;
  admin_notes: string | null;
  ip_address: string | null;
  user_agent: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  source: string;
}

export default function CalculatorResultsPage() {
  const [results, setResults] = useState<CalculatorResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedResult, setSelectedResult] = useState<CalculatorResult | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [utmFilter, setUtmFilter] = useState('all');

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('calculator_results')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching calculator results:', error);
      } else {
        setResults(data || []);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('calculator_results')
        .update({ status })
        .eq('id', id);

      if (error) {
        console.error('Error updating status:', error);
      } else {
        fetchResults();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const updateNotes = async (id: string, notes: string) => {
    try {
      const { error } = await supabase
        .from('calculator_results')
        .update({ admin_notes: notes })
        .eq('id', id);

      if (error) {
        console.error('Error updating notes:', error);
      } else {
        fetchResults();
        setShowModal(false);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const filteredResults = results.filter(result => {
    const matchesStatus = statusFilter === 'all' || result.status === statusFilter;
    const matchesSearch = 
      result.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (result.company && result.company.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (result.phone && result.phone.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesUtm = utmFilter === 'all' || 
      (utmFilter === 'has_utm' && (result.utm_source || result.utm_medium || result.utm_campaign)) ||
      (utmFilter === 'no_utm' && !result.utm_source && !result.utm_medium && !result.utm_campaign);
    
    return matchesStatus && matchesSearch && matchesUtm;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'quote_sent': return 'bg-purple-100 text-purple-800';
      case 'converted': return 'bg-green-100 text-green-800';
      case 'lost': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatSelections = (selections: any) => {
    if (!selections) return 'No selections';
    
    const parts = [];
    if (selections.website_type) parts.push(`Website: ${selections.website_type}`);
    if (selections.addons && selections.addons.length > 0) parts.push(`Add-ons: ${selections.addons.join(', ')}`);
    if (selections.pages) parts.push(`Pages: ${selections.pages}`);
    if (selections.features && selections.features.length > 0) parts.push(`Features: ${selections.features.join(', ')}`);
    if (selections.seo) parts.push(`SEO: ${selections.seo}`);
    if (selections.legal && selections.legal.length > 0) parts.push(`Legal: ${selections.legal.join(', ')}`);
    if (selections.delivery) parts.push(`Delivery: ${selections.delivery}`);
    
    return parts.join(' | ');
  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-20 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Calculator Results</h1>
        <div className="text-sm text-gray-500">
          Total: {filteredResults.length} results
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search by name, email, company, or phone..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="quote_sent">Quote Sent</option>
          <option value="converted">Converted</option>
          <option value="lost">Lost</option>
        </select>
        <select
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={utmFilter}
          onChange={(e) => setUtmFilter(e.target.value)}
        >
          <option value="all">All Sources</option>
          <option value="has_utm">Has UTM</option>
          <option value="no_utm">No UTM</option>
        </select>
      </div>

      {/* Results Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Selections
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredResults.map((result) => (
                <tr key={result.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{result.name}</div>
                      <div className="text-sm text-gray-500">{result.email}</div>
                      {result.company && (
                        <div className="text-sm text-gray-500">🏢 {result.company}</div>
                      )}
                      {result.phone && (
                        <div className="text-sm text-gray-500">📞 {result.phone}</div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 max-w-xs truncate">
                      {formatSelections(result.selections)}
                    </div>
                    {result.message && (
                      <div className="text-sm text-gray-500 mt-1 max-w-xs truncate">
                        `{result.message}``
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      €{result.estimated_price.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(result.status)}`}
                      value={result.status}
                      onChange={(e) => updateStatus(result.id, e.target.value)}
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="quote_sent">Quote Sent</option>
                      <option value="converted">Converted</option>
                      <option value="lost">Lost</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(result.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => {
                        setSelectedResult(result);
                        setShowModal(true);
                      }}
                      className="text-blue-600 hover:text-blue-900 mr-3"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Modal */}
      {showModal && selectedResult && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Calculator Result Details</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4">
                                 <div>
                   <h4 className="font-medium text-gray-900">Contact Information</h4>
                   <div className="mt-2 space-y-1">
                     <p><strong>Name:</strong> {selectedResult.name}</p>
                     <p><strong>Email:</strong> <a href={`mailto:${selectedResult.email}`} className="text-blue-600 hover:underline">{selectedResult.email}</a></p>
                     {selectedResult.company && <p><strong>Company:</strong> 🏢 {selectedResult.company}</p>}
                     {selectedResult.phone && <p><strong>Phone:</strong> 📞 <a href={`tel:${selectedResult.phone}`} className="text-blue-600 hover:underline">{selectedResult.phone}</a></p>}
                     {selectedResult.message && (
                       <div>
                         <p><strong>Message:</strong></p>
                         <div className="bg-gray-50 p-3 rounded mt-1 text-sm">
                           `{selectedResult.message}`
                         </div>
                       </div>
                     )}
                   </div>
                 </div>
                 
                 <div>
                   <h4 className="font-medium text-gray-900">Lead Information</h4>
                   <div className="mt-2 space-y-1">
                     {selectedResult.ip_address && <p><strong>IP Address:</strong> {selectedResult.ip_address}</p>}
                     {selectedResult.user_agent && <p><strong>User Agent:</strong> <span className="text-xs text-gray-600">{selectedResult.user_agent}</span></p>}
                     {selectedResult.utm_source && <p><strong>UTM Source:</strong> {selectedResult.utm_source}</p>}
                     {selectedResult.utm_medium && <p><strong>UTM Medium:</strong> {selectedResult.utm_medium}</p>}
                     {selectedResult.utm_campaign && <p><strong>UTM Campaign:</strong> {selectedResult.utm_campaign}</p>}
                     <p><strong>Source:</strong> {selectedResult.source}</p>
                   </div>
                 </div>
                
                <div>
                  <h4 className="font-medium text-gray-900">Selections</h4>
                  <div className="mt-2 bg-gray-50 p-3 rounded">
                    <pre className="text-sm whitespace-pre-wrap">{JSON.stringify(selectedResult.selections, null, 2)}</pre>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900">Estimated Price</h4>
                  <p className="text-2xl font-bold text-green-600">€{selectedResult.estimated_price.toLocaleString()}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900">Admin Notes</h4>
                  <textarea
                    className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                    placeholder="Add notes about this lead..."
                    defaultValue={selectedResult.admin_notes || ''}
                    onBlur={(e) => updateNotes(selectedResult.id, e.target.value)}
                  />
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 