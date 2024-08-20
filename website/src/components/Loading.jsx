import React, { useState, useEffect } from 'react';

function Loading() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 seconds delay

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (loading) {
    return <div id="preloader"></div>;
  }else{
    return <></>;
  }

}

export default Loading;