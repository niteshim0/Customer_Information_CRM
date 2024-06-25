import axios from 'axios';
const HUBSPOT_BASE_URL = 'https://api.hubapi.com/crm/v3/objects/contacts';

const hubSpotClient = axios.create({
  baseURL: HUBSPOT_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
  },
});

export { hubSpotClient };
