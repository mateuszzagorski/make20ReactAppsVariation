import React, { useState, useEffect } from 'react';

function addHttps(url) {
  if (!url.startsWith('http') || !url.startsWith('https')) {
    return `https://${url}`;
  }
}

export default function AddressBar({ update, url }) {
  const [value, setValue] = useState(url || '');

  useEffect(() => {
    setValue(url);
  }, [url]);

  function handleSumbit(e) {
    e.preventDefault();
    //check for https:
    const httpsUrl = addHttps(value);
    update(httpsUrl);
  }

  return (
    <div className="address-bar">
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          name="url"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
}
