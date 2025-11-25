exports.handler = async (event) => {
  const jobs = [
    {
      id: 1,
      title: "ইউটিউব ভিডিও দেখুন",
      description: "৫ মিনিটের একটি প্রোমো ভিডিও দেখুন এবং কমেন্ট করুন",
      price: "৫/-",
      type: "ভিডিও",
      duration: "05:00"
    },
    {
      id: 2,
      title: "ফেসবুক পোস্ট লাইক করুন", 
      description: "ফেসবুক পেজের লেটেস্ট পোস্ট লাইক করুন",
      price: "৩/-",
      type: "সোশ্যাল",
      duration: "05:00"
    }
  ];
  
  return {
    statusCode: 200,
    body: JSON.stringify({ jobs: jobs })
  };
};
