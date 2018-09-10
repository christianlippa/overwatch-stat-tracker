import React from 'react';

export const getPlayerData = (username, tag) => {
  if(!username || !tag) return
  const santizedUser = username.trim();
  const santizedTag = tag.trim();
  const apiString = `https://ow-api.com/v1/stats/pc/us/${username}-${tag}/profile`
  const newApiString = "https://ow-api.com/v1/stats/pc/us/actualtrash-11356/profile"
  fetch(newApiString)
  .then(response => response.json())
  .then(data => data)
  .catch(err => console.error(err.toString()));
};