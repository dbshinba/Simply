exports.handler = async (event) => {
  const jobs = [
    {
      id: 1,
      title: "YouTube Video",
      description: "Watch 5 minute video",
      price: "5",
      type: "video", 
      duration: "05:05"
    }
  ];
  
  return {
    statusCode: 200,
    body: JSON.stringify({ jobs: jobs })
  };
};
