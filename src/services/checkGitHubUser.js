const checkGitHubUser = async (userName) => {
  let response;
  try {
    const request = await fetch(`https://api.github.com/users/${userName}`, {
      method: 'GET',      
    });
    response = await request.json();    
    if (!response.avatar_url) return false;
    console.log(response);
  } catch (e) {
    return false;
  }
  return true;
};

export default checkGitHubUser;