'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function UploadPage() {
  const [form, setForm] = useState({ title:'', category:'Guide', desc:'', fileUrl:'' });
  const router = useRouter();

  const handle = () => {
    fetch('/api/resources/upload', { method:'POST', body: JSON.stringify(form) })
      .then(()=> router.push('/resources'));
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Upload Resource</h1>
      {['title','desc','fileUrl'].map(field=>(
        <div key={field} className="mb-4">
          <label>{field[0].toUpperCase()+field.slice(1)}</label>
          <input
            className="w-full mt-1 p-2 border rounded"
            placeholder={`Enter ${field[0].toUpperCase() + field.slice(1)}`}
            title={field[0].toUpperCase() + field.slice(1)}
            onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
          />
        </div>
      ))}
      <Button onClick={handle}>Submit</Button>
    </main>
  );
}
