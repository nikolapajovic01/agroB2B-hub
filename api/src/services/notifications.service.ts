import { prisma } from '../config/prisma'

export const fetchNotificationsAfterTimestamp = async (afterDate: Date) => {
  return await prisma.notification.findMany({
    where: {
      createdAt: {
        gt: afterDate,
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
}
