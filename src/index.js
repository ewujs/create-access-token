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
        method: 'GET'
      })
      .send()
      .then(res => res)
      .catch((e) => {
        throw Error(e);
      });

      return sessionToken.session_token;
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

      return tokenData;
    } catch (e) {
      console.error(e);
    }
  };

  const createFullAccessToken = async (params) => {
    const {key, secret, username, password} = params || {};

    if (typeof key !== 'string') {
      throw new Error('Please pass a API Key.');
    }

    if (typeof secret !== 'string') {
      throw new Error('Please pass a API secret.');
    }

    try {
      const tokenData = await ajax({
        url: `https://${apiDomain}/oauth20/token`,
        method: 'POST',
        headers: {
          Authorization: `Basic ${window.btoa(key + ':' + secret)}`
        },
        data: {
          grant_type: 'password',
          dr_session_token: sessionToken,
          username: username,
          password: window.btoa(password)
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

  window.DRAccessToken = {
    createLimitedAccessToken: createLimitedAccessToken,
    createFullAccessToken: createFullAccessToken,
    getTokenInfo: getTokenInfo,
  };
})(window);