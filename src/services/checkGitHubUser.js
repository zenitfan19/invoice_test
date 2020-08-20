const checkGitHubUser = async (userName) => {  
  let response;
  try {
    const request = await fetch(`https://api.github.com/users/${userName}`, {
      method: 'GET',      
    });
    response = await request.json();
    // console.log(response);
    if (!response.avatar_url) return false;    
  } catch (e) {
    return false;
  }
  return true;
};

export default checkGitHubUser;