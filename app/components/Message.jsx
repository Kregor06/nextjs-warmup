'use client';

import { useState } from 'react';

export default function MessageLoader() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function loadMessage() {
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await fetch('/api/messages');

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = await response.json();
      setMessage(data.message);
    } catch (err) {
      setError('Could not load the message');
    }

    setLoading(false);
  }

  return (
    <div>
      <button onClick={loadMessage}>Load server message</button>

      {loading && <p>Loading...</p>}
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}