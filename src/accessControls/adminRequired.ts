import type { Access } from 'payload';

export const adminRequired: Access = ({ req: { user } }) => {
  return Boolean(user && user.role === 'admin');
};
