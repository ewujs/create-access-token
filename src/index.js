import {ajax} from './ajax';

(function(window) {
  const subdomain = window.location.hostname.split('.')[0];
  const testEnv = ['cte', 'pte', 'lte'].find(element => subdomain.indexOf(element) !== -1);
  let apiDomain = '';

  if (testEnv === undefined) {
    apiDomain = (subdomain.indexOf('sys') !== -1) ? 'dispatch-test.digitalriver.com' : 'api.digitalriver.com';
  } else {
    apiDomain = `dispatch-${testEnv}.digitalriverws.net`;
  }

  const getSessionToken = async (siteId) => {
    if (typeof siteId !== 'string') {
      throw new Error('Please pass the site ID.');
    }

    try {
      const sessionToken = await ajax({
        url: `https://${window.location.hostname}/store/${siteId}/SessionToken`,
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      })
      .send()
      .then(res => res)
      .catch((e) => {
        throw Error(e);
      });

      return JSON.parse(sessionToken).session_token;
    } catch (e) {
      console.error(e);
    }
  };

  const createLimitedAccessToken = async (params) => {
    const {key, secret, siteId} = params || {};
  
    if (typeof key !== 'string') {
      throw new Error('Please pass a API Key.');
    }
  
    if (typeof secret !== 'string') {
      throw new Error('Please pass a API secret.');
    }
  
    if (typeof siteId !== 'string') {
      throw new Error('Please pass the site ID.');
    }
  
    try {
      const sessionToken = await getSessionToken(siteId);
      const tokenData = await ajax({
        url: `https://${apiDomain}/oauth20/token`,
        method: 'POST',
        headers: {
          Authorization: `Basic ${window.btoa(key + ':' + secret)}`
        },
        data: {
          grant_type: 'password',
          dr_session_token: sessionToken
        }
      })
      .send()
      .then(res => res)
      .catch((e) => {
        throw Error(e);
      });

      sessionStorage.setItem('drAccessToken', tokenData);

      return tokenData;
    } catch (e) {
      console.error(e);
    }
  };

  const createFullAccessToken = async (params) => {
    const {key, secret, siteId, username, password} = params || {};

    if (typeof key !== 'string') {
      throw new Error('Please pass a API Key.');
    }

    if (typeof secret !== 'string') {
      throw new Error('Please pass a API secret.');
    }

    if (typeof siteId !== 'string') {
      throw new Error('Please pass the site ID.');
    }

    try {
      const sessionToken = await getSessionToken(siteId);
      const tokenData = await ajax({
        url: `https://${apiDomain}/oauth20/token`,
        method: 'POST',
        headers: {
          Authorization: `Basic ${window.btoa(key + ':' + secret)}`
        },
        data: {
          grant_type: 'password',
          username: username,
          password: window.btoa(password),
          dr_session_token: sessionToken
        }
      })
      .send()
      .then(res => res)
      .catch((e) => {
        throw Error(e);
      });

      sessionStorage.setItem('drAccessToken', tokenData);

      return tokenData;
    } catch (e) {
      console.error(e);
    }
  };

  const createLimitedAccessTokenByPk = async (siteId, pk) => {
    if (typeof siteId !== 'string') {
      throw new Error('Please pass the site ID.');
    }

    if (typeof pk !== 'string') {
      throw new Error('Please pass a public API Key.');
    }

    try {
      const tokenData = await ajax({
        url: `https://${window.location.hostname}/store/${siteId}/SessionToken?apiKey=${pk}`,
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      })
      .send()
      .then(res => res)
      .catch((e) => {
        throw Error(e);
      });

      return tokenData;
    } catch (e) {
      console.error(e);
    }
  };

  const getTokenInfo = async (token) => {
    if (typeof token !== 'string') {
      throw new Error('Please pass the token.');
    }

    try {
      const tokenInfo = await ajax({
        url: `https://${apiDomain}/oauth20/access-tokens?token=${token}`,
        method: 'GET'
      })
      .send()
      .then(res => res)
      .catch((e) => {
        throw Error(e);
      });

      return tokenInfo;
    } catch (e) {
      console.error(e);
    }
  };

  window.DRCommAPI = {
    createLimitedAccessToken: createLimitedAccessToken,
    createFullAccessToken: createFullAccessToken,
    createLimitedAccessTokenByPk: createLimitedAccessTokenByPk,
    getTokenInfo: getTokenInfo
  };
})(window);