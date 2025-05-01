'use client';

import { useEffect, useState } from 'react';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import PageHero from '@/components/PageHero';
import ContentSection from '@/components/ContentSection';
import WoltButton from '@/components/WoltButton';
import Link from 'next/link';

export default function SupabaseTestPage() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Testing Supabase connection...');
  const [details, setDetails] = useState<{
    url: string;
    connected: boolean;
    tablesFound: string[];
    error?: string;
  }>({
    url: '',
    connected: false,
    tablesFound: [],
  });

  useEffect(() => {
    async function checkSupabaseConnection() {
      try {
        if (!isSupabaseConfigured()) {
          setStatus('error');
          setMessage('Supabase configuration missing');
          setDetails({
            url: 'Not configured',
            connected: false,
            tablesFound: [],
            error: 'NEXT_PUBLIC_SUPABASE_URL and/or NEXT_PUBLIC_SUPABASE_ANON_KEY not found in .env.local'
          });
          return;
        }

        // Get the Supabase URL (masked for security)
        const url = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
        const maskedUrl = url.replace(/^(https:\/\/[^.]+)(.+)$/, '$1***$2');

        // Test simple query
        const { data, error } = await supabase.from('pledges').select('created_at').limit(1);
        
        if (error) {
          setStatus('error');
          setMessage('Error connecting to Supabase');
          setDetails({
            url: maskedUrl,
            connected: false,
            tablesFound: [],
            error: error.message
          });
          return;
        }

        // Check which tables exist
        const { data: tableData, error: tableError } = await supabase
          .from('information_schema.tables')
          .select('table_name')
          .eq('table_schema', 'public');

        const tables = tableData?.map(t => t.table_name) || [];
        
        setStatus('success');
        setMessage('Successfully connected to Supabase!');
        setDetails({
          url: maskedUrl,
          connected: true,
          tablesFound: tables,
          error: tableError?.message
        });
      } catch (err) {
        setStatus('error');
        setMessage('Error checking Supabase connection');
        setDetails({
          url: process.env.NEXT_PUBLIC_SUPABASE_URL || 'Unknown',
          connected: false,
          tablesFound: [],
          error: err instanceof Error ? err.message : 'Unknown error'
        });
      }
    }

    checkSupabaseConnection();
  }, []);

  return (
    <>
      <PageHero 
        title="Supabase Connection Test" 
        color="primary"
      />
      
      <main>
        <ContentSection>
          <div className="max-w-3xl mx-auto py-10">
            <div className={`p-6 rounded-lg mb-6 ${
              status === 'loading' ? 'bg-gray-100 dark:bg-gray-800' :
              status === 'success' ? 'bg-green-50 dark:bg-green-900' :
              'bg-red-50 dark:bg-red-900'
            }`}>
              <h2 className={`text-xl font-bold mb-4 ${
                status === 'loading' ? 'text-gray-800 dark:text-gray-200' :
                status === 'success' ? 'text-green-700 dark:text-green-300' :
                'text-red-700 dark:text-red-300'
              }`}>
                {status === 'loading' && (
                  <span className="inline-flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {message}
                  </span>
                )}
                {status === 'success' && (
                  <span className="inline-flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {message}
                  </span>
                )}
                {status === 'error' && (
                  <span className="inline-flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    {message}
                  </span>
                )}
              </h2>
              
              <div className="space-y-4 mt-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Supabase URL:</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{details.url}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Connection Status:</h3>
                  <p className={`mt-1 ${details.connected ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {details.connected ? 'Connected' : 'Not Connected'}
                  </p>
                </div>
                
                {details.tablesFound.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Tables Found:</h3>
                    <ul className="list-disc list-inside mt-1 text-gray-600 dark:text-gray-400">
                      {details.tablesFound.map(table => (
                        <li key={table} className={table === 'pledges' ? 'text-green-600 font-bold' : ''}>
                          {table} {table === 'pledges' && '✓'}
                        </li>
                      ))}
                    </ul>
                    {!details.tablesFound.includes('pledges') && (
                      <p className="text-red-600 dark:text-red-400 mt-2">
                        Could not find the 'pledges' table. Please make sure you've run the SQL setup script.
                      </p>
                    )}
                  </div>
                )}
                
                {details.error && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Error:</h3>
                    <p className="text-red-600 dark:text-red-400 mt-1 p-2 bg-red-50 dark:bg-red-900/30 rounded">
                      {details.error}
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex justify-center space-x-4 mt-8">
              <Link href="/" passHref>
                <WoltButton variant="secondary">Back to Home</WoltButton>
              </Link>
              
              <Link href="/pledge" passHref>
                <WoltButton>Go to Pledge Page</WoltButton>
              </Link>
            </div>
          </div>
        </ContentSection>
      </main>
    </>
  );
} 