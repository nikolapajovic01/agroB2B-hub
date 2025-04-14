import { Request, Response } from 'express'
import { AuthRequest } from '../middleware/auth'
import {
  fetchCompanyVerificationStatus,
  fetchCompanyDetails,
} from '../services/company.service'

export const getCompanyVerificationStatus = async (req: Request, res: Response) => {
  try {
    const { companyId } = req.params
    const isVerified = await fetchCompanyVerificationStatus(parseInt(companyId))

    if (isVerified === null) {
      return res.status(404).json({ error: 'Company not found' })
    }

    res.json({ isVerified })
  } catch (error) {
    console.error('Error checking company verification:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const getCompanyDetailsForLoggedInUser = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    const company = await fetchCompanyDetails(req.user.companyId)

    if (!company) {
      return res.status(404).json({ error: 'Company not found' })
    }

    res.json(company)
  } catch (error) {
    console.error('❌ Error fetching company details:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
