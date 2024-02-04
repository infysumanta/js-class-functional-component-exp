// token.js
function getToken(appid, secret, mode) {
  console.log("getToken", appid, secret, mode);
  return `token-${Math.floor(Math.random() * 1001)}`;
}

export default getToken;
