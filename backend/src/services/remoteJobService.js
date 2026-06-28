const axios = require("axios");

const fetchRemoteJobs = async () => {
  try {
    const response = await axios.get("https://remoteok.com/api", {
      headers: {
        Accept: "application/json",
      },
    });

    let jobs = response.data;

    // Remove legal notice
    if (Array.isArray(jobs) && jobs.length > 0 && jobs[0].legal) {
      jobs = jobs.slice(1);
    }

    return jobs;
  } catch (error) {
    console.error("RemoteOK Error:", error.message);
    return [];
  }
};

module.exports = {
  fetchRemoteJobs,
};
