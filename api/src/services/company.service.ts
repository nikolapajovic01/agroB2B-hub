import { prisma } from '../config/prisma'

export const fetchCompanyVerificationStatus = async (
  companyId: number
): Promise<boolean | null> => {
  const company = await prisma.company.findUnique({
    where: { id: companyId },
    select: { isVerified: true },
  })

  return company ? company.isVerified : null
}

export const fetchCompanyDetails = async (companyId: number) => {
  return await prisma.company.findUnique({
    where: { id: companyId },
    select: {
      name: true,
      pibNumber: true,
      type: true,
      capacity: true,
      bonitet: true,
      photoUrl: true,
      isVerified: true,
      certificates: true,
    },
  })
}
