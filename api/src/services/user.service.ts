// services/user.service.ts
import { prisma } from '../config/prisma'; // Prisma client

export const fetchUserDetails = async (userId: number) => {
  return prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      userType: true,
      phoneNumber: true,
    },
  });
};
