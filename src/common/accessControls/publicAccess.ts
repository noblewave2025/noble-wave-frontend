import type { Access } from 'payload';

export const publicAccess: Access = ({ req: { user } }) => {
  return true;
};
